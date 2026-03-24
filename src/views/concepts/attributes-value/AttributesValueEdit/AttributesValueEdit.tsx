import { AttributeValuesUpdate } from '@/@types/attribute'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { Select } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification/Notification'
import toast from '@/components/ui/toast'
import { attributeApi, attributeValuesApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { z } from 'zod'

const AttributeEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(true)
    const [selectedAttributeName, setSelectedAttributeName] = useState('')
    const { t } = useTranslation()
    const validationSchema = z.object({
        id: z.number(),
        attributeName: z
            .string()
            .min(1, { message: t('common.required') })
            .max(255, {
                message: t('common.maxLenght'),
            }),
        attributeId: z.number(),
        attributePossibleValue: z
            .string()
            .min(1, { message: t('common.required') })
            .max(255, {
                message: t('common.maxLenght'),
            }),
    })

    type AttributeFormSchema = z.infer<typeof validationSchema>
    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<AttributeFormSchema>({
        defaultValues: {
            id: 0,
            attributeId: 0,
            attributeName: '',
            attributePossibleValue: '',
        },
        resolver: zodResolver(validationSchema),
    })

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
    // Load attribute data
    useEffect(() => {
        const loadAttribute = async () => {
            if (!id) return

            setLoading(true)
            try {
                const attributeSearchId = parseInt(id)
                const response =
                    await attributeValuesApi.apiAttributeValuesIdGet(
                        attributeSearchId,
                    )
                const attribute = response.data

                // attributeName'i state'e kaydet
                setSelectedAttributeName(attribute.attributeName ?? '')

                reset({
                    id: attribute.id,
                    attributeId: attribute.attributeId,
                    attributeName: attribute.attributeName ?? '',
                    attributePossibleValue:
                        attribute.attributePossibleValue ?? '',
                })
            } catch (error: any) {
                toast.push(
                    <Notification type="danger" duration={2500}>
                        {error?.detail}
                    </Notification>,
                )
            } finally {
                setLoading(false)
            }
        }

        loadAttribute()
    }, [id, reset])

    const onSubmit = async (values: AttributeFormSchema) => {
        if (!id) return

        setIsSubmitting(true)
        try {
            const updateCommand: AttributeValuesUpdate = {
                id: values.id,
                attributeId: values.attributeId,
                attributeName: values.attributeName,
                attributePossibleValue: values.attributePossibleValue,
            }

            await attributeValuesApi.apiAttributeValuesUpdatePut(updateCommand)

            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            navigate('/concepts/attributes-value/attribute-value-list')
        } catch (error: any) {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {error?.detail && t('common.danger')}
                </Notification>,
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const onCancel = () => {
        navigate('/concepts/attributes-value/attribute-value-list')
    }

    if (loading) {
        return (
            <Container className="h-full">
                <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                        <p>Loading attribute...</p>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <h3>
                            {t('nav.conceptsAttributeValues.update_attribute')}
                        </h3>
                        {/* <p>Update attribute information</p> */}
                    </div>

                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                                    // <Select
                                    //     isLoading={isLoading}
                                    //     options={attributeListData}
                                    //     getOptionLabel={(opt) =>
                                    //         opt.attributeName || ''
                                    //     }
                                    //     getOptionValue={(opt) => String(opt.id)}
                                    //     placeholder="Select Attribute"
                                    //     value={
                                    //         attributeListData?.find(
                                    //             (attr) =>
                                    //                 String(attr.id) ===
                                    //                 String(field.value),
                                    //         ) || null
                                    //     }
                                    //     onChange={(option) =>
                                    //         field.onChange(
                                    //             option
                                    //                 ? Number(option.id)
                                    //                 : undefined,
                                    //         )
                                    //     }
                                    // />
                                    <Select
                                        isLoading={isLoading}
                                        options={attributeListData}
                                        getOptionLabel={(opt) =>
                                            opt.attributeName || ''
                                        }
                                        getOptionValue={(opt) => String(opt.id)}
                                        placeholder="Select Attribute"
                                        value={
                                            attributeListData?.find(
                                                (attr) =>
                                                    String(attr.id) ===
                                                    String(field.value),
                                            ) || null
                                        }
                                        onChange={(option) => {
                                            field.onChange(
                                                option
                                                    ? Number(option.id)
                                                    : undefined,
                                            )
                                            setSelectedAttributeName(
                                                option?.attributeName ?? '',
                                            )
                                        }}
                                    />
                                )}
                            />
                        </FormItem>

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
                                        placeholder="Attribute Possible Value"
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <div className="flex items-center justify-end gap-4 mt-8">
                            <Button
                                type="button"
                                variant="plain"
                                disabled={isSubmitting}
                                onClick={onCancel}
                            >
                                {t('common.cancel')}
                            </Button>
                            <Button
                                type="submit"
                                variant="solid"
                                loading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? `${t('common.updating')}`
                                    : `${t('nav.conceptsAttributeValues.update_attribute')}`}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default AttributeEdit
