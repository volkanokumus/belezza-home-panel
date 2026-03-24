// Attribute Types - Based on Real API Models

export interface AttributeDetailResponseDto {
    id: number
    attributeName: string
    willAcceptTextValues: boolean
    willBeVisibleForDocumentTree: boolean
    attributeValues?: AttributeValuesDetailResponseDto | null
}

export interface AttributeValuesDetailResponseDto {
    id: number
    attributeId: number
    attributeName: string
    attributePossibleValue: string
}

export interface AttributeCreateCommand {
    attributeName: string
    willAcceptTextValues: boolean
    willBeVisibleForDocumentTree: boolean
}

export interface AttributeUpdateCommand {
    id: number
    attributeName: string
    willAcceptTextValues: boolean
    willBeVisibleForDocumentTree: boolean
}
export interface AttributeValuesUpdate {
    id: number
    attributeId: number
    attributeName: string
    attributePossibleValue: string
}

export interface AttributeDeleteCommand {
    id: number
}

export interface AttributeGridListResponseDto_Item {
    id: number
    attributeName: string
    willAcceptTextValues: boolean
    willBeVisibleForDocumentTree: boolean
}

export interface AttributeGridListResponseDto {
    data?: AttributeGridListResponseDto_Item[] | null
    draw: number
    recordsTotal: number
    recordsFiltered: number
}

export interface DataTablesPaginationRequestDto {
    draw?: number
    start?: number
    length?: number
    search?: {
        value?: string
        regex?: boolean
    }
    order?: Array<{
        column?: number
        dir?: string
    }>
    columns?: Array<{
        data?: string
        name?: string
        searchable?: boolean
        orderable?: boolean
        search?: {
            value?: string
            regex?: boolean
        }
    }>
}

export interface AttributeFilterParams {
    willAcceptTextValues?: boolean
    willBeVisibleForDocumentTree?: boolean
}

// Alias for backward compatibility
export type Attribute = AttributeDetailResponseDto
export type CreateAttributeRequest = AttributeCreateCommand
export type UpdateAttributeRequest = AttributeUpdateCommand
export type AttributeListResponse = AttributeGridListResponseDto
export type AttributeListParams = DataTablesPaginationRequestDto
export type UpdateAttributeValueParams = AttributeValuesUpdate
