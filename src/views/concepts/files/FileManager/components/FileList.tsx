import Table from '@/components/ui/Table'
import { fileApi } from '@/utils/factories'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import type { Files, Layout } from '../types'
import FileRow from './FileRow'
import FileSegment from './FileSegment'

type FileListProps = {
    fileList: Files
    layout: Layout
    onRename: (id: string) => void
    onShare: (id: string) => void
    onDelete: (id: string) => void
    onOpen: (id: string) => void
    onClick: (id: string) => void
    onDownload: (id: string, fileType: string) => void
}

const { TBody, THead, Th, Tr } = Table

const FileList = (props: FileListProps) => {
    const {
        fileList,
        layout,
        onRename,
        onShare,
        onDelete,
        onOpen,
        onClick,
        onDownload,
    } = props
    const [selectedFileId, setSelectedFileId] = useState<string | null>(null)
    const [fileModalOpen, setFileModalOpen] = useState(false)
    const { t } = useTranslation()
    // Dosya içeriğini SWR ile çek
    const { data: fileContent, isLoading: fileLoading } = useSWR(
        selectedFileId ? ['stream-file', selectedFileId] : null,
        async ([, id]) => {
            const response = await fileApi.apiFileStreamFileFileIdGet(
                Number(id),
            )
            return response.data
        },
        {
            onSuccess: (data) => {
                if (data?.data) {
                    setFileModalOpen(true)
                }
            },
        },
    )
    // props başında destructure edildiği için tekrar gerek yok
    // Dosya uzantısından mime tipi tespit et
    const getMimeType = (fileName: string) => {
        const ext = fileName?.split('.').pop()?.toLowerCase()
        if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg'
        if (ext === 'png') return 'image/png'
        if (ext === 'gif') return 'image/gif'
        if (ext === 'pdf') return 'application/pdf'
        if (ext === 'txt') return 'text/plain'
        if (ext === 'csv') return 'text/csv'
        if (ext === 'json') return 'application/json'
        return 'application/octet-stream'
    }

    // Base64 içeriği ve mime tipi hazırla
    // mimeType değişkeni kaldırıldı
    // base64Content değişkeni kaldırıldı
    const handleFileClick = (id: string) => {
        setSelectedFileId(id)
        // Modalı hemen açma, veri geldikten sonra açılacak
        if (onClick) onClick(id)
    }

    const folders = useMemo(() => {
        return fileList.filter((file) => file.fileType === 'directory')
    }, [fileList])

    const files = useMemo(() => {
        return fileList.filter((file) => file.fileType !== 'directory')
    }, [fileList])

    const renderFileSegment = (list: Files, isFolder?: boolean) => (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
            {list.map((file) => (
                <FileSegment
                    key={file.id}
                    fileType={file.fileType}
                    size={file.size}
                    name={file.name}
                    onDownload={() => onDownload(file.id, file.fileType)}
                    onShare={() => onShare(file.id)}
                    onDelete={() => onDelete(file.id)}
                    onRename={() => onRename(file.id)}
                    {...(isFolder
                        ? { onClick: () => onOpen(file.id) }
                        : { onClick: () => handleFileClick(file.id) })}
                />
            ))}
        </div>
    )

    const renderFileRow = (list: Files, isFolder?: boolean) => (
        <Table className="mt-4">
            <THead>
                <Tr>
                    <Th>File</Th>
                    <Th>Size</Th>
                    <Th>Type</Th>
                    <Th></Th>
                </Tr>
            </THead>
            <TBody>
                {list.map((file) => (
                    <FileRow
                        key={file.id}
                        fileType={file.fileType}
                        size={file.size}
                        name={file.name}
                        onDownload={() => onDownload(file.id, file.fileType)}
                        onShare={() => onShare(file.id)}
                        onDelete={() => onDelete(file.id)}
                        onRename={() => onRename(file.id)}
                        {...(isFolder
                            ? { onOpen: () => onOpen(file.id) }
                            : { onClick: () => handleFileClick(file.id) })}
                    />
                ))}
            </TBody>
        </Table>
    )

    return (
        <div>
            {folders.length > 0 && (
                <div>
                    <h4>{t('nav.conceptsFolders.folders')}</h4>
                    {layout === 'grid' && renderFileSegment(folders, true)}
                    {layout === 'list' && renderFileRow(folders, true)}
                </div>
            )}
            {files.length > 0 && (
                <div className="mt-8">
                    <h4>{t('nav.conceptsFolders.files')}</h4>
                    {layout === 'grid' && renderFileSegment(files)}
                    {layout === 'list' && renderFileRow(files)}
                </div>
            )}

            {/* Dosya içeriği modalı */}
            {fileModalOpen && (
                <div className="fixed inset-0 bg-black/80 w-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow w-full lg:max-w-1/2 h-[65vh] ">
                        <h2 className="text-lg font-bold mb-4">
                            {t('nav.conceptsFolders.file_contents')}
                        </h2>
                        {fileLoading ? (
                            <div>Yükleniyor...</div>
                        ) : fileContent?.data ? (
                            (() => {
                                const mimeType = fileContent.fileName
                                    ? getMimeType(fileContent.fileName)
                                    : 'application/octet-stream'
                                const base64Content = `data:${mimeType};base64,${fileContent.data}`
                                if (mimeType.startsWith('image/')) {
                                    return (
                                        <img
                                            src={base64Content}
                                            alt={
                                                fileContent.fileName || 'Dosya'
                                            }
                                            className="w-full h-[50vh] object-contain rounded"
                                        />
                                    )
                                }
                                if (mimeType === 'application/pdf') {
                                    return (
                                        <iframe
                                            src={base64Content}
                                            title="PDF Dosya"
                                            className="w-full h-[50vh]  rounded"
                                        />
                                    )
                                }
                                if (mimeType.startsWith('text/')) {
                                    return (
                                        <div className="w-full h-[50vh] overflow-auto  rounded bg-gray-50 p-4 whitespace-pre-wrap text-sm">
                                            {fileContent.data
                                                ? atob(fileContent.data)
                                                : 'İçerik bulunamadı.'}
                                        </div>
                                    )
                                }
                                return (
                                    <iframe
                                        src={base64Content}
                                        title="Dosya İçeriği"
                                        className="w-full h-96  rounded"
                                    />
                                )
                            })()
                        ) : (
                            <div>İçerik bulunamadı.</div>
                        )}
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                            onClick={() => {
                                setFileModalOpen(false)
                                setSelectedFileId(null)
                            }}
                        >
                            {t('common.close')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FileList
