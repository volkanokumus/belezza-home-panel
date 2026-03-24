import {
    AuthApiFactory,
    ContactApiFactory,
    FileUploadApiFactory,
    MenusApiFactory,
    PagesApiFactory,
    ProductsApiFactory,
    SlidersApiFactory,
    SocialMediaLinksApiFactory,
    UsersApiFactory,
} from '@/openApiServices'
import axiosInstance from './axios'

export const authApi = AuthApiFactory(undefined, '', axiosInstance)
export const contactApi = ContactApiFactory(undefined, '', axiosInstance)
export const userApi = UsersApiFactory(undefined, '', axiosInstance)
export const fileApi = FileUploadApiFactory(undefined, '', axiosInstance)
export const productApi = ProductsApiFactory(undefined, '', axiosInstance)
export const menusApi = MenusApiFactory(undefined, '', axiosInstance)
export const pagesApi = PagesApiFactory(undefined, '', axiosInstance)
export const slidersApi = SlidersApiFactory(undefined, '', axiosInstance)
export const socialMediaApi = SocialMediaLinksApiFactory(undefined, '', axiosInstance)
