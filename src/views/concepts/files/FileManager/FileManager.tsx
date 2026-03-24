// import { Notification, toast } from '@/components/ui'
// import { fileApi, folderApi } from '@/utils/factories'
// import { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import useSWR from 'swr'
// import FileDetails from './components/FileDetails'
// import FileList from './components/FileList'
// import FileManagerDeleteDialog from './components/FileManagerDeleteDialog'
// import FileManagerHeader from './components/FileManagerHeader'
// import FileManagerRenameDialog from './components/FileManagerRenameDialog'
// import { useFileManagerStore } from './store/useFileManagerStore'

// const FileManager = () => {
//     const {
//         layout,
//         fileList,
//         setFileList,
//         setDeleteDialog,
//         setInviteDialog,
//         setRenameDialog,
//         setSelectedFile,
//     } = useFileManagerStore()

//     // Aktif folder listesini SWR ile çek
//     const { data: activeFolders } = useSWR('active-folders', async () => {
//         const response = await folderApi.apiFolderActiveFoldersGet()
//         return response.data
//     })
//     const { t } = useTranslation()
//     // Seçili klasör id'si ve klasör geçmişi
//     const [selectedFolderId, setSelectedFolderId] = useState<number | null>(
//         null,
//     )
//     const [folderHistory, setFolderHistory] = useState<number[]>([])

//     // Seçili klasörün dosya ve alt klasörlerini SWR ile çek
//     const { data: treeData } = useSWR(
//         selectedFolderId ? ['folder-treelist', selectedFolderId] : null,
//         async ([, id]) => {
//             // Burada folderApi'de treeList fonksiyonu olmalı, yoksa eklenmeli
//             const response = await folderApi.apiFolderTreeListGet(id)
//             return response.data
//         },
//     )

//     // FolderDetailResponseDto[] -> File[]
//     useEffect(() => {
//         if (!selectedFolderId && activeFolders) {
//             const foldersAsFiles = activeFolders.map((folder) => ({
//                 id: String(folder.id),
//                 name: folder.folderName ?? '',
//                 fileType: 'directory',
//                 srcUrl: '',
//                 size: 0,
//                 author: { name: '', email: '', img: '' },
//                 activities: [],
//                 permissions: [],
//                 uploadDate: 0,
//                 recent: false,
//             }))
//             setFileList(foldersAsFiles)
//         }
//         // Eğer bir klasör seçildiyse, treeData'dan dosya ve alt klasörleri göster
//         if (selectedFolderId && treeData && treeData.length > 0) {
//             const folder = treeData[0]
//             // Alt klasörleri File tipine çevir
//             const childrenFolders = (folder.children || []).map(
//                 (child: import('@/openApiServices/api').FolderTreeDto) => ({
//                     id: String(child.id),
//                     name: child.folderName ?? '',
//                     fileType: 'directory',
//                     srcUrl: '',
//                     size: 0,
//                     author: { name: '', email: '', img: '' },
//                     activities: [],
//                     permissions: [],
//                     uploadDate: 0,
//                     recent: false,
//                 }),
//             )
//             // Dosyaları File tipine çevir
//             const files = (folder.files || []).map(
//                 (file: import('@/openApiServices/api').FolderFileDto) => ({
//                     id: String(file.id),
//                     name: file.fileDisplayName ?? '',
//                     fileType: 'file',
//                     srcUrl: file.physicalPathName || '',
//                     size: 0,
//                     author: { name: '', email: '', img: '' },
//                     activities: [],
//                     permissions: [],
//                     uploadDate: 0,
//                     recent: false,
//                 }),
//             )
//             setFileList([...childrenFolders, ...files])
//         }
//         // Eğer treeData yoksa dosya listesini boşalt
//         if (selectedFolderId && (!treeData || treeData.length === 0)) {
//             setFileList([])
//         }
//     }, [activeFolders, treeData, selectedFolderId, setFileList])

//     const handleShare = (id: string) => {
//         setInviteDialog({ id, open: true })
//     }

//     const handleDelete = (id: string) => {
//         setDeleteDialog({ id, open: true })
//     }

//     const handleDownload = async (id: string, fileType: string) => {
//         if (fileType === 'file') {
//             try {
//                 const response = await fileApi.apiFileStreamFileFileIdGet(
//                     Number(id),
//                 )
//                 const { data, fileName } = response.data
//                 if (!data || !fileName) return
//                 const mimeType =
//                     fileName.split('.').pop()?.toLowerCase() === 'pdf'
//                         ? 'application/pdf'
//                         : 'application/octet-stream'
//                 const base64Content = `data:${mimeType};base64,${data}`
//                 const link = document.createElement('a')
//                 link.href = base64Content
//                 link.download = fileName
//                 document.body.appendChild(link)
//                 link.click()
//                 document.body.removeChild(link)
//                 toast.push(
//                     <Notification type="success" duration={2500}>
//                         {t('common.success')}
//                     </Notification>,
//                 )
//             } catch {
//                 toast.push(
//                     <Notification type="danger" duration={2500}>
//                         {t('common.danger')}
//                     </Notification>,
//                 )
//             }
//         } else if (fileType === 'directory') {
//             toast.push(
//                 <Notification type="danger" duration={2500}>
//                     {t('common.danger_folder')}
//                 </Notification>,
//             )
//         }
//     }

//     const handleRename = (id: string) => {
//         setRenameDialog({ id, open: true })
//     }

//     // Klasöre tıklanınca id'yi seçili yap
//     const handleOpen = (id?: string) => {
//         if (id) {
//             if (selectedFolderId !== null) {
//                 setFolderHistory((prev) => [...prev, selectedFolderId])
//             }
//             setSelectedFolderId(Number(id))
//         }
//     }

//     const handleGoBack = () => {
//         setFolderHistory((prev) => {
//             const newHistory = [...prev]
//             const lastId = newHistory.pop()
//             setSelectedFolderId(lastId ?? null)
//             return newHistory
//         })
//     }
//     const handleEntryClick = () => {}
//     const handleDirectoryClick = () => {}

//     const handleClick = (fileId: string) => {
//         setSelectedFile(fileId)
//     }

//     return (
//         <>
//             <div>
//                 <FileManagerHeader
//                     onEntryClick={handleEntryClick}
//                     onDirectoryClick={handleDirectoryClick}
//                 />
//                 <div className="mt-6">
//                     {selectedFolderId && (
//                         <button
//                             className="bg-white rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-transparent py-2 px-8 flex items-center justify-between gap-2 transition-all hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] cursor-pointer mb-4 text-black font-bold"
//                             onClick={handleGoBack}
//                         >
//                             {t('common.back')}
//                         </button>
//                     )}
//                     <FileList
//                         fileList={fileList}
//                         layout={layout}
//                         onDownload={handleDownload}
//                         onShare={handleShare}
//                         onDelete={handleDelete}
//                         onRename={handleRename}
//                         onOpen={handleOpen}
//                         onClick={handleClick}
//                     />
//                 </div>
//             </div>
//             <FileDetails onShare={handleShare} />
//             <FileManagerDeleteDialog />
//             {/* <FileManagerInviteDialog /> */}
//             <FileManagerRenameDialog />
//         </>
//     )
// }

// export default FileManager
