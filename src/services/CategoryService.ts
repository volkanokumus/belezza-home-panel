import type {
    CategoryCreateRequestDto,
    CategoryGetByIdResponseDto,
    CategoryGridListResponseDto,
    CategoryUpdateRequestDto,
} from '@/@types/category'
import ApiService from './ApiService'

// Eksik tipler
interface CategoryGetByIdRequestDto {
    id: number
}

interface CategoryDeleteRequestDto {
    id: number
}

interface DataTablesPaginationRequestDto {
    pageNumber: number
    pageSize: number
    searchText?: string
    searchField?: string[]
}

export async function apiGetCategoryList(
    params: DataTablesPaginationRequestDto,
): Promise<CategoryGridListResponseDto> {
    return ApiService.fetchDataWithAxios<CategoryGridListResponseDto>({
        url: '/Category/GetCategories',
        method: 'post',
        data: params as unknown as Record<string, unknown>,
    })
}

export async function apiGetCategoryById(
    params: CategoryGetByIdRequestDto,
): Promise<CategoryGetByIdResponseDto> {
    console.log('apiGetCategoryById called with:', params)
    console.log('URL will be:', `/Category/GetCategoryById`)
    console.log('Request body will be:', params)

    const result =
        await ApiService.fetchDataWithAxios<CategoryGetByIdResponseDto>({
            url: '/Category/GetCategoryById',
            method: 'post',
            data: params as unknown as Record<string, unknown>,
        })

    console.log('apiGetCategoryById result:', result)
    return result
}

export async function apiCreateCategory(
    data: CategoryCreateRequestDto,
): Promise<boolean> {
    return ApiService.fetchDataWithAxios<boolean>({
        url: '/Category/CreateCategory',
        method: 'post',
        data: data as unknown as Record<string, unknown>,
    })
}

export async function apiUpdateCategory(
    data: CategoryUpdateRequestDto,
): Promise<boolean> {
    console.log('apiUpdateCategory called with:', data)

    // Wrap data in dto object as required by API
    const requestBody = {
        dto: data,
    }

    console.log('URL will be:', '/Category/UpdateCategory')
    console.log('Request body will be:', requestBody)

    const result = await ApiService.fetchDataWithAxios<boolean>({
        url: '/Category/UpdateCategory',
        method: 'put',
        data: requestBody as unknown as Record<string, unknown>,
    })

    console.log('apiUpdateCategory result:', result)
    return result
}

export async function apiDeleteCategory(
    data: CategoryDeleteRequestDto,
): Promise<boolean> {
    console.log('apiDeleteCategory called with:', data)
    console.log('URL will be:', `/Category/DeleteCategory`)
    console.log('Request body will be:', data)

    const result = await ApiService.fetchDataWithAxios<boolean>({
        url: '/Category/DeleteCategory',
        method: 'delete',
        data: data as unknown as Record<string, unknown>,
    })

    console.log('apiDeleteCategory result:', result)
    return result
}
