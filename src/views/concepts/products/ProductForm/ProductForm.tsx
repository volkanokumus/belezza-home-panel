import type { CommonProps } from '@/@types/common'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import { Form } from '@/components/ui/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import isEmpty from 'lodash/isEmpty'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import AttributeSection from './components/AttributeSection'
import GeneralSection from './components/GeneralSection'
import ImageSection from './components/ImageSection'
import PricingSection from './components/PricingSection'
import type { ProductFormSchema } from './types'

type ProductFormProps = {
    onFormSubmit: (values: ProductFormSchema) => void
    defaultValues?: Partial<ProductFormSchema>
    newProduct?: boolean
} & CommonProps

const validationSchema = z.object({
    name: z.string().min(1, { message: 'Ürün adı zorunlu!' }),
    productCode: z.string().min(1, { message: 'Ürün kodu zorunlu!' }),
    description: z.string().min(1, { message: 'Açıklama zorunlu!' }),
    price: z.preprocess((val) => {
        if (val === '' || val === null || val === undefined) {
            return undefined
        }
        if (typeof val === 'string') {
            const parsed = Number(val.replace(/,/g, ''))
            return isNaN(parsed) ? undefined : parsed
        }
        return val
    }, z.number()),
    discountPrice: z.preprocess((val) => {
        if (val === '' || val === null || val === undefined) {
            return undefined
        }
        if (typeof val === 'string') {
            const parsed = Number(val.replace(/,/g, ''))
            return isNaN(parsed) ? undefined : parsed
        }
        return val
    }, z.number().optional()),
    category: z.union([z.string(), z.number()]).optional(),
    slug: z.string().optional(),
    shortDescription: z.string().optional(),
    mainImageUrl: z.string().optional(),
    imageUrls: z.array(z.string()).optional(),
    currency: z.string().optional(),
    showPrice: z.boolean().optional(),
    dimensions: z.string().optional(),
    material: z.string().optional(),
    colors: z.string().optional(),
    features: z.record(z.string(), z.string()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.string().optional(),
    status: z.union([z.string(), z.number()]).optional(),
    isFeatured: z.boolean().optional(),
    isNewProduct: z.boolean().optional(),
    order: z.union([z.string(), z.number()]).optional(),
})
const ProductForm = (props: ProductFormProps) => {
    const { onFormSubmit, defaultValues = {}, children } = props

    const methods = useForm<ProductFormSchema>({
        defaultValues: {
            name: '',
            productCode: '',
            description: '',
            price: 0,
            category: undefined,
            discountPrice: undefined,
            slug: '',
            shortDescription: '',
            mainImageUrl: '',
            imageUrls: [],
            currency: '',
            showPrice: true,
            dimensions: '',
            material: '',
            colors: '',
            features: {},
            metaTitle: '',
            metaDescription: '',
            keywords: '',
            status: undefined,
            isFeatured: false,
            isNewProduct: false,
            order: undefined,
            ...defaultValues,
        },
        resolver: zodResolver(validationSchema) as any,
    })

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = methods

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: ProductFormSchema) => {
        onFormSubmit?.(values)
    }

    return (
        <FormProvider {...methods}>
            <Form
                className="flex w-full h-full"
                containerClassName="flex flex-col w-full justify-between"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Container>
                    <div className="flex flex-col xl:flex-row gap-4">
                        <div className="gap-4 flex flex-col flex-auto">
                            <GeneralSection control={control} errors={errors} />
                            <PricingSection control={control} errors={errors} />
                        </div>
                        <div className="lg:min-w-[440px] 2xl:w-[500px] gap-4 flex flex-col">
                            <ImageSection control={control} errors={errors} />
                            <AttributeSection
                                control={control}
                                errors={errors}
                            />
                        </div>
                    </div>
                </Container>
                <BottomStickyBar>{children}</BottomStickyBar>
            </Form>
        </FormProvider>
    )
}

export default ProductForm
