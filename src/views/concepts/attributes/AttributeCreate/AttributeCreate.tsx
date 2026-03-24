import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { z } from 'zod'

import type { AttributeCreateCommand } from '@/@types/attribute'
import { Notification, toast } from '@/components/ui'
import { Form, FormItem } from '@/components/ui/Form'
import Switcher from '@/components/ui/Switcher'
import { attributeApi } from '@/utils/factories'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'

const AttributeCreate = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const validationSchema = z.object({
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
    } = useForm<AttributeFormSchema>({
        defaultValues: {
            attributeName: '',
            willAcceptTextValues: false,
            willBeVisibleForDocumentTree: false,
        },
        resolver: zodResolver(validationSchema),
    })

    // React Query mutation
    const createAttributeMutation = useMutation({
        mutationFn: async (data: AttributeCreateCommand) => {
            const response = await attributeApi.apiAttributeCreatePost(data)
            return response.data
        },
        onSuccess: () => {
            navigate('/concepts/attributes/attribute-list')
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
        },
        onError: (error: { detail: string }) => {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {error?.detail ?? t('common.danger')}
                </Notification>,
            )
        },
    })

    const onSubmit = (values: AttributeFormSchema) => {
        setIsSubmitting(true)
        const createCommand: AttributeCreateCommand = {
            attributeName: values.attributeName,
            willAcceptTextValues: values.willAcceptTextValues,
            willBeVisibleForDocumentTree: values.willBeVisibleForDocumentTree,
        }
        createAttributeMutation.mutate(createCommand, {
            onSettled: () => setIsSubmitting(false),
        })
    }

    const onCancel = () => {
        navigate('/concepts/attributes/attribute-list')
    }

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <h3>{t('nav.conceptsAttributes.create_attribute')}</h3>
                        {/* <p>Add a new attribute to your system</p> */}
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
                                {isSubmitting
                                    ? `${t('common.updating')}`
                                    : `${t('nav.conceptsAttributes.create_attribute')}`}
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default AttributeCreate
