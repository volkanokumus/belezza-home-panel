import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { Notification, toast } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { attributeApi, attributeValuesApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const AttributesValueCreate = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { t } = useTranslation()
    const validationSchema = z.object({
        attributeId: z.number({
            // required_error: 'Attribute is required',
            // invalid_type_error: 'Invalid attribute selected',
        }),
        // attributeName: z
        //     .string()
        //     .min(1, { message: 'Attribute name is required' })
        //     .max(255, { message: 'Must not exceed 255 characters' }),
        attributePossibleValue: z
            .string()
            .min(1, { message: t('common.required') })
            .max(255, { message: t('common.maxLenght') }),
    })

    type AttributeValueFormSchema = z.infer<typeof validationSchema>
    // Form setup
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<AttributeValueFormSchema>({
        defaultValues: {
            attributeId: undefined,
            // attributeName: 'empty',
            attributePossibleValue: '',
        },
        resolver: zodResolver(validationSchema),
    })

    // ✅ Attribute listesi (Select için)
    const { data: attributeListData, isLoading } = useQuery(
        ['attributeList'],
        async () => {
            const response = await attributeApi.apiAttributeAttributeListPost({
                draw: 1,
                start: 0,
                length: 100, // tüm attribute'ları al
                search: { value: '', regex: false },
            })
            return response.data?.data || []
        },
    )

    // ✅ Attribute Value create mutation
    const createAttributeValueMutation = useMutation({
        mutationFn: async (data: AttributeValueFormSchema) => {
            const response =
                await attributeValuesApi.apiAttributeValuesCreatePost({
                    attributeId: data.attributeId,
                    attributeName: 'empty',
                    attributePossibleValue: data.attributePossibleValue,
                })
            return response.data
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            navigate('/concepts/attributes-value/attribute-value-list')
        },
        onError: (error: { detail: string }) => {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {error?.detail ?? t('common.danger')}
                </Notification>,
            )
        },
    })

    // ✅ Submit handler
    const onSubmit = (values: AttributeValueFormSchema) => {
        setIsSubmitting(true)
        createAttributeValueMutation.mutate(values, {
            onSettled: () => setIsSubmitting(false),
        })
    }

    const onCancel = () => {
        navigate('/concepts/attributes-value/attribute-value-list')
    }

    return (
        <Container>
            <AdaptiveCard>
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <h3>
                            {t('nav.conceptsAttributeValues.create_attribute')}
                        </h3>
                        {/* <p>Add a new possible value for an attribute</p> */}
                    </div>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {/* Attribute select */}
                        <FormItem
                            label={t(
                                'nav.conceptsAttributeValues.attributes_name',
                            )}
                            invalid={Boolean(errors.attributeId)}
                            errorMessage={errors.attributeId?.message}
                        >
                            <Controller
                                name="attributeId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        isLoading={isLoading}
                                        options={attributeListData}
                                        getOptionLabel={(opt) =>
                                            opt.attributeName || ''
                                        }
                                        getOptionValue={(opt) => String(opt.id)}
                                        placeholder={t(
                                            'nav.conceptsAttributeValues.attributes_name_select',
                                        )}
                                        value={
                                            attributeListData?.find(
                                                (attr) =>
                                                    String(attr.id) ===
                                                    String(field.value),
                                            ) || null
                                        }
                                        onChange={(option) =>
                                            field.onChange(
                                                option
                                                    ? Number(option.id)
                                                    : undefined,
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormItem>

                        {/* Attribute name */}
                        {/* <FormItem
                            label="Attribute Name"
                            invalid={Boolean(errors.attributeName)}
                            errorMessage={errors.attributeName?.message}
                        >
                            <Controller
                                name="attributeName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder="Attribute Name"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem> */}

                        {/* Possible Value */}
                        <FormItem
                            label={t(
                                'nav.conceptsAttributeValues.possible_value',
                            )}
                            invalid={Boolean(errors.attributePossibleValue)}
                            errorMessage={
                                errors.attributePossibleValue?.message
                            }
                        >
                            <Controller
                                name="attributePossibleValue"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder={t(
                                            'nav.conceptsAttributeValues.possible_value',
                                        )}
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <div className="flex items-center justify-end gap-4 mt-8">
                            <Button
                                type="button"
                                variant="plain"
                                loading={isSubmitting}
                                onClick={onCancel}
                            >
                                {t('common.cancel')}
                            </Button>
                            <Button
                                type="submit"
                                variant="solid"
                                loading={isSubmitting}
                            >
                                {t(
                                    'nav.conceptsAttributeValues.create_attribute',
                                )}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default AttributesValueCreate
