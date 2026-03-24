import RichTextEditor from '@/components/shared/RichTextEditor'
import Card from '@/components/ui/Card'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { generateUrl } from '@/utils/seoUrl'
import { useEffect } from 'react'
import type { Control, FieldErrors } from 'react-hook-form'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import type { ProductFormSchema } from '../types'

type GeneralSectionProps = {
    control: Control<ProductFormSchema>
    errors: FieldErrors<ProductFormSchema>
}

const GeneralSection = ({ control, errors }: GeneralSectionProps) => {
    const { setValue } = useFormContext<ProductFormSchema>()

    const productName = useWatch({
        control,
        name: 'name',
    })
    useEffect(() => {
        if (productName) {
            setValue('slug', generateUrl(productName), { shouldValidate: true })
        }
    }, [productName, setValue])
    return (
        <Card>
            <h4 className="mb-6">Basic Information</h4>
            <div>
                <FormItem
                    label="Product Name"
                    invalid={Boolean(errors.name)}
                    errorMessage={errors.name?.message}
                >
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Product Name"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Product Code"
                    invalid={Boolean(errors.productCode)}
                    errorMessage={errors.productCode?.message}
                >
                    <Controller
                        name="productCode"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Product Code"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Slug"
                    invalid={Boolean(errors.slug)}
                    errorMessage={errors.slug?.message}
                >
                    <Controller
                        name="slug"
                        disabled
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="product-slug"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div>
                <FormItem
                    label="Short Description"
                    invalid={Boolean(errors.shortDescription)}
                    errorMessage={errors.shortDescription?.message}
                >
                    <Controller
                        name="shortDescription"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Short Description"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <FormItem
                label="Description"
                invalid={Boolean(errors.description)}
                errorMessage={errors.description?.message}
            >
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <RichTextEditor
                            content={field.value || ''}
                            invalid={Boolean(errors.description)}
                            onChange={({ html }) => {
                                field.onChange(html)
                            }}
                        />
                    )}
                />
            </FormItem>
        </Card>
    )
}

export default GeneralSection
