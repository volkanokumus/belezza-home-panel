import DebouceInput from '@/components/shared/DebouceInput'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { useState } from 'react'
import { useFileManagerStore } from '../store/useFileManagerStore'

const FileManagerRenameDialog = () => {
    const { renameDialog, setRenameDialog, renameFile, fileList } =
        useFileManagerStore()

    const [newName, setNewName] = useState('')

    const handleDialogClose = () => {
        setRenameDialog({ id: '', open: false })
    }

    const handleSubmit = async () => {
        const file = fileList.find((f) => f.id === renameDialog.id)
        if (!file) return handleDialogClose()
        if (file.fileType === 'file') {
            alert('Dosya ismi değiştirme desteklenmiyor.')
            setRenameDialog({ id: '', open: false })
            return
        }
        try {
            await import('@/utils/factories').then(({ folderApi }) =>
                folderApi.apiFolderUpdatePut({
                    id: Number(file.id),
                    folderName: newName,
                }),
            )
            renameFile({ id: file.id, fileName: newName })
        } catch {
            alert('Klasör güncellenemedi.')
        }
        setRenameDialog({ id: '', open: false })
    }

    return (
        <Dialog
            isOpen={renameDialog.open}
            contentClassName="mt-[50%]"
            onClose={handleDialogClose}
            onRequestClose={handleDialogClose}
        >
            <h4>Rename</h4>
            <div className="mt-6">
                <DebouceInput
                    placeholder="New name"
                    type="text"
                    onChange={(e) => setNewName(e.target.value)}
                />
            </div>
            <div className="mt-6 flex justify-end items-center gap-2">
                <Button size="sm" onClick={handleDialogClose}>
                    Close
                </Button>
                {(() => {
                    const file = fileList.find((f) => f.id === renameDialog.id)
                    if (file && file.fileType === 'directory') {
                        return (
                            <Button
                                variant="solid"
                                size="sm"
                                disabled={newName.length === 0}
                                onClick={handleSubmit}
                            >
                                <span className="flex justify-center min-w-10">
                                    Ok
                                </span>
                            </Button>
                        )
                    }
                    return null
                })()}
            </div>
        </Dialog>
    )
}

export default FileManagerRenameDialog
