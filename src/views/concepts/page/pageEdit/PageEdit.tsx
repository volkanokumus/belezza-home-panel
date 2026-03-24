import { AdaptiveCard, Container } from '@/components/shared'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { pagesApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { z } from 'zod'

const schema = z.object({
    title: z.string().min(1, 'Başlık zorunlu'),
    content: z.string().min(1, 'İçerik zorunlu'),
})

type PageForm = z.infer<typeof schema>

const formatHtml = (html: string) => {
    if (!html?.trim()) return ''

    try {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')

        const formatNode = (node: ChildNode, level: number): string => {
            const indent = '  '.repeat(level)

            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent?.trim()
                return text ? `${indent}${text}` : ''
            }

            if (node.nodeType !== Node.ELEMENT_NODE) {
                return ''
            }

            const element = node as HTMLElement
            const attrs = Array.from(element.attributes)
                .map(({ name, value }) => ` ${name}="${value}"`)
                .join('')

            const children = Array.from(element.childNodes)
                .map((child) => formatNode(child, level + 1))
                .filter(Boolean)

            if (children.length === 0) {
                return `${indent}<${element.tagName.toLowerCase()}${attrs}></${element.tagName.toLowerCase()}>`
            }

            return [
                `${indent}<${element.tagName.toLowerCase()}${attrs}>`,
                children.join('\n'),
                `${indent}</${element.tagName.toLowerCase()}>`,
            ].join('\n')
        }

        return Array.from(doc.body.childNodes)
            .map((node) => formatNode(node, 0))
            .filter(Boolean)
            .join('\n')
    } catch {
        return html
    }
}

const PageEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const pageId = id ? Number(id) : undefined
    const [content, setContent] = useState('')
    const [formattedContent, setFormattedContent] = useState('')
    const { data, isLoading, isError } = useQuery<any>(
        ['page', pageId],
        () => pagesApi.apiPagesIdGet(pageId as number),
        {
            enabled: pageId !== undefined && !Number.isNaN(pageId),
            onError: () => {
                toast.push(
                    <Notification type="danger" duration={3000}>
                        Sayfa detayi yuklenemedi.
                    </Notification>,
                )
            },
        },
    )

    const { handleSubmit, control, setValue } = useForm<PageForm>({
        resolver: zodResolver(schema),
        defaultValues: { title: '', content: '' },
    })

    useEffect(() => {
        if (data?.data) {
            const page = data.data.page || data.data
            setValue('title', page.title)
            setValue('content', page.content)
            setContent(page.content)
            setFormattedContent(formatHtml(page.content || ''))
        }
    }, [data, setValue])

    const mutation = useMutation({
        mutationFn: async (values: PageForm) => {
            return pagesApi.apiPagesIdPut(pageId as number, {
                title: values.title,
                content: content,
            })
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    Sayfa basariyla guncellendi.
                </Notification>,
            )
            navigate('/concepts/page/page-list')
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={3000}>
                    Sayfa guncellenirken hata olustu.
                </Notification>,
            )
        },
    })

    if (isLoading) {
        return (
            <AdaptiveCard>
                <Container>
                    <div className="py-10 text-center text-gray-500">
                        Sayfa yukleniyor...
                    </div>
                </Container>
            </AdaptiveCard>
        )
    }

    if (isError) {
        return (
            <AdaptiveCard>
                <Container>
                    <div className="py-10 text-center text-red-500">
                        Sayfa yuklenemedi.
                    </div>
                </Container>
            </AdaptiveCard>
        )
    }

    return (
        <AdaptiveCard>
            <Container>
                <h4 className="mb-4">Sayfa Düzenle</h4>
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
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            HTML Çıktısı (doğrudan düzenlenebilir)
                                        </span>
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="default"
                                            onClick={() => {
                                                const formatted = formatHtml(
                                                    formattedContent,
                                                )
                                                setFormattedContent(formatted)
                                                setContent(formatted)
                                                field.onChange(formatted)
                                            }}
                                        >
                                            HTML Formatla
                                        </Button>
                                    </div>

                                    <Input
                                        textArea
                                        rows={110}
                                        value={formattedContent}
                                        className="min-h-[1400px] font-mono text-xs leading-6"
                                        onChange={(e) => {
                                            const value = e.target.value
                                            setFormattedContent(value)
                                            setContent(value)
                                            field.onChange(value)
                                        }}
                                    />
                                </div>
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

export default PageEdit
