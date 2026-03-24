import ApiService from './ApiService'
import type {
    AttributeDetailResponseDto,
    AttributeGridListResponseDto,
    DataTablesPaginationRequestDto,
    AttributeCreateCommand,
    AttributeUpdateCommand,
    AttributeDeleteCommand,
    AttributeFilterParams
} from '@/@types/attribute'

export async function apiGetAttributeList(
    params: DataTablesPaginationRequestDto
): Promise<AttributeGridListResponseDto> {
    return ApiService.fetchDataWithAxios<AttributeGridListResponseDto, DataTablesPaginationRequestDto>({
        url: '/Attribute/AttributeList',
        method: 'post',
        data: params,
    })
}

export async function apiGetAttribute(id: number): Promise<AttributeDetailResponseDto> {
    return ApiService.fetchDataWithAxios<AttributeDetailResponseDto>({
        url: `/Attribute/${id}`,
        method: 'get',
    })
}

export async function apiCreateAttribute(
    data: AttributeCreateCommand
): Promise<AttributeDetailResponseDto> {
    return ApiService.fetchDataWithAxios<AttributeDetailResponseDto, AttributeCreateCommand>({
        url: '/Attribute/Create',
        method: 'post',
        data,
    })
}

export async function apiUpdateAttribute(
    data: AttributeUpdateCommand
): Promise<AttributeDetailResponseDto> {
    return ApiService.fetchDataWithAxios<AttributeDetailResponseDto, AttributeUpdateCommand>({
        url: '/Attribute/Update',
        method: 'put',
        data,
    })
}

export async function apiDeleteAttribute(data: AttributeDeleteCommand): Promise<void> {
    return ApiService.fetchDataWithAxios<void, AttributeDeleteCommand>({
        url: '/Attribute/Delete',
        method: 'delete',
        data,
    })
}

export async function apiGetFilteredAttributes(
    params: AttributeFilterParams
): Promise<AttributeDetailResponseDto[]> {
    return ApiService.fetchDataWithAxios<AttributeDetailResponseDto[]>({
        url: '/Attribute/Filter',
        method: 'get',
        params,
    })
}