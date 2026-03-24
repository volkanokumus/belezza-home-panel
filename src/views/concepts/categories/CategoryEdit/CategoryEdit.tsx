import type { CategoryGridListResponseDto_Category } from '@/@types/category'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { Notification, toast } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import Switcher from '@/components/ui/Switcher'
import type { CategoryUpdateRequestDto } from '@/openApiServices/api'
import { categoryApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { z } from 'zod'

const validationSchema = z.object({
    id: z.number(),
    categoryName: z
        .string()
        .min(1, { message: 'Category name is required' })
        .max(255, { message: 'Category name must not exceed 255 characters' }),
    categoryColor: z.string().optional(),
    categoryIcon: z.string().optional(),
    parentCategoryId: z.number().nullable().optional(),
    willBeVisibleForDocumentTree: z.boolean(),
})

type CategoryFormSchema = z.infer<typeof validationSchema>

const CategoryEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()
    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<CategoryFormSchema>({
        defaultValues: {
            id: 0,
            categoryName: '',
            categoryColor: '',
            categoryIcon: '',
            parentCategoryId: null,
            willBeVisibleForDocumentTree: false,
        },
        resolver: zodResolver(validationSchema),
    })

    // Fetch parent categories
    const { data: parentCategoriesData } = useQuery(
        'parentCategories',
        async () => {
            const response = await categoryApi.apiCategoryGetCategoriesPost({
                draw: 1,
                start: 0,
                length: 100,
            })
            return (
                (response.data
                    ?.data as CategoryGridListResponseDto_Category[]) || []
            )
        },
    )

    useEffect(() => {
        const loadCategory = async () => {
            if (!id) return
            try {
                const categoryId = parseInt(id)
                const response =
                    await categoryApi.apiCategoryGetCategoryByIdPost({
                        id: categoryId,
                    })
                const category = response.data
                reset({
                    id: category.id ?? 0,
                    categoryName: category.categoryName ?? '',
                    categoryColor: category.categoryColor || '',
                    categoryIcon: category.categoryIcon || '',
                    parentCategoryId: category.parentCategoryId ?? null,
                    willBeVisibleForDocumentTree:
                        category.willBeVisibleForDocumentTree ?? false,
                })
            } catch (error) {
                console.error('Error loading category:', error)
            } finally {
                setLoading(false)
            }
        }
        loadCategory()
    }, [id, reset])

    const onSubmit = async (values: CategoryFormSchema) => {
        if (!values.id || values.id === 0) return
        setIsSubmitting(true)
        try {
            const updateCommand: CategoryUpdateRequestDto = {
                dto: {
                    id: values.id ?? 0,
                    categoryName: values.categoryName ?? '',
                    categoryColor: values.categoryColor || '',
                    categoryIcon: values.categoryIcon || '',
                    parentCategoryId: values.parentCategoryId ?? null,
                    willBeVisibleForDocumentTree:
                        !!values.willBeVisibleForDocumentTree,
                },
            }
            await categoryApi.apiCategoryUpdateCategoryPut(updateCommand)
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            navigate('/concepts/categories/category-list')
        } catch (error) {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('common.danger')}
                </Notification>,
            )
            console.error('Error updating category:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const onCancel = () => {
        navigate('/concepts/categories/category-list')
    }

    if (loading) {
        return (
            <Container className="h-full">
                <AdaptiveCard>
                    <div className="flex items-center justify-center h-40">
                        <div>Loading category...</div>
                    </div>
                </AdaptiveCard>
            </Container>
        )
    }

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <h3>{t('nav.conceptsCategories.categoryEdit')}</h3>
                        {/* <p>Update category information</p> */}
                    </div>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormItem
                            label={t('nav.conceptsCategories.categoryName')}
                            invalid={Boolean(errors.categoryName)}
                            errorMessage={errors.categoryName?.message}
                        >
                            <Controller
                                name="categoryName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder="e.g. Technology"
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsCategories.color')}
                            invalid={Boolean(errors.categoryColor)}
                            errorMessage={errors.categoryColor?.message}
                        >
                            <Controller
                                name="categoryColor"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="color"
                                        placeholder="#3B82F6"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsCategories.icon')}
                            invalid={Boolean(errors.categoryIcon)}
                            errorMessage={errors.categoryIcon?.message}
                        >
                            <Controller
                                name="categoryIcon"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder="e.g. 📁 or icon name"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsCategories.parent_category')}
                            invalid={Boolean(errors.parentCategoryId)}
                            errorMessage={errors.parentCategoryId?.message}
                        >
                            <Controller
                                name="parentCategoryId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        isClearable
                                        options={parentCategoriesData}
                                        getOptionLabel={(
                                            option: CategoryGridListResponseDto_Category,
                                        ) => option.categoryName || ''}
                                        getOptionValue={(
                                            option: CategoryGridListResponseDto_Category,
                                        ) => String(option.id)}
                                        placeholder={t(
                                            'nav.conceptsCategories.category_parent_select',
                                        )}
                                        value={
                                            parentCategoriesData?.find(
                                                (
                                                    cat: CategoryGridListResponseDto_Category,
                                                ) =>
                                                    String(cat.id) ===
                                                    String(field.value),
                                            ) || null
                                        }
                                        onChange={(
                                            option: CategoryGridListResponseDto_Category | null,
                                        ) =>
                                            field.onChange(
                                                option ? option.id : null,
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t(
                                'nav.conceptsCategories.document_tree_visible',
                            )}
                            invalid={Boolean(
                                errors.willBeVisibleForDocumentTree,
                            )}
                            errorMessage={
                                errors.willBeVisibleForDocumentTree?.message
                            }
                        >
                            <Controller
                                name="willBeVisibleForDocumentTree"
                                control={control}
                                render={({ field }) => (
                                    <Switcher
                                        checked={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </FormItem>

                        <div className="flex items-center justify-end gap-4 mt-8">
                            <Button
                                type="button"
                                variant="plain"
                                onClick={onCancel}
                            >
                                {t('common.cancel')}
                            </Button>
                            <Button
                                type="submit"
                                variant="solid"
                                loading={isSubmitting}
                            >
                                {isSubmitting
                                    ? `${t('common.updating')}`
                                    : `${t('nav.conceptsCategories.categoryUpdate')}`}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default CategoryEdit
