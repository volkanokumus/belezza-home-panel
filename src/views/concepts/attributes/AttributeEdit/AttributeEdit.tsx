import type { AttributeUpdateCommand } from '@/@types/attribute'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification/Notification'
import Switcher from '@/components/ui/Switcher'
import toast from '@/components/ui/toast'
import { attributeApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router'
import { z } from 'zod'

const AttributeEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()
    const validationSchema = z.object({
        id: z.number(),
        attributeName: z
            .string()
            .min(1, { message: t('common.required') })
            .max(255, {
                message: t('common.maxLenght'),
            }),
        willAcceptTextValues: z.boolean(),
        willBeVisibleForDocumentTree: z.boolean(),
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
            attributeName: '',
            willAcceptTextValues: false,
            willBeVisibleForDocumentTree: false,
        },
        resolver: zodResolver(validationSchema),
    })

    // Load attribute data
    useEffect(() => {
        const loadAttribute = async () => {
            if (!id) return

            setLoading(true)
            try {
                const attributeId = parseInt(id)
                const response =
                    await attributeApi.apiAttributeIdGet(attributeId)
                const attribute = response.data
                reset({
                    id: attribute.id,
                    attributeName: attribute.attributeName ?? '',
                    willAcceptTextValues:
                        attribute.willAcceptTextValues ?? false,
                    willBeVisibleForDocumentTree:
                        attribute.willBeVisibleForDocumentTree ?? false,
                })
            } catch (error: any) {
                toast.push(
                    <Notification type="danger" duration={2500}>
                        {error?.detail ?? t('common.danger')}
                    </Notification>,
                )
            } finally {
                setLoading(false)
            }
        }

        loadAttribute()
        loadAttribute()
    }, [id, reset])

    const onSubmit = async (values: AttributeFormSchema) => {
        if (!id) return

        setIsSubmitting(true)
        try {
            const updateCommand: AttributeUpdateCommand = {
                id: values.id,
                attributeName: values.attributeName,
                willAcceptTextValues: values.willAcceptTextValues,
                willBeVisibleForDocumentTree:
                    values.willBeVisibleForDocumentTree,
            }

            await attributeApi.apiAttributeUpdatePut(updateCommand)

            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            navigate('/concepts/attributes/attribute-list')
        } catch (error: any) {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {error?.detail ?? t('common.danger')}
                </Notification>,
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const onCancel = () => {
        navigate('/concepts/attributes/attribute-list')
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
                        <h3>{t('nav.conceptsAttributes.edit_attribute')}</h3>
                        {/* <p>Update attribute information</p> */}
                    </div>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormItem
                            label={t('nav.conceptsAttributes.attributes_name')}
                            invalid={Boolean(errors.attributeName)}
                            errorMessage={errors.attributeName?.message}
                        >
                            <Controller
                                name="attributeName"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder={t(
                                            'nav.conceptsAttributes.attributes_name',
                                        )}
                                        autoComplete="off"
                                        {...field}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t('nav.conceptsAttributes.accept_text_edit')}
                            invalid={Boolean(errors.willAcceptTextValues)}
                            errorMessage={errors.willAcceptTextValues?.message}
                        >
                            <Controller
                                name="willAcceptTextValues"
                                control={control}
                                render={({ field }) => (
                                    <Switcher
                                        checked={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </FormItem>

                        <FormItem
                            label={t(
                                'nav.conceptsAttributes.visible_tree_edit',
                            )}
                            invalid={Boolean(
                                errors.willBeVisibleForDocumentTree,
                            )}
                            errorMessage={
                                errors.willBeVisibleForDocumentTree?.message
                            }
                        >
                            <Controller
                                name="willBeVisibleForDocumentTree"
                                control={control}
                                render={({ field }) => (
                                    <Switcher
                                        checked={field.value}
                                        onChange={field.onChange}
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
                                    : `${t('nav.conceptsAttributes.update_attribute')}`}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default AttributeEdit
