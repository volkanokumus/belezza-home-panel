import UploadMedia from '@/assets/svg/UploadMedia'
import { Upload } from '@/components/ui'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Dialog from '@/components/ui/Dialog'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { apiUploadImage, apiUploadMultipleImages } from '@/services/FileService'
import { useState } from 'react'
import type { Control, FieldErrors } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { TbPlus } from 'react-icons/tb'
import { useMutation } from 'react-query'
import type { ProductFormSchema } from '../types'

type ImageSectionProps = {
    control: Control<ProductFormSchema>
    errors: FieldErrors<ProductFormSchema>
}

const ImageSection = ({ control, errors }: ImageSectionProps) => {
    const [mainImageModalOpen, setMainImageModalOpen] = useState(false)
    const [additionalImagesModalOpen, setAdditionalImagesModalOpen] =
        useState(false)
    const [mainImageFile, setMainImageFile] = useState<File | null>(null)
    const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([])
    const [mainImageField, setMainImageField] = useState<any>(null)
    const [additionalImagesField, setAdditionalImagesField] =
        useState<any>(null)

    const uploadMainImageMutation = useMutation({
        mutationFn: async (file: File) => {
            return await apiUploadImage(file)
        },
        onSuccess: (data: any) => {
            const imageUrl = data?.data?.fileUrl || data?.fileUrl || ''
            if (imageUrl && mainImageField) {
                mainImageField.onChange(imageUrl)
                toast.push(
                    <Notification type="success" duration={2500}>
                        Ürün resmi başarıyla yüklendi!
                    </Notification>,
                    { placement: 'top-center' },
                )
                setMainImageModalOpen(false)
                setMainImageFile(null)
                setMainImageField(null)
            }
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={5000}>
                    Resim yükleme başarısız!
                </Notification>,
                { placement: 'top-center' },
            )
        },
    })

    const uploadMultipleImagesMutation = useMutation({
        mutationFn: async (files: File[]) => {
            return await apiUploadMultipleImages(files)
        },
        onSuccess: (data: any) => {
            const imageUrls = Array.isArray(data?.data)
                ? data.data.map((item: any) => item.fileUrl || item.url || item)
                : Array.isArray(data)
                  ? data.map((item: any) => item.fileUrl || item.url || item)
                  : []
            if (imageUrls.length > 0 && additionalImagesField) {
                additionalImagesField.onChange(imageUrls)
                toast.push(
                    <Notification type="success" duration={2500}>
                        Resimler başarıyla yüklendi!
                    </Notification>,
                    { placement: 'top-center' },
                )
                setAdditionalImagesModalOpen(false)
                setAdditionalImageFiles([])
                setAdditionalImagesField(null)
            }
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={5000}>
                    Resimler yükleme başarısız!
                </Notification>,
                { placement: 'top-center' },
            )
        },
    })

    return (
        <Card>
            <h4 className="mb-6">Images</h4>

            <Controller
                name="mainImageUrl"
                control={control}
                render={({ field }) => (
                    <FormItem
                        label="Main Image URL"
                        invalid={Boolean(errors.mainImageUrl)}
                        errorMessage={errors.mainImageUrl?.message}
                    >
                        <div className="flex gap-2">
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="https://example.com/image.jpg"
                                disabled
                                {...field}
                            />
                            <Button
                                type="button"
                                variant="solid"
                                icon={<TbPlus />}
                                onClick={() => {
                                    setMainImageField(field)
                                    setMainImageModalOpen(true)
                                }}
                            />
                        </div>
                    </FormItem>
                )}
            />

            <Controller
                name="imageUrls"
                control={control}
                render={({ field }) => (
                    <FormItem
                        label="Additional Image URLs"
                        invalid={Boolean(errors.imageUrls)}
                        errorMessage={errors.imageUrls?.message}
                    >
                        <div className="flex gap-2">
                            <textarea
                                className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg disabled:bg-gray-100 dark:disabled:bg-gray-800"
                                placeholder="Resim URL'leri virgül veya yeni satırla ayrılmış şekilde girin"
                                rows={4}
                                disabled
                                value={
                                    Array.isArray(field.value)
                                        ? field.value.join('\n')
                                        : ''
                                }
                                onChange={(e) => {
                                    const urls = e.target.value
                                        .split(/[\n,]/)
                                        .map((url) => url.trim())
                                        .filter((url) => url.length > 0)
                                    field.onChange(urls)
                                }}
                            />
                            <Button
                                type="button"
                                variant="solid"
                                icon={<TbPlus />}
                                onClick={() => {
                                    setAdditionalImagesField(field)
                                    setAdditionalImagesModalOpen(true)
                                }}
                            />
                        </div>
                    </FormItem>
                )}
            />

            {/* Main Image Upload Modal */}
            <Dialog
                isOpen={mainImageModalOpen}
                onClose={() => {
                    setMainImageModalOpen(false)
                    setMainImageFile(null)
                }}
            >
                <div className="p-6">
                    <h3 className="mb-4 text-lg font-bold">Ana Resim Yükle</h3>
                    <div className="mb-3">
                        <label className="block mb-1">Resim Seçin</label>
                        <Upload
                            uploadLimit={1}
                            draggable
                            multiple={false}
                            className="mt-2 bg-gray-100 dark:bg-transparent"
                            onChange={(files) => {
                                if (files && files.length > 0) {
                                    setMainImageFile(files[0])
                                }
                            }}
                            onFileRemove={() => setMainImageFile(null)}
                        >
                            <div className="my-4 text-center">
                                <div className="text-6xl mb-4 flex justify-center">
                                    <UploadMedia height={150} width={200} />
                                </div>
                                <p className="font-semibold">
                                    <span className="text-gray-800 dark:text-white">
                                        Resimi buraya sürükleyin veya tıklayın
                                    </span>
                                </p>
                                <p className="mt-1 font-semibold opacity-60 dark:text-white">
                                    Bilgisayarınızdan seçin
                                </p>
                            </div>
                        </Upload>
                    </div>
                    <div className="mt-4 flex gap-2 justify-end">
                        <Button
                            type="button"
                            onClick={() => setMainImageModalOpen(false)}
                        >
                            İptal
                        </Button>
                        <Button
                            type="button"
                            variant="solid"
                            disabled={
                                !mainImageFile ||
                                uploadMainImageMutation.isLoading
                            }
                            loading={uploadMainImageMutation.isLoading}
                            onClick={() => {
                                if (mainImageFile) {
                                    uploadMainImageMutation.mutate(
                                        mainImageFile,
                                    )
                                }
                            }}
                        >
                            Yükle
                        </Button>
                    </div>
                </div>
            </Dialog>

            {/* Additional Images Upload Modal */}
            <Dialog
                isOpen={additionalImagesModalOpen}
                onClose={() => {
                    setAdditionalImagesModalOpen(false)
                    setAdditionalImageFiles([])
                }}
            >
                <div className="p-6">
                    <h3 className="mb-4 text-lg font-bold">
                        Ek Resimler Yükle
                    </h3>
                    <div className="mb-3">
                        <label className="block mb-1">Resimler Seçin</label>
                        <Upload
                            draggable
                            multiple={true}
                            className="mt-2 bg-gray-100 dark:bg-transparent"
                            onChange={(files) => {
                                if (files && files.length > 0) {
                                    setAdditionalImageFiles(Array.from(files))
                                }
                            }}
                            onFileRemove={() => setAdditionalImageFiles([])}
                        >
                            <div className="my-4 text-center">
                                <div className="text-6xl mb-4 flex justify-center">
                                    <UploadMedia height={150} width={200} />
                                </div>
                                <p className="font-semibold">
                                    <span className="text-gray-800 dark:text-white">
                                        Resimleri buraya sürükleyin veya
                                        tıklayın
                                    </span>
                                </p>
                                <p className="mt-1 font-semibold opacity-60 dark:text-white">
                                    Bilgisayarınızdan seçin
                                </p>
                            </div>
                        </Upload>
                    </div>
                    <div className="mt-4 flex gap-2 justify-end">
                        <Button
                            type="button"
                            onClick={() => setAdditionalImagesModalOpen(false)}
                        >
                            İptal
                        </Button>
                        <Button
                            type="button"
                            variant="solid"
                            disabled={
                                additionalImageFiles.length === 0 ||
                                uploadMultipleImagesMutation.isLoading
                            }
                            loading={uploadMultipleImagesMutation.isLoading}
                            onClick={() => {
                                if (additionalImageFiles.length > 0) {
                                    uploadMultipleImagesMutation.mutate(
                                        additionalImageFiles,
                                    )
                                }
                            }}
                        >
                            Yükle
                        </Button>
                    </div>
                </div>
            </Dialog>
        </Card>
    )
}

export default ImageSection
