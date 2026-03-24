import { fileApi } from '@/utils/factories'
import ApiService from './ApiService'

export async function apiGetFiles<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/api/files',
        method: 'get',
        params,
    })
}

export async function apiUploadImage(file: File) {
    return fileApi.apiFileUploadImagePost(undefined, file)
}

export async function apiUploadMultipleImages(files: File[]) {
    return fileApi.apiFileUploadImagesMultiplePost(undefined, files)
}
