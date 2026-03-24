import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { Notification, toast } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import type { FolderDetailResponseDto } from '@/openApiServices/api'
import { folderApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const validationSchema = z.object({
    folderName: z
        .string()
        .min(1, { message: 'Folder name is required' })
        .max(255, { message: 'Folder name must not exceed 255 characters' }),
    folderDefinition: z.string().optional(),
    parentFolderId: z.number().nullable().optional(),
    categoryId: z.number().nullable().optional(),
    attributeId: z.number().nullable().optional(),
})

type FolderFormSchema = z.infer<typeof validationSchema>

const FolderCreate = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { t } = useTranslation()
    // React Query mutation
    const createFolderMutation = useMutation({
        mutationFn: async (data: Record<string, unknown>) => {
            const response = await folderApi.apiFolderCreatePost(data)
            return response.data
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            navigate('/concepts/folders/folder-list')
        },
        onError: (error: unknown) => {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('common.danger')}
                </Notification>,
            )
            console.error('Error creating folder:', error)
        },
    })
    const [parentFolders, setParentFolders] = useState<
        FolderDetailResponseDto[]
    >([])
    // Aktif klasörleri factory'den çek
    useEffect(() => {
        const loadFolders = async () => {
            try {
                const foldersResponse =
                    await folderApi.apiFolderActiveFoldersGet()
                // Tip uyumsuzluğunu düzeltmek için map ile id'yi number'a zorla
                const folders = (foldersResponse.data || []).map(
                    (folder: FolderDetailResponseDto) => ({
                        ...folder,
                        id: typeof folder.id === 'number' ? folder.id : 0,
                    }),
                )
                setParentFolders(folders)
            } catch (error) {
                console.error('Error loading parent folders:', error)
            }
        }
        loadFolders()
    }, [])

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FolderFormSchema>({
        defaultValues: {
            folderName: '',
            folderDefinition: '',
            parentFolderId: null,
            categoryId: null,
            attributeId: null,
        },
        resolver: zodResolver(validationSchema),
    })

    // Load parent folders and categories
    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             // Load active folders for parent selection
    //             const foldersResponse = await apiFolderActiveFolders()
    //             setParentFolders(foldersResponse)

    //             // Load categories
    //             const categoriesResponse = await apiGetCategoryList({
    //                 pageNumber: 1,
    //                 pageSize: 100,
    //                 searchText: '',
    //                 searchField: [],
    //             })
    //             setCategories(categoriesResponse.data || [])
    //         } catch (error) {
    //             console.error('Error loading data:', error)
    //         }
    //     }

    //     loadData()
    // }, [])

    const onSubmit = async (values: FolderFormSchema) => {
        setIsSubmitting(true)
        const createCommand = {
            folderName: values.folderName,
            folderDefinition: values.folderDefinition || '',
            parentFolderId: values.parentFolderId ?? null,
            categoryId: values.categoryId ?? null,
            attributeId: values.attributeId ?? null,
        }
        createFolderMutation.mutate(createCommand, {
            onSettled: () => setIsSubmitting(false),
        })
    }

    const onCancel = () => {
        navigate('/concepts/folders/folder-list')
    }

    // Parent folder options
    const parentFolderOptions = [
        {
            value: 0,
            label: `${t('nav.conceptsFolders.select_parent_folder')} `,
        },
        ...parentFolders.map((folder) => ({
            value: folder.id,
            label: folder.folderName || `Folder ${folder.id}`,
        })),
    ]

    // Category options
    const categoryOptions = [
        { value: null, label: `${t('nav.conceptsFolders.category_select')}` },
    ]

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0">
                        {t('nav.conceptsFolders.folderCreate')}
                    </h3>
                </div>
                <div className="max-w-2xl">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormItem
                            label={t('nav.conceptsFolders.folder_name')}
                            invalid={Boolean(errors.folderName)}
                            errorMessage={errors.folderName?.message}
                        >
                            <Controller
                                name="folderName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder={t(
                                            'nav.conceptsFolders.folder_name',
                                        )}
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsFolders.desc')}
                            invalid={Boolean(errors.folderDefinition)}
                            errorMessage={errors.folderDefinition?.message}
                        >
                            <Controller
                                name="folderDefinition"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder={t(
                                            'nav.conceptsFolders.desc',
                                        )}
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsFolders.parent_folder')}
                            invalid={Boolean(errors.parentFolderId)}
                            errorMessage={errors.parentFolderId?.message}
                        >
                            <Controller
                                name="parentFolderId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        placeholder={t(
                                            'nav.conceptsFolders.select_parent_folder',
                                        )}
                                        options={parentFolderOptions}
                                        value={parentFolderOptions.find(
                                            (option) =>
                                                option.value ===
                                                (field.value ?? 0),
                                        )}
                                        onChange={(option) =>
                                            field.onChange(option?.value ?? 0)
                                        }
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsFolders.category')}
                            invalid={Boolean(errors.categoryId)}
                            errorMessage={errors.categoryId?.message}
                        >
                            <Controller
                                name="categoryId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        placeholder={t(
                                            'nav.conceptsFolders.category_select',
                                        )}
                                        options={categoryOptions}
                                        value={categoryOptions.find(
                                            (option) =>
                                                option.value === field.value,
                                        )}
                                        onChange={(option) =>
                                            field.onChange(
                                                option?.value ?? null,
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormItem>

                        <div className="flex items-center justify-end">
                            <Button
                                size="sm"
                                className="ltr:mr-2 rtl:ml-2"
                                type="button"
                                onClick={onCancel}
                            >
                                {t('common.cancel')}
                            </Button>
                            <Button
                                size="sm"
                                variant="solid"
                                loading={isSubmitting}
                                icon={null}
                                type="submit"
                            >
                                {t('nav.conceptsFolders.folderCreate')}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default FolderCreate
