import Card from '@/components/ui/Card'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { STATIC_CATEGORIES } from '@/constants/categories.constant'
import type { Control, FieldErrors } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import type { ProductFormSchema } from '../types'

type AttributeSectionProps = {
    control: Control<ProductFormSchema>
    errors: FieldErrors<ProductFormSchema>
}

const AttributeSection = ({ control, errors }: AttributeSectionProps) => {
    const categoryOptions = [
        { label: 'Select a category', value: '' },
        ...STATIC_CATEGORIES.map((cat) => ({
            label: cat.categoryName,
            value: cat.id,
        })),
    ]

    return (
        <Card>
            <h4 className="mb-6">Product Attributes</h4>

            <FormItem
                label="Category"
                // invalid={Boolean(errors.category)}
                errorMessage={errors.category?.message}
            >
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const handleCategoryChange = (option: any) => {
                            field.onChange(option?.value)
                        }
                        return (
                            <Select
                                placeholder="Select a category"
                                options={categoryOptions}
                                value={categoryOptions.find(
                                    (cat) => cat.value === field.value,
                                )}
                                onChange={handleCategoryChange}
                            />
                        )
                    }}
                />
            </FormItem>

            <FormItem
                label="Dimensions"
                invalid={Boolean(errors.dimensions)}
                errorMessage={errors.dimensions?.message}
            >
                <Controller
                    name="dimensions"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="e.g., 10x20x30"
                            {...field}
                        />
                    )}
                />
            </FormItem>

            <FormItem
                label="Material"
                invalid={Boolean(errors.material)}
                errorMessage={errors.material?.message}
            >
                <Controller
                    name="material"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="e.g., Cotton, Leather"
                            {...field}
                        />
                    )}
                />
            </FormItem>

            <FormItem
                label="Colors"
                invalid={Boolean(errors.colors)}
                errorMessage={errors.colors?.message}
            >
                <Controller
                    name="colors"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="e.g., Red, Blue, Green"
                            {...field}
                        />
                    )}
                />
            </FormItem>

            <FormItem
                label="Status"
                invalid={Boolean(errors.status)}
                errorMessage={errors.status?.message}
            >
                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                        <Select
                            options={[
                                { label: 'Active', value: 1 },
                                { label: 'Inactive', value: 0 },
                            ]}
                            value={[
                                { label: 'Active', value: 1 },
                                { label: 'Inactive', value: 0 },
                            ].find((s) => s.value === field.value)}
                            onChange={(option) => field.onChange(option?.value)}
                        />
                    )}
                />
            </FormItem>

            <FormItem>
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                        <Controller
                            name="isFeatured"
                            control={control}
                            render={({ field }) => {
                                const handleFeaturedChange = (
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    field.onChange(e.target.checked)
                                }
                                return (
                                    <input
                                        className="w-4 h-4"
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={handleFeaturedChange}
                                    />
                                )
                            }}
                        />
                        <span>Is Featured</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <Controller
                            name="isNewProduct"
                            control={control}
                            render={({ field }) => {
                                const handleNewProductChange = (
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    field.onChange(e.target.checked)
                                }
                                return (
                                    <input
                                        className="w-4 h-4"
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={handleNewProductChange}
                                    />
                                )
                            }}
                        />
                        <span>Is New Product</span>
                    </label>
                </div>
            </FormItem>

            <FormItem
                label="Order"
                invalid={Boolean(errors.order)}
                errorMessage={errors.order?.message}
            >
                <Controller
                    name="order"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            autoComplete="off"
                            placeholder="0"
                            {...field}
                        />
                    )}
                />
            </FormItem>
        </Card>
    )
}

export default AttributeSection
