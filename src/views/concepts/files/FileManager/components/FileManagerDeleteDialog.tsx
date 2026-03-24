import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { Notification, toast } from '@/components/ui'
import { useTranslation } from 'react-i18next'
import { useFileManagerStore } from '../store/useFileManagerStore'

const FileManagerDeleteDialog = () => {
    const { deleteDialog, setDeleteDialog, deleteFile, fileList } =
        useFileManagerStore()

    const handleDeleteDialogClose = () => {
        setDeleteDialog({ id: '', open: false })
    }
    const { t } = useTranslation()
    const handleDeleteConfirm = async () => {
        const file = fileList.find((f) => f.id === deleteDialog.id)
        if (!file) return handleDeleteDialogClose()
        try {
            if (file.fileType === 'file') {
                await import('@/utils/factories').then(({ fileApi }) =>
                    fileApi.apiFileDeleteFileDelete({ id: Number(file.id) }),
                )
            } else if (file.fileType === 'directory') {
                await import('@/utils/factories').then(({ folderApi }) =>
                    folderApi.apiFolderDeleteDelete({ id: Number(file.id) }),
                )
            }
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            deleteFile(file.id)
        } catch {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('common.danger')}
                </Notification>,
            )
        }
        setDeleteDialog({ id: '', open: false })
    }

    return (
        <ConfirmDialog
            isOpen={deleteDialog.open}
            type="danger"
            title={
                fileList.find((f) => f.id === deleteDialog.id)?.fileType ===
                'directory'
                    ? `${t('nav.conceptsFolders.folder_delete')}`
                    : `${t('nav.conceptsFolders.file_delete')}`
            }
            onClose={handleDeleteDialogClose}
            onRequestClose={handleDeleteDialogClose}
            onCancel={handleDeleteDialogClose}
            onConfirm={handleDeleteConfirm}
        >
            <p>
                {t('common.are_you_sure')}{' '}
                {fileList.find((f) => f.id === deleteDialog.id)?.fileType ===
                'directory'
                    ? `${t('nav.conceptsFolders.folder')}`
                    : `${t('nav.conceptsFolders.file')}`}
                ? {t('common.cannot_undone')}
            </p>
        </ConfirmDialog>
    )
}

export default FileManagerDeleteDialog
