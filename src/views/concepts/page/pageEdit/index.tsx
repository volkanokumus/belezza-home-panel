import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification/Notification'
import Switcher from '@/components/ui/Switcher'
import toast from '@/components/ui/toast'
import { SliderLinkType, SliderType } from '@/openApiServices'
import { slidersApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { z } from 'zod'

/* ---------------- ENUM OPTIONS ---------------- */

const SLIDER_TYPES = [
    { value: 1, label: 'Main Slider' },
    { value: 2, label: 'Banner Slider' },
    { value: 3, label: 'Category Slider' },
    { value: 4, label: 'Product Slider' },
    { value: 5, label: 'Promo Slider' },
    { value: 6, label: 'Sidebar Slider' },
    { value: 7, label: 'Footer Slider' },
    { value: 8, label: 'Mobile Slider' },
]

const LINK_TYPES = [
    { value: 1, label: 'None' },
    { value: 2, label: 'Internal' },
    { value: 3, label: 'External' },
    { value: 4, label: 'Product' },
    { value: 5, label: 'Category' },
    { value: 6, label: 'Page' },
    { value: 7, label: 'Contact' },
    { value: 8, label: 'WhatsApp' },
    { value: 9, label: 'Phone' },
    { value: 10, label: 'Email' },
]

/* ---------------- VALIDATION ---------------- */

const validationSchema = z.object({
    id: z.number(),
    title: z.string().min(1, 'Title is required'),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    mobileImageUrl: z.string().optional(),
    linkUrl: z.string().optional(),
    buttonText: z.string().optional(),
    order: z.number(),
    isActive: z.boolean(),
    sliderType: z.number(),
    linkType: z.number(),
    openInNewTab: z.boolean(),
    targetLocation: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
})

type SliderFormSchema = z.infer<typeof validationSchema>

/* ---------------- COMPONENT ---------------- */

const PageEdit = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<SliderFormSchema>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            id: 0,
            title: '',
            subtitle: '',
            description: '',
            imageUrl: '',
            mobileImageUrl: '',
            linkUrl: '',
            buttonText: '',
            order: 0,
            isActive: true,
            sliderType: 1,
            linkType: 1,
            openInNewTab: false,
            targetLocation: '',
            startDate: '',
            endDate: '',
        },
    })

    /* -------- LOAD SLIDER -------- */

    useEffect(() => {
        const loadSlider = async () => {
            if (!id) return
            setLoading(true)
            try {
                const sliderId = Number(id)
                const res = await slidersApi.apiSlidersIdGet(sliderId)
                const slider = res.data
                console.log(slider)

                reset({
                    id: slider.id,
                    title: slider.title ?? '',
                    subtitle: slider.subtitle ?? '',
                    description: slider.description ?? '',
                    imageUrl: slider.imageUrl ?? '',
                    mobileImageUrl: slider.mobileImageUrl ?? '',
                    linkUrl: slider.linkUrl ?? '',
                    buttonText: slider.buttonText ?? '',
                    order: slider.order ?? 0,
                    isActive: slider.isActive ?? true,
                    sliderType: slider.sliderType,
                    linkType: slider.linkType,
                    openInNewTab: slider.openInNewTab ?? false,
                    targetLocation: slider.targetLocation ?? '',
                    startDate: slider.startDate ?? '',
                    endDate: slider.endDate ?? '',
                })
            } catch {
                toast.push(
                    <Notification type="danger" duration={2500}>
                        Slider yüklenemedi
                    </Notification>,
                )
            } finally {
                setLoading(false)
            }
        }

        loadSlider()
    }, [id, reset])

    /* -------- SUBMIT -------- */

    const onSubmit = async (values: SliderFormSchema) => {
        setIsSubmitting(true)

        try {
            await slidersApi.apiSlidersIdWithImagePut(
                values.id,
                values.title,
                values.subtitle,
                values.description,
                undefined, // imageFile
                undefined, // mobileImageFile
                values.linkUrl,
                values.buttonText,
                values.order,
                values.isActive,
                values.sliderType as SliderType,
                values.linkType as SliderLinkType,
                values.openInNewTab,
                values.targetLocation,
                values.startDate,
                values.endDate,
            )

            toast.push(
                <Notification type="success" duration={2500}>
                    Slider updated successfully
                </Notification>,
            )

            navigate('/concepts/sliders/slider-list')
        } catch (error) {
            toast.push(
                <Notification type="danger" duration={2500}>
                    Update failed
                </Notification>,
            )
        } finally {
            setIsSubmitting(false)
            navigate('/concepts/slider/slider-list')
        }
    }

    if (loading) {
        return (
            <Container className="h-full flex items-center justify-center">
                Loading slider...
            </Container>
        )
    }

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="max-w-3xl">
                    <h3 className="mb-6">Edit Slider</h3>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {/* TITLE */}
                        <FormItem label="Title" invalid={!!errors.title}>
                            <Controller
                                name="title"
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormItem>

                        {/* SUBTITLE */}
                        <FormItem label="Subtitle">
                            <Controller
                                name="subtitle"
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormItem>
                        <FormItem label="Subtitle">
                            <Controller
                                name="description"
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormItem>

                        {/* IMAGE URL */}
                        <FormItem label="Image URL">
                            <Controller
                                name="imageUrl"
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormItem>

                        {/* MOBILE IMAGE URL */}
                        <FormItem label="Mobile Image URL">
                            <Controller
                                name="mobileImageUrl"
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormItem>

                        {/* ORDER */}
                        <FormItem label="Order">
                            <Controller
                                name="order"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(
                                                Number(e.target.value),
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormItem>

                        {/* ACTIVE */}
                        <FormItem label="Active">
                            <Controller
                                name="isActive"
                                control={control}
                                render={({ field }) => (
                                    <Switcher
                                        checked={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </FormItem>

                        <div className="flex justify-end gap-3 mt-8">
                            <Button
                                variant="plain"
                                onClick={() =>
                                    navigate('/concepts/sliders/slider-list')
                                }
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="solid"
                                loading={isSubmitting}
                            >
                                Update
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default PageEdit
