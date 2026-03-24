import ApiService from './ApiService'
import type {
    FolderDetailResponseDto,
    FolderGridListResponseDto,
    FolderGridListResponseDto_Item,
    FolderTreeDto,
    FolderCreateCommand,
    FolderUpdateCommand,
    FolderDeleteCommand,
    DataTablesPaginationRequestDto,
} from '@/@types/folder'

// Get folder list with pagination
export async function apiFolderGridList(
    params: DataTablesPaginationRequestDto
): Promise<FolderGridListResponseDto> {
    console.log('apiFolderGridList called with:', params)
    
    return ApiService.fetchDataWithAxios<FolderGridListResponseDto>({
        url: '/Folder/FolderGridList',
        method: 'post',
        data: params as unknown as Record<string, unknown>,
    })
}

// Get folder by ID
export async function apiFolderById(
    id: number
): Promise<FolderDetailResponseDto> {
    console.log('apiFolderById called with ID:', id)
    
    return ApiService.fetchDataWithAxios<FolderDetailResponseDto>({
        url: `/Folder/${id}`,
        method: 'get',
    })
}

// Create new folder
export async function apiFolderCreate(
    data: FolderCreateCommand
): Promise<FolderDetailResponseDto> {
    console.log('apiFolderCreate called with:', data)
    
    return ApiService.fetchDataWithAxios<FolderDetailResponseDto>({
        url: '/Folder/Create',
        method: 'post',
        data: data as unknown as Record<string, unknown>,
    })
}

// Update existing folder
export async function apiFolderUpdate(
    data: FolderUpdateCommand
): Promise<FolderDetailResponseDto> {
    console.log('apiFolderUpdate called with:', data)
    
    return ApiService.fetchDataWithAxios<FolderDetailResponseDto>({
        url: '/Folder/Update',
        method: 'put',
        data: data as unknown as Record<string, unknown>,
    })
}

// Delete folder
export async function apiFolderDelete(
    data: FolderDeleteCommand
): Promise<void> {
    console.log('apiFolderDelete called with:', data)
    
    return ApiService.fetchDataWithAxios<void>({
        url: '/Folder/Delete',
        method: 'delete',
        data: data as unknown as Record<string, unknown>,
    })
}

// Get folder tree
export async function apiFolderTreeList(
    rootFolderId?: number
): Promise<FolderTreeDto[]> {
    console.log('apiFolderTreeList called with rootFolderId:', rootFolderId)
    
    const params = rootFolderId ? `?RootFolderId=${rootFolderId}` : ''
    
    return ApiService.fetchDataWithAxios<FolderTreeDto[]>({
        url: `/Folder/TreeList${params}`,
        method: 'get',
    })
}

// Get active folders
export async function apiFolderActiveFolders(): Promise<FolderDetailResponseDto[]> {
    console.log('apiFolderActiveFolders called')
    
    return ApiService.fetchDataWithAxios<FolderDetailResponseDto[]>({
        url: '/Folder/ActiveFolders',
        method: 'get',
    })
}