import type { CategoryCreateRequestDto } from '@/@types/category'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { Notification, toast } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import Switcher from '@/components/ui/Switcher'
import { categoryApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const validationSchema = z.object({
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

const CategoryCreate = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { t } = useTranslation()

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<CategoryFormSchema>({
        defaultValues: {
            categoryName: '',
            categoryColor: '',
            categoryIcon: '',
            parentCategoryId: null,
            willBeVisibleForDocumentTree: false,
        },
        resolver: zodResolver(validationSchema),
    })

    // React Query mutation
    const createCategoryMutation = useMutation({
        mutationFn: async (data: CategoryCreateRequestDto) => {
            const response =
                await categoryApi.apiCategoryCreateCategoryPost(data)
            return response.data
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            navigate('/concepts/categories/category-list')
        },
        onError: (error: unknown) => {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('common.danger')}
                </Notification>,
            )
            console.error('Error creating category:', error)
        },
    })

    // Fetch parent categories
    const { data: parentCategoriesData } = useQuery(
        'parentCategories',
        async () => {
            // Fetch all categories for parent selection
            const response = await categoryApi.apiCategoryGetCategoriesPost({
                draw: 1,
                start: 0,
                length: 100,
            })
            return response.data?.data || []
        },
    )

    const onSubmit = (values: CategoryFormSchema) => {
        setIsSubmitting(true)
        const createCommand: CategoryCreateRequestDto = {
            categoryName: values.categoryName,
            categoryColor: values.categoryColor || null,
            categoryIcon: values.categoryIcon || null,
            parentCategoryId: values.parentCategoryId,
            willBeVisibleForDocumentTree: values.willBeVisibleForDocumentTree,
        }
        createCategoryMutation.mutate(createCommand, {
            onSettled: () => setIsSubmitting(false),
        })
    }

    const onCancel = () => {
        navigate('/concepts/categories/category-list')
    }

    return (
        <Container>
            <AdaptiveCard>
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <h3>{t('nav.conceptsCategories.categoryCreate')}</h3>
                        {/* <p>Add a new category to your system</p> */}
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
                                        placeholder={t(
                                            'nav.conceptsCategories.categoryName',
                                        )}
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
                                        placeholder={t(
                                            'nav.conceptsCategories.icon',
                                        )}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsCategories.parent_category')}
                        >
                            <Controller
                                name="parentCategoryId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        options={parentCategoriesData}
                                        isClearable
                                        getOptionLabel={(option) =>
                                            option.categoryName || ''
                                        }
                                        getOptionValue={(option) =>
                                            String(option.id)
                                        }
                                        placeholder={t(
                                            'nav.conceptsCategories.category_parent_select',
                                        )}
                                        value={
                                            parentCategoriesData?.find(
                                                (cat) =>
                                                    String(cat.id) ===
                                                    String(field.value),
                                            ) || null
                                        }
                                        onChange={(option) =>
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
                                    : `${t('nav.conceptsCategories.categoryCreate')}`}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default CategoryCreate
