import { useMemo, useState, useEffect } from 'react'
import DataTable from '@/components/shared/DataTable'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import ActionLink from '@/components/shared/ActionLink'
import Dialog from '@/components/ui/Dialog'
import Button from '@/components/ui/Button'
import { useNavigate } from 'react-router'
import { 
    HiOutlinePencil, 
    HiOutlineTrash,
    HiOutlineFolder,
} from 'react-icons/hi'
import { apiFolderGridList, apiFolderDelete } from '@/services/FolderService'
import type { 
    FolderGridListResponseDto_Item,
    DataTablesPaginationRequestDto,
    FolderDeleteCommand
} from '@/@types/folder'
import type { ColumnDef } from '@tanstack/react-table'

type FolderListTableProps = {
    className?: string
}

const FolderListTable = ({ className }: FolderListTableProps) => {
    const navigate = useNavigate()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedFolder, setSelectedFolder] = useState<FolderGridListResponseDto_Item | null>(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<FolderGridListResponseDto_Item[]>([])
    const [pagination, setPagination] = useState({
        draw: 1,
        start: 0,
        length: 10,
        recordsTotal: 0,
        recordsFiltered: 0
    })

    // Load folders from API
    useEffect(() => {
        loadFolders()
    }, [pagination.start, pagination.length])

    const loadFolders = async () => {
        setLoading(true)
        try {
            const requestData: DataTablesPaginationRequestDto = {
                draw: pagination.draw,
                start: pagination.start,
                length: pagination.length,
                search: {
                    value: '',
                    regex: false
                }
            }

            console.log('=== FOLDER LIST DEBUG ===')
            console.log('Request data:', requestData)
            
            const response = await apiFolderGridList(requestData)
            
            console.log('API Response:', response)
            console.log('Folders data:', response.data)
            console.log('First folder:', response.data?.[0])
            console.log('========================')
            
            setData(response.data || [])
            setPagination(prev => ({
                ...prev,
                recordsTotal: response.recordsTotal,
                recordsFiltered: response.recordsFiltered
            }))
        } catch (error) {
            console.error('Error loading folders:', error)
        } finally {
            setLoading(false)
        }
    }

    const onDelete = (folder: FolderGridListResponseDto_Item) => {
        setSelectedFolder(folder)
        setDialogOpen(true)
    }

    const handleDeleteClick = (e: React.MouseEvent, folder: FolderGridListResponseDto_Item) => {
        e.preventDefault()
        e.stopPropagation()
        onDelete(folder)
    }

    const handleEditClick = (e: React.MouseEvent, folder: FolderGridListResponseDto_Item) => {
        e.preventDefault()
        e.stopPropagation()
        onEdit(folder)
    }

    const onDeleteConfirm = async () => {
        if (!selectedFolder) return

        try {
            console.log('=== FOLDER DELETE DEBUG ===')
            console.log('Selected Folder:', selectedFolder)
            
            const deleteCommand: FolderDeleteCommand = {
                id: selectedFolder.id
            }
            
            console.log('Delete Command:', deleteCommand)
            
            await apiFolderDelete(deleteCommand)
            
            console.log('Delete successful!')
            console.log('==============================')
            
            // Reload data after successful deletion
            loadFolders()
            setDialogOpen(false)
            setSelectedFolder(null)
        } catch (error) {
            console.error('Error deleting folder:', error)
        }
    }

    const onEdit = (folder: FolderGridListResponseDto_Item) => {
        console.log('Folder ID:', folder.id)
        if (!folder.id || folder.id === 0) {
            console.error('Invalid folder ID')
            return
        }
        navigate(`/concepts/folders/folder-edit/${folder.id}`)
    }

    const onDialogClose = () => {
        setDialogOpen(false)
        setSelectedFolder(null)
    }

    const ActionColumn = ({ row }: { row: FolderGridListResponseDto_Item }) => {
        return (
            <div className="flex justify-end text-lg">
                <span
                    className="cursor-pointer p-2 hover:text-indigo-600"
                    onClick={(e) => handleEditClick(e, row)}
                >
                    <HiOutlinePencil />
                </span>
                <span
                    className="cursor-pointer p-2 hover:text-red-500"
                    onClick={(e) => handleDeleteClick(e, row)}
                >
                    <HiOutlineTrash />
                </span>
            </div>
        )
    }

    const columns = useMemo<ColumnDef<FolderGridListResponseDto_Item>[]>(
        () => [
            {
                header: 'Folder Name',
                accessorKey: 'folderName',
                cell: (props) => {
                    const row = props.row.original as any
                    console.log('Rendering folderName cell for row:', row)
                    
                    // Try both cases
                    const name = row.folderName || row.FolderName || 'N/A'
                    
                    return (
                        <div className="flex items-center">
                            <HiOutlineFolder className="text-yellow-500 text-xl mr-3" />
                            <span className="font-semibold">
                                {name}
                            </span>
                        </div>
                    )
                },
            },
            {
                header: 'Description',
                accessorKey: 'folderDefinition',
                cell: (props) => {
                    const row = props.row.original as any
                    const definition = row.folderDefinition || row.FolderDefinition || ''
                    
                    return (
                        <span className="text-gray-600">
                            {definition || 'No description'}
                        </span>
                    )
                },
            },
            {
                header: 'Parent Folder',
                accessorKey: 'parentFolderId',
                cell: (props) => {
                    const row = props.row.original as any
                    const parentId = row.parentFolderId || row.ParentFolderId
                    
                    return (
                        <span>
                            {parentId ? `ID: ${parentId}` : 'Root Folder'}
                        </span>
                    )
                },
            },
            {
                header: '',
                id: 'action',
                cell: (props) => <ActionColumn row={props.row.original} />,
            },
        ],
        []
    )

    return (
        <>
            <DataTable
                ref={null}
                columns={columns}
                data={data}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: 'rounded-md' }}
                loading={loading}
                className={className}
            />
            <Dialog
                isOpen={dialogOpen}
                shouldCloseOnOverlayClick
                shouldCloseOnEsc
                width={520}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className="flex flex-col h-full justify-between">
                    <h5 className="mb-4">Delete Folder</h5>
                    <p>
                        Are you sure you want to delete the folder "{selectedFolder?.folderName || (selectedFolder as any)?.FolderName}"?
                    </p>
                    <div className="text-right mt-6">
                        <Button
                            className="ltr:mr-2 rtl:ml-2"
                            variant="plain"
                            onClick={onDialogClose}
                        >
                            Cancel
                        </Button>
                        <Button variant="solid" onClick={onDeleteConfirm}>
                            Delete
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default FolderListTable