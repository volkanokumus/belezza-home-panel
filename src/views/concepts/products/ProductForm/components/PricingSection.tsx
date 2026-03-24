import NumericInput from '@/components/shared/NumericInput'
import Card from '@/components/ui/Card'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import type { Control, FieldErrors } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import type { ProductFormSchema } from '../types'

type PricingSectionProps = {
    control: Control<ProductFormSchema>
    errors: FieldErrors<ProductFormSchema>
}

const PricingSection = ({ control, errors }: PricingSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Pricing</h4>
            <div>
                <FormItem
                    label="Price"
                    invalid={Boolean(errors.price)}
                    errorMessage={errors.price?.message}
                >
                    <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                thousandSeparator
                                type="text"
                                inputPrefix="₺"
                                autoComplete="off"
                                placeholder="0.00"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Discount Price"
                    invalid={Boolean(errors.discountPrice)}
                    errorMessage={errors.discountPrice?.message}
                >
                    <Controller
                        name="discountPrice"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                thousandSeparator
                                type="text"
                                inputPrefix="₺"
                                autoComplete="off"
                                placeholder="0.00"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="md:flex gap-4">
                <FormItem
                    label="Currency"
                    invalid={Boolean(errors.currency)}
                    errorMessage={errors.currency?.message}
                    className="w-full"
                >
                    <Controller
                        name="currency"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="USD"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem label="Show Price" className="w-full">
                    <Controller
                        name="showPrice"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="checkbox"
                                checked={field.value}
                                onChange={(e) =>
                                    field.onChange(e.target.checked)
                                }
                                className="w-4 h-4"
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default PricingSection
