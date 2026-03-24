import { AdaptiveCard, Container } from '@/components/shared'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { pagesApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'
// Eğer projede bir rich text editor yoksa, react-quill gibi bir paket eklenmeli
import RichTextEditor from '@/components/shared/RichTextEditor'
import { useState } from 'react'

const schema = z.object({
    title: z.string().min(1, 'Başlık zorunlu'),
    content: z.string().min(1, 'İçerik zorunlu'),
})

type PageForm = z.infer<typeof schema>

const slugifyTitle = (title: string) => {
    const turkishCharMap: Record<string, string> = {
        ç: 'c',
        ğ: 'g',
        ı: 'i',
        ö: 'o',
        ş: 's',
        ü: 'u',
    }

    const normalized = title
        .trim()
        .toLocaleLowerCase('tr-TR')
        .split('')
        .map((char) => turkishCharMap[char] || char)
        .join('')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')

    return normalized
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
}

const PageCreate = () => {
    const navigate = useNavigate()
    const [content, setContent] = useState('')
    const { handleSubmit, control, setValue } = useForm<PageForm>({
        resolver: zodResolver(schema),
        defaultValues: { title: '', content: '' },
    })

    const mutation = useMutation({
        mutationFn: async (values: PageForm) => {
            const slug = slugifyTitle(values.title)

            return pagesApi.apiPagesPost({
                title: values.title,
                slug,
                content: content,
            })
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    Sayfa basariyla olusturuldu.
                </Notification>,
            )
            navigate('/concepts/page/page-list')
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={3000}>
                    Sayfa olusturulurken hata olustu.
                </Notification>,
            )
        },
    })

    // Eğer projede bir rich text editor yoksa, buraya eklenmeli
    // Örnek: <ReactQuill value={content} onChange={setContent} />

    return (
        <AdaptiveCard>
            <Container>
                <h4 className="mb-4">Yeni Sayfa</h4>
                <Form onSubmit={handleSubmit((v) => mutation.mutate(v))}>
                    <FormItem label="Başlık *">
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <Input {...field} />}
                        />
                    </FormItem>
                    <FormItem label="İçerik *">
                        <Controller
                            name="content"
                            control={control}
                            render={({ field }) => (
                                <RichTextEditor
                                    content={content}
                                    onChange={({ html }) => {
                                        setContent(html)
                                        field.onChange(html)
                                    }}
                                />
                            )}
                        />
                    </FormItem>
                    <Button
                        block
                        variant="solid"
                        loading={mutation.isLoading}
                        type="submit"
                    >
                        Kaydet
                    </Button>
                </Form>
            </Container>
        </AdaptiveCard>
    )
}

export default PageCreate
