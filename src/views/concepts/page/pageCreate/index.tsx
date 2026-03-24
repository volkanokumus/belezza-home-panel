import { AdaptiveCard, Container } from '@/components/shared'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Switcher from '@/components/ui/Switcher'
import Upload from '@/components/ui/Upload'
import { SliderLinkType, SliderType } from '@/openApiServices'
import { slidersApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'

/* -------------------- ENUM OPTIONS (C# BİREBİR) -------------------- */
const SLIDER_TYPE_OPTIONS = [
    { value: 1, label: 'Main Slider' },
    { value: 2, label: 'Banner Slider' },
    { value: 3, label: 'Category Slider' },
    { value: 4, label: 'Product Slider' },
    { value: 5, label: 'Promo Slider' },
    { value: 6, label: 'Sidebar Slider' },
    { value: 7, label: 'Footer Slider' },
    { value: 8, label: 'Mobile Slider' },
]

const LINK_TYPE_OPTIONS = [
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

/* -------------------- SCHEMA -------------------- */
const sliderSchema = z.object({
    title: z.string().min(1, 'Title zorunlu'),
    subtitle: z.string().optional(),
    description: z.string().optional(),

    imageFile: z.instanceof(File),
    mobileImageFile: z.instanceof(File).optional(),

    linkUrl: z.string().optional(),
    buttonText: z.string().optional(),

    order: z.number().int().min(0),
    isActive: z.boolean(),

    sliderType: z.number().int().min(1),
    linkType: z.number().int().min(1),

    openInNewTab: z.boolean(),
    targetLocation: z.string().optional(),

    startDate: z.string(),
    endDate: z.string(),
})

type SliderForm = z.infer<typeof sliderSchema>

/* -------------------- COMPONENT -------------------- */
const PageCreate = () => {
    const navigate = useNavigate()

    const { handleSubmit, control, setValue, watch } = useForm<SliderForm>({
        resolver: zodResolver(sliderSchema),
        defaultValues: {
            isActive: true,
            openInNewTab: false,
            order: 0,
            sliderType: 1, // MainSlider
            linkType: 1, // None
        },
    })

    const linkType = watch('linkType')

    /* -------- IMAGE UPLOAD -------- */

    /* -------- SUBMIT -------- */
    const mutation = useMutation({
        mutationFn: async (values: SliderForm) => {
            return slidersApi.apiSlidersWithImagePost(
                values.title,
                values.subtitle,
                values.description,
                values.imageFile, // ✅ File
                undefined, // imageUrl
                values.mobileImageFile, // ✅ File
                undefined, // mobileImageUrl
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
        },
    })

    return (
        <Container>
            <AdaptiveCard>
                <h4 className="mb-4">Yeni Slider</h4>

                <Form onSubmit={handleSubmit((v) => mutation.mutate(v))}>
                    <FormItem label="Title *">
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                        />
                    </FormItem>

                    <FormItem label="Subtitle">
                        <Controller
                            name="subtitle"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                        />
                    </FormItem>

                    <FormItem label="Description">
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                        />
                    </FormItem>

                    <FormItem label="Slider Görseli (Desktop) *">
                        <Upload
                            draggable
                            onChange={(f) => setValue('imageFile', f[0])}
                        />
                    </FormItem>

                    <FormItem label="Slider Görseli (Mobile)">
                        <Upload
                            draggable
                            onChange={(f) => setValue('mobileImageFile', f[0])}
                        />
                    </FormItem>

                    <FormItem label="Slider Type">
                        <Controller
                            name="sliderType"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    isDisabled={true}
                                    options={SLIDER_TYPE_OPTIONS}
                                    value={SLIDER_TYPE_OPTIONS.find(
                                        (o) => o.value === field.value,
                                    )}
                                    onChange={(o) => field.onChange(o?.value)}
                                />
                            )}
                        />
                    </FormItem>

                    <FormItem label="Link Type">
                        <Controller
                            name="linkType"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    isDisabled={true}
                                    options={LINK_TYPE_OPTIONS}
                                    value={LINK_TYPE_OPTIONS.find(
                                        (o) => o.value === field.value,
                                    )}
                                    onChange={(o) => field.onChange(o?.value)}
                                />
                            )}
                        />
                    </FormItem>

                    {linkType !== 1 && (
                        <>
                            <FormItem label="Link URL">
                                <Controller
                                    name="linkUrl"
                                    control={control}
                                    render={({ field }) => <Input {...field} />}
                                />
                            </FormItem>

                            <FormItem label="Button Text">
                                <Controller
                                    name="buttonText"
                                    control={control}
                                    render={({ field }) => <Input {...field} />}
                                />
                            </FormItem>
                        </>
                    )}

                    <FormItem label="Yeni Sekmede Aç">
                        <Controller
                            name="openInNewTab"
                            control={control}
                            render={({ field }) => (
                                <Switcher
                                    disabled
                                    checked={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </FormItem>

                    <FormItem label="Aktif">
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

                    <FormItem label="Start Date">
                        <Controller
                            name="startDate"
                            control={control}
                            render={({ field }) => (
                                <Input type="datetime-local" {...field} />
                            )}
                        />
                    </FormItem>

                    <FormItem label="End Date">
                        <Controller
                            name="endDate"
                            control={control}
                            render={({ field }) => (
                                <Input type="datetime-local" {...field} />
                            )}
                        />
                    </FormItem>

                    <Button
                        block
                        variant="solid"
                        loading={mutation.isLoading}
                        type="submit"
                    >
                        Slider Kaydet
                    </Button>
                </Form>
            </AdaptiveCard>
        </Container>
    )
}

export default PageCreate
