// import UploadMedia from '@/assets/svg/UploadMedia'
// import Button from '@/components/ui/Button'
// import Dialog from '@/components/ui/Dialog'
// import { FormItem } from '@/components/ui/Form'
// import Input from '@/components/ui/Input'
// import Notification from '@/components/ui/Notification'
// import { Select } from '@/components/ui/Select'
// import Upload from '@/components/ui/Upload'
// import toast from '@/components/ui/toast'
// import { fileApi, folderApi } from '@/utils/factories'
// import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import useSWR from 'swr'

// const UploadFile = () => {
//     const { data: folders } = useSWR('active-folders', async () => {
//         const response = await folderApi.apiFolderActiveFoldersGet()
//         // Sadece id ve folderName kesin olanları dön
//         return (response.data || [])
//             .filter((f) => typeof f.id === 'number' && !!f.folderName)
//             .map((f) => ({
//                 id: f.id as number,
//                 folderName: f.folderName as string,
//             }))
//     })
//     const [selectedFolder, setSelectedFolder] = useState<{
//         id: number
//         folderName: string
//     } | null>(null)
//     const [fileDisplayName, setFileDisplayName] = useState('')
//     const [description, setDescription] = useState('')
//     const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
//     const [isUploading, setIsUploading] = useState(false)
//     const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
//     const { t } = useTranslation()
//     // Dosya yüklendiğinde adını otomatik olarak dosya adı alanına ekle
//     const handleFilesChange = (files: File[]) => {
//         setUploadedFiles(files)
//         if (files.length > 0) {
//             setFileDisplayName(files[0].name)
//         }
//     }

//     const handleUploadDialogClose = () => {
//         setUploadDialogOpen(false)
//     }

//     const handleUpload = async () => {
//         if (!uploadedFiles[0] || !selectedFolder) return
//         setIsUploading(true)
//         try {
//             await fileApi.apiFileUploadFileToFolderPost(
//                 uploadedFiles[0],
//                 Number(selectedFolder.id),
//                 fileDisplayName,
//                 description,
//             )
//             toast.push(
//                 <Notification title={t('upload.success')} type="success" />,
//                 { placement: 'top-center' },
//             )
//             handleUploadDialogClose()
//         } catch {
//             toast.push(
//                 <Notification title={'Yükleme başarısız!'} type="danger" />,
//                 { placement: 'top-center' },
//             )
//         } finally {
//             setIsUploading(false)
//         }
//     }

//     return (
//         <>
//             <Button variant="solid" onClick={() => setUploadDialogOpen(true)}>
//                 {t('upload.uploadButton')}
//             </Button>
//             <Dialog
//                 isOpen={uploadDialogOpen}
//                 onClose={handleUploadDialogClose}
//                 onRequestClose={handleUploadDialogClose}
//             >
//                 <h4>{t('upload.title')}</h4>
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault()
//                         handleUpload()
//                     }}
//                 >
//                     <div className="mb-3">
//                         <label className="block mb-1">
//                             {t('upload.selectFolder')}
//                         </label>
//                         <Select
//                             options={folders || []}
//                             getOptionLabel={(option) => option.folderName}
//                             getOptionValue={(option) => String(option.id)}
//                             placeholder={t('upload.selectFolder')}
//                             value={selectedFolder}
//                             isClearable
//                             onChange={setSelectedFolder}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="block mb-1">
//                             {t('upload.selectFile')}
//                         </label>
//                         <Upload
//                             draggable
//                             className="mt-2 bg-gray-100 dark:bg-transparent"
//                             onChange={handleFilesChange}
//                             onFileRemove={handleFilesChange}
//                         >
//                             <div className="my-4 text-center">
//                                 <div className="text-6xl mb-4 flex justify-center">
//                                     <UploadMedia height={150} width={200} />
//                                 </div>
//                                 <p className="font-semibold">
//                                     <span className="text-gray-800 dark:text-white">
//                                         {t('upload.dropOrBrowse')}
//                                     </span>
//                                 </p>
//                                 <p className="mt-1 font-semibold opacity-60 dark:text-white">
//                                     {t('upload.chooseFromComputer')}
//                                 </p>
//                             </div>
//                         </Upload>
//                     </div>
//                     <FormItem label={t('upload.fileName')} className="mb-3">
//                         <Input
//                             value={fileDisplayName}
//                             placeholder={t('upload.fileName')}
//                             required
//                             onChange={(e) => setFileDisplayName(e.target.value)}
//                         />
//                     </FormItem>
//                     <FormItem label={t('upload.description')} className="mb-3">
//                         <Input
//                             value={description}
//                             placeholder={t('upload.description')}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </FormItem>
//                     <div className="mt-4">
//                         <Button
//                             block
//                             loading={isUploading}
//                             variant="solid"
//                             disabled={
//                                 uploadedFiles.length === 0 || !selectedFolder
//                             }
//                             type="submit"
//                         >
//                             {t('upload.uploadButton')}
//                         </Button>
//                     </div>
//                 </form>
//             </Dialog>
//         </>
//     )
// }

// export default UploadFile
