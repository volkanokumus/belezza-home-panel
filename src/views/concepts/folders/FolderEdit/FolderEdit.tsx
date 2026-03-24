import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { FormItem, Form } from '@/components/ui/Form'
import { apiFolderById, apiFolderUpdate, apiFolderActiveFolders } from '@/services/FolderService'
import type { FolderUpdateCommand, FolderDetailResponseDto } from '@/@types/folder'

const validationSchema = z.object({
    id: z.number(),
    folderName: z
        .string()
        .min(1, { message: 'Folder name is required' })
        .max(255, { message: 'Folder name must not exceed 255 characters' }),
    folderDefinition: z.string().optional(),
    parentFolderId: z.number().nullable().optional(),
})

type FolderFormSchema = z.infer<typeof validationSchema>

const FolderEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(true)
    const [parentFolders, setParentFolders] = useState<FolderDetailResponseDto[]>([])

    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<FolderFormSchema>({
        defaultValues: {
            id: 0,
            folderName: '',
            folderDefinition: '',
            parentFolderId: null,
        },
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        const loadFolder = async () => {
            if (!id) return
            
            try {
                const folderId = parseInt(id)
                
                console.log('=== FOLDER EDIT DEBUG ===')
                console.log('Folder ID:', folderId)
                console.log('Loading folder data...')
                
                const [folderResponse, foldersResponse] = await Promise.all([
                    apiFolderById(folderId),
                    apiFolderActiveFolders()
                ])
                
                console.log('Folder Response:', folderResponse)
                console.log('Active Folders Response:', foldersResponse)
                console.log('========================')
                
                // Filter out current folder from parent options
                setParentFolders(foldersResponse.filter(f => f.id !== folderId))
                
                reset({
                    id: folderResponse.id,
                    folderName: folderResponse.folderName || (folderResponse as any).FolderName,
                    folderDefinition: folderResponse.folderDefinition || (folderResponse as any).FolderDefinition || '',
                    parentFolderId: folderResponse.parentFolderId || (folderResponse as any).ParentFolderId,
                })
            } catch (error) {
                console.error('Error loading folder:', error)
            } finally {
                setLoading(false)
            }
        }

        loadFolder()
    }, [id, reset])

    const onSubmit = async (values: FolderFormSchema) => {
        if (!values.id || values.id === 0) return
        
        console.log('=== FOLDER UPDATE DEBUG ===')
        console.log('Form values:', values)
        
        setIsSubmitting(true)
        try {
            const updateCommand: FolderUpdateCommand = {
                id: values.id,
                folderName: values.folderName,
                folderDefinition: values.folderDefinition || null,
                parentFolderId: values.parentFolderId,
            }
            
            console.log('Update command:', updateCommand)
            console.log('Making API update request...')
            
            await apiFolderUpdate(updateCommand)
            
            console.log('Update successful!')
            console.log('===============================')
            
            navigate('/concepts/folders/folder-list')
        } catch (error) {
            console.error('Error updating folder:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const onCancel = () => {
        navigate('/concepts/folders/folder-list')
    }

    if (loading) {
        return (
            <Container className="h-full">
                <AdaptiveCard>
                    <div className="flex items-center justify-center h-40">
                        <div>Loading folder...</div>
                    </div>
                </AdaptiveCard>
            </Container>
        )
    }

    // Parent folder options (exclude current folder)
    const parentFolderOptions = [
        { value: null, label: 'No Parent (Root Folder)' },
        ...parentFolders.map(folder => ({
            value: folder.id,
            label: folder.folderName || (folder as any).FolderName || `Folder ${folder.id}`
        }))
    ]

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0">Edit Folder</h3>
                </div>
                <div className="max-w-2xl">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormItem
                            label="Folder Name"
                            invalid={Boolean(errors.folderName)}
                            errorMessage={errors.folderName?.message}
                        >
                            <Controller
                                name="folderName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder="Enter folder name"
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label="Description"
                            invalid={Boolean(errors.folderDefinition)}
                            errorMessage={errors.folderDefinition?.message}
                        >
                            <Controller
                                name="folderDefinition"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder="Enter folder description (optional)"
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label="Parent Folder"
                            invalid={Boolean(errors.parentFolderId)}
                            errorMessage={errors.parentFolderId?.message}
                        >
                            <Controller
                                name="parentFolderId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        placeholder="Select parent folder"
                                        options={parentFolderOptions}
                                        value={parentFolderOptions.find(option => option.value === field.value)}
                                        onChange={(option) => field.onChange(option?.value ?? null)}
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
                                Cancel
                            </Button>
                            <Button
                                size="sm"
                                variant="solid"
                                loading={isSubmitting}
                                icon={null}
                                type="submit"
                            >
                                Update Folder
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default FolderEdit