import type { Control, FieldErrors } from 'react-hook-form'

export type ProductFormSchema = {
  name: string
  productCode: string
  description: string

  price: number
  discountPrice?: number

  category?: string | number
  slug?: string
  shortDescription?: string
  mainImageUrl?: string
  imageUrls?: string[]
  currency?: string
  showPrice?: boolean
  dimensions?: string
  material?: string
  colors?: string
  features?: Record<string, string>
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  status?: string | number
  isFeatured?: boolean
  isNewProduct?: boolean
  order?: string | number
}


export type FormSectionBaseProps = {
    control: Control<ProductFormSchema>
    errors: FieldErrors<ProductFormSchema>
}
