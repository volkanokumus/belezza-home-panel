// Folder Types

// Response DTOs
export interface FolderDetailResponseDto {
    id: number
    folderName: string
    folderDefinition?: string | null
    parentFolderId?: number | null
}

export interface FolderGridListResponseDto_Item {
    id: number
    folderName: string
    folderDefinition?: string | null
    parentFolderId?: number | null
}

export interface FolderGridListResponseDto {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    data: FolderGridListResponseDto_Item[]
}

export interface FolderTreeDto {
    id: number
    folderName: string
    folderDefinition?: string | null
    parentFolderId?: number | null
    hasChildren: boolean
    children: FolderTreeDto[]
}

// Command DTOs
export interface FolderCreateCommand {
    folderName: string
    folderDefinition?: string | null
    parentFolderId?: number | null
    categoryId?: number | null
    attributeId?: number | null
}

export interface FolderUpdateCommand {
    id: number
    folderName: string
    folderDefinition?: string | null
    parentFolderId?: number | null
}

export interface FolderDeleteCommand {
    id: number
}

// Request DTOs
export interface DataTablesPaginationRequestDto {
    draw: number
    start: number
    length: number
    search: {
        value: string
        regex: boolean
    }
}