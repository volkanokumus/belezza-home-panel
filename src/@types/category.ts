// Category Types

export interface CategoryGridListResponseDto_Category {
    id: number
    categoryName: string
    categoryColor?: string | null
    categoryIcon?: string | null
    parentCategoryId?: number | null
    willBeVisibleForDocumentTree: boolean
}

// CRUD DTOs
export interface CategoryCreateRequestDto {
    categoryName: string
    categoryColor?: string | null
    categoryIcon?: string | null
    parentCategoryId?: number | null
    willBeVisibleForDocumentTree: boolean
}

export interface CategoryUpdateRequestDto {
    id: number
    categoryName: string
    categoryColor?: string | null
    categoryIcon?: string | null
    parentCategoryId?: number | null
    willBeVisibleForDocumentTree: boolean
}

export interface CategoryGetByIdResponseDto {
    id: number
    categoryName: string
    categoryColor?: string | null
    categoryIcon?: string | null
    parentCategoryId?: number | null
    willBeVisibleForDocumentTree: boolean
}

// API Response Types
export interface CategoryGridListResponseDto {
    data: CategoryGridListResponseDto_Category[]
    count: number
    searchText: string
    searchField: string[]
}
