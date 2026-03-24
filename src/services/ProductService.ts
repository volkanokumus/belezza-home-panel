import type { CreateProductDto } from '@/openApiServices/api'
import { productApi } from '@/utils/factories'

export async function apiGetProductList<T, U extends Record<string, unknown>>(
    params: U,
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return productApi.apiProductsGet(params as any)
}

export async function apiGetProduct<T, U extends Record<string, unknown>>({
    id,
    ...params
}: U) {
    return productApi.apiProductsIdGet(Number(id))
}

export async function apiCreateProduct(data: CreateProductDto) {
    return productApi.apiProductsPost(data)
}

export async function apiUpdateProduct(id: string | number, data: CreateProductDto) {
    return productApi.apiProductsIdPut(Number(id), data)
}
