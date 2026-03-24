import { create } from 'zustand'
import type { Directories, Files, Layout } from '../types'

type DialogProps = { id: string; open: boolean }

export type FileManagerState = {
    fileList: Files
    layout: Layout
    selectedFile: string
    openedDirectoryId: string
    directories: Directories
    deleteDialog: DialogProps
    inviteDialog: DialogProps
    renameDialog: DialogProps
}

type FileManagerAction = {
    setFileList: (payload: Files) => void
    setLayout: (payload: Layout) => void
    setOpenedDirectoryId: (payload: string) => void
    setDirectories: (payload: Directories) => void
    setSelectedFile: (payload: string) => void
    setDeleteDialog: (paload: DialogProps) => void
    setInviteDialog: (paload: DialogProps) => void
    setRenameDialog: (paload: DialogProps) => void
    deleteFile: (payload: string) => void
    renameFile: (payload: { id: string; fileName: string }) => void
}

const initialState: FileManagerState = {
    fileList: [],
    layout: 'grid',
    selectedFile: '',
    openedDirectoryId: '',
    directories: [],
    deleteDialog: { open: false, id: '' },
    inviteDialog: { open: false, id: '' },
    renameDialog: { open: false, id: '' },
}

export const useFileManagerStore = create<FileManagerState & FileManagerAction>(
    (set) => ({
        ...initialState,
        setFileList: (payload) => set(() => ({ fileList: payload })),
        setLayout: (payload: Layout) => set(() => ({ layout: payload })),
        setOpenedDirectoryId: (payload) =>
            set(() => ({ openedDirectoryId: payload })),
        setSelectedFile: (payload) => set(() => ({ selectedFile: payload })),
        setDirectories: (payload) => set(() => ({ directories: payload })),
        setDeleteDialog: (payload) => set(() => ({ deleteDialog: payload })),
        setInviteDialog: (payload) => set(() => ({ inviteDialog: payload })),
        setRenameDialog: (payload) => set(() => ({ renameDialog: payload })),
        deleteFile: (payload) => {
            set((state) => ({
                fileList: state.fileList.filter((file) => file.id !== payload),
            }))
        },
        renameFile: (payload) => {
            set((state) => ({
                fileList: state.fileList.map((file) =>
                    file.id === payload.id
                        ? { ...file, name: payload.fileName }
                        : file,
                ),
            }))
        },
    }),
)
