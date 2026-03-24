import UploadMedia from '@/assets/svg/UploadMedia'
import { AdaptiveCard, Container } from '@/components/shared'
import { Radio } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification'
import Select from '@/components/ui/Select'
import toast from '@/components/ui/toast'
import Upload from '@/components/ui/Upload'
import {
    DocumentNode,
    DocumentSubNode,
    MainAttributeEnum,
} from '@/openApiServices'
import { attributeValuesApi, fileApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo, useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const validationSchema = z.object({
    MainAttributeId: z.number().nullable(),
    KunnCustomerPairedValue: z.string().optional(),
    FileName: z.string().optional(),
    NodeId: z.number().nullable(),
    SubNodeId: z.number().nullable(),
    File: z.instanceof(File).optional(),
})

type UploadFormSchema = z.infer<typeof validationSchema>

const FileUpload = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { watch } = useForm()

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [kunnValueOptions, setKunnValueOptions] = useState<
        { value: string; label: string }[]
    >([])
    const [nodeData, setNodeData] = useState<
        { id: number; attributeId: number; name: string }[]
    >([])
    const [subNodeData, setSubNodeData] = useState<
        { id: number; nodeId: number; name: string }[]
    >([])

    const { handleSubmit, control, reset, setValue } =
        useForm<UploadFormSchema>({
            resolver: zodResolver(validationSchema),
            defaultValues: {
                MainAttributeId: null,
                KunnCustomerPairedValue: '',
                FileName: '',
                NodeId: null,
                SubNodeId: null,
                File: undefined,
            },
        })

    const watched = useWatch({ control })
    const selectedNodeId = useWatch({ control, name: 'NodeId' })

    const isFormFilled =
        !!watched.MainAttributeId &&
        !!watched.KunnCustomerPairedValue &&
        !!watched.FileName &&
        !!watched.NodeId &&
        !!watched.SubNodeId &&
        !!watched.File
    const isFormFilledId =
        !!watched.MainAttributeId &&
        // !!watched.KunnCustomerPairedValue &&
        !!watched.FileName &&
        !!watched.NodeId &&
        !!watched.SubNodeId &&
        !!watched.File

    // 🟦 Ana Attribute listesini çek
    const { data: mainAttributes, isLoading: mainLoading } = useQuery(
        ['mainAttributeList'],
        async () => {
            const res =
                await attributeValuesApi.apiAttributeValuesGetMainAttributeValuesListGet()
            return (
                res.data?.map((item: any) => ({
                    value: item.id,
                    label: item.attributePossibleValue, // ✅ doğru alan
                })) || []
            )
        },
    )

    // 🟩 Seçilen MainAttribute’a göre Node/SubNode getir
    // 🟩 Seçilen MainAttribute’a göre Node/SubNode getir
    const { mutate: fetchSubAttributes, isLoading: subAttrLoading } =
        useMutation(
            async (attributeValueId: number) => {
                const res =
                    await attributeValuesApi.apiAttributeValuesGetAttributeValueSubAttributesPost(
                        {
                            attributeValueId,
                        },
                    )
                return res.data
            },
            {
                onSuccess: (data) => {
                    if (!data) return

                    const nodes =
                        data.mapping?.map((n: any) => ({
                            id: n.id,
                            attributeId: data.id || -1,
                            name: n.attributePossibleValue,
                        })) || []

                    setNodeData(nodes)
                    setSubNodeData([]) // yeni seçimde önce subNode'ları sıfırla
                },
                onError: (error: { detail: string }) => {
                    toast.push(
                        <Notification type="danger" duration={2500}>
                            {error?.detail && t('common.danger')}
                        </Notification>,
                    )
                },
            },
        )

    // 🟦 Seçilen Node’a göre SubNode getir
    const { mutate: fetchSubNodes, isLoading: subNodeLoading } = useMutation(
        async (nodeId: number) => {
            const res =
                await attributeValuesApi.apiAttributeValuesGetAttributeValueSubAttributesPost(
                    {
                        attributeValueId: nodeId,
                    },
                )
            return res.data
        },
        {
            onSuccess: (data) => {
                const subNodes =
                    data.mapping?.map((s: any) => ({
                        id: s.id,
                        nodeId: data.id || -1,
                        name: s.attributePossibleValue,
                    })) || []
                setSubNodeData(subNodes)
            },
            onError: (error: { detail: string }) => {
                toast.push(
                    <Notification type="danger" duration={2500}>
                        {error?.detail && t('common.danger')}
                    </Notification>,
                )
            },
        },
    )

    // MainAttribute değiştiğinde node'ları getir
    // MainAttribute değiştiğinde node'ları getir ve alt verileri sıfırla
    useEffect(() => {
        if (watched.MainAttributeId) {
            // 🔄 Önce formdaki alt alanları sıfırla
            setValue('KunnCustomerPairedValue', '')
            setValue('NodeId', null)
            setValue('SubNodeId', null)
            setNodeData([])
            setSubNodeData([])

            // 🔄 Sonra API çağrılarını yap
            fetchSubAttributes(watched.MainAttributeId)
            kunnValueMutation.mutate(watched.MainAttributeId)
        } else {
            // 🔄 Ana özellik temizlenince her şeyi sıfırla
            setKunnValueOptions([])
            setValue('KunnCustomerPairedValue', '')
            setValue('NodeId', null)
            setValue('SubNodeId', null)
            setNodeData([])
            setSubNodeData([])
        }
    }, [watched.MainAttributeId])

    // Node değiştiğinde subNode'ları getir
    useEffect(() => {
        if (watched.NodeId) {
            // ✅ Önce alt seçimi sıfırla
            setValue('SubNodeId', null)
            setSubNodeData([])

            // ✅ Yeni subNode'ları getir
            fetchSubNodes(watched.NodeId)
        } else {
            // ✅ Node tamamen silindiyse subNode listesini de temizle
            setSubNodeData([])
            setValue('SubNodeId', null)
        }
    }, [watched.NodeId])

    // 🟧 Node ve SubNode seçenekleri
    const nodeOptions = nodeData.map((n) => ({
        value: n.id,
        label: n.name,
    }))

    const filteredSubNodes = useMemo(
        () =>
            subNodeData
                .filter((sn) => sn.nodeId === selectedNodeId)
                .map((sn) => ({ value: sn.id, label: sn.name })),
        [selectedNodeId, subNodeData],
    )

    // 🧾 Dosya seçimi
    const handleFilesChange = (files: File[]) => {
        setUploadedFiles(files)
        if (files.length > 0) {
            setValue('File', files[0])
        }
    }

    // 🟪 KunnValue’ları getir
    const kunnValueMutation = useMutation(async (kunnType: number) => {
        const res =
            await attributeValuesApi.apiAttributeValuesGetKunnValuesPost({
                kunnType,
            })
        let kunnValues: string[] = []
        if (Array.isArray(res.data)) {
            kunnValues = res.data[0]?.kunnValues ?? []
        } else if (
            res.data &&
            typeof res.data === 'object' &&
            'kunnValues' in res.data
        ) {
            kunnValues =
                (res.data as { kunnValues?: string[] }).kunnValues ?? []
        }
        const unique = Array.from(new Set((kunnValues || []).filter(Boolean)))
        setKunnValueOptions(unique.map((v) => ({ value: v, label: v })))
    })

    useEffect(() => {
        if (watched.MainAttributeId) {
            kunnValueMutation.mutate(watched.MainAttributeId)
        } else {
            setKunnValueOptions([])
        }
    }, [watched.MainAttributeId])
    useEffect(() => {
        if (watched.MainAttributeId) {
            kunnValueMutation.mutate(watched.MainAttributeId)
            // ✅ Eski değerleri sıfırla
            setValue('KunnCustomerPairedValue', '')
            setValue('NodeId', null)
            setValue('SubNodeId', null)
        } else {
            setKunnValueOptions([])
            setValue('KunnCustomerPairedValue', '')
            setValue('NodeId', null)
            setValue('SubNodeId', null)
        }
    }, [watched.MainAttributeId])

    // 🟨 Upload işlemi
    const uploadMutation = useMutation({
        mutationFn: async (values: UploadFormSchema) => {
            if (!values.File) throw new Error('File is required')

            return fileApi.apiFileUploadFilePost(
                values.MainAttributeId as MainAttributeEnum | undefined,
                values.KunnCustomerPairedValue ?? undefined,
                values.FileName ?? values.File.name,
                values.NodeId ? (values.NodeId as DocumentNode) : undefined,
                values.SubNodeId
                    ? (values.SubNodeId as DocumentSubNode)
                    : undefined,
                values.File,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                },
            )
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
            reset()
            setUploadedFiles([])
            navigate('/concepts/tree')
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('common.danger')}
                </Notification>,
            )
        },
    })

    // 🧩 Submit
    const onSubmit = (values: UploadFormSchema) => {
        uploadMutation.mutate(values)
    }

    return (
        <Container>
            <AdaptiveCard>
                <h4 className="mb-4">{t('common.new_file_upload')}</h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* MAIN ATTRIBUTE */}
                    <FormItem
                        label={`${t('nav.conceptsFileUploads.main_attribute')} *`}
                    >
                        <Controller
                            name="MainAttributeId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    options={mainAttributes || []}
                                    isLoading={mainLoading}
                                    value={mainAttributes?.find(
                                        (opt) => opt.value === field.value,
                                    )}
                                    onChange={(opt) =>
                                        field.onChange(opt?.value ?? null)
                                    }
                                />
                            )}
                        />
                    </FormItem>

                    {watched.MainAttributeId !== 3 &&
                        watched.MainAttributeId !== 4 && (
                            <FormItem
                                label={`${t('nav.conceptsFileUploads.kunn_value')} *`}
                            >
                                <Controller
                                    name="KunnCustomerPairedValue"
                                    control={control}
                                    render={({ field }) => {
                                        const hasOptions =
                                            kunnValueOptions.length > 0 &&
                                            kunnValueOptions.some(
                                                (opt) => opt.value && opt.label,
                                            )

                                        const [isAddingNew, setIsAddingNew] =
                                            useState(false)

                                        // 🔹 Eğer “Yeni Ekle” aktifse masklı input göster
                                        if (isAddingNew || !hasOptions) {
                                            return (
                                                <div className="flex gap-2 items-start">
                                                    <div className="flex-1">
                                                        <Input
                                                            placeholder="0012551 - Test Customer"
                                                            value={
                                                                field.value ??
                                                                ''
                                                            }
                                                            onChange={(
                                                                e: React.ChangeEvent<HTMLInputElement>,
                                                            ) => {
                                                                const native =
                                                                    e.nativeEvent as InputEvent
                                                                const inputChar =
                                                                    native?.data ??
                                                                    ''
                                                                let value =
                                                                    e.target
                                                                        .value ??
                                                                    ''

                                                                // Normalize spaces
                                                                value =
                                                                    value.replace(
                                                                        /\s+/g,
                                                                        ' ',
                                                                    )

                                                                // Normalize dash spacing but keep it simple for splitting
                                                                value =
                                                                    value.replace(
                                                                        /\s*-\s*/g,
                                                                        ' - ',
                                                                    )

                                                                const [
                                                                    rawLeft = '',
                                                                    rawRight = '',
                                                                ] =
                                                                    value.split(
                                                                        ' - ',
                                                                    )
                                                                // left: only digits, max 10
                                                                let left = (
                                                                    rawLeft ||
                                                                    ''
                                                                )
                                                                    .replace(
                                                                        /[^0-9]/g,
                                                                        '',
                                                                    )
                                                                    .slice(
                                                                        0,
                                                                        10,
                                                                    )
                                                                // right: allow letters, numbers, Turkish chars and spaces
                                                                let right = (
                                                                    rawRight ||
                                                                    ''
                                                                ).replace(
                                                                    /[^a-zA-Z0-9ğüşöçıİĞÜŞÖÇ\s]/g,
                                                                    '',
                                                                )

                                                                // EN ÖNEMLİ KURAL: Başlangıçta mutlaka sayı ile başlamalı.
                                                                // Eğer sol (left) hâlâ boşsa ve kullanıcı harf / boşluk gibi bir şey girmişse -> yok say.
                                                                if (
                                                                    left.length ===
                                                                        0 &&
                                                                    inputChar &&
                                                                    /[a-zA-ZğüşöçıİĞÜŞÖÇ\s-]/.test(
                                                                        inputChar,
                                                                    )
                                                                ) {
                                                                    // Sadece sol boşken harf/space/dash girişlerini kabul etmiyoruz.
                                                                    // Alanı tamamen temiz tut.
                                                                    field.onChange(
                                                                        '',
                                                                    )
                                                                    return
                                                                }

                                                                // Eğer kullanıcı space veya '-' bastıysa ve sol'da en az 1 rakam varsa => otomatik " - "
                                                                if (
                                                                    inputChar &&
                                                                    (inputChar ===
                                                                        ' ' ||
                                                                        inputChar ===
                                                                            '-') &&
                                                                    !value.includes(
                                                                        ' - ',
                                                                    ) &&
                                                                    left.length >
                                                                        0
                                                                ) {
                                                                    field.onChange(
                                                                        `${left} - `,
                                                                    )
                                                                    return
                                                                }

                                                                // Eğer kullanıcı doğrudan isim yazmaya başladıysa (ve sol taraf doluysa),
                                                                // yazılan kısmı sağa taşı
                                                                if (
                                                                    inputChar &&
                                                                    /[a-zA-ZğüşöçıİĞÜŞÖÇ]/.test(
                                                                        inputChar,
                                                                    ) &&
                                                                    !value.includes(
                                                                        ' - ',
                                                                    ) &&
                                                                    left.length >
                                                                        0
                                                                ) {
                                                                    // splitIndex = mevcut left'in uzunluğu (sadece rakam count)
                                                                    const splitIndex =
                                                                        rawLeft.length // rawLeft içindeki orijinal index
                                                                    right =
                                                                        value
                                                                            .slice(
                                                                                splitIndex,
                                                                            )
                                                                            .trimStart()
                                                                            .replace(
                                                                                /[^a-zA-Z0-9ğüşöçıİĞÜŞÖÇ\s]/g,
                                                                                '',
                                                                            )
                                                                }

                                                                // Eğer sol taraf boşsa (örneğin tüm girişler temizlenmişse) -> empty
                                                                if (
                                                                    left.length ===
                                                                    0
                                                                ) {
                                                                    field.onChange(
                                                                        '',
                                                                    )
                                                                    return
                                                                }

                                                                // Final format
                                                                if (
                                                                    right.length >
                                                                    0
                                                                ) {
                                                                    value = `${left} - ${right}`
                                                                } else {
                                                                    value = left
                                                                }

                                                                field.onChange(
                                                                    value,
                                                                )
                                                            }}
                                                            disabled={
                                                                !watched.MainAttributeId
                                                            }
                                                            maxLength={100}
                                                        />
                                                    </div>
                                                    {hasOptions && (
                                                        <>
                                                            <Button
                                                                type="button"
                                                                variant="solid"
                                                                onClick={() => {
                                                                    field.onChange(
                                                                        '',
                                                                    )
                                                                    setIsAddingNew(
                                                                        false,
                                                                    )
                                                                }}
                                                            >
                                                                {t(
                                                                    'common.cancel',
                                                                )}
                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                variant="solid"
                                                                onClick={() => {
                                                                    if (
                                                                        field.value
                                                                    ) {
                                                                        const newOption =
                                                                            {
                                                                                value: field.value,
                                                                                label: field.value,
                                                                            }
                                                                        setKunnValueOptions(
                                                                            (
                                                                                prev,
                                                                            ) => [
                                                                                ...prev,
                                                                                newOption,
                                                                            ],
                                                                        )
                                                                        setIsAddingNew(
                                                                            false,
                                                                        )
                                                                    }
                                                                }}
                                                            >
                                                                {t(
                                                                    'common.add',
                                                                )}
                                                            </Button>
                                                        </>
                                                    )}
                                                </div>
                                            )
                                        }

                                        // 🔹 Normal Select görünümü
                                        return (
                                            <div className="flex gap-2 items-center">
                                                <div className="flex-1">
                                                    <Select
                                                        placeholder={t(
                                                            'nav.conceptsFileUploads.kunn_value',
                                                        )}
                                                        options={
                                                            kunnValueOptions
                                                        }
                                                        value={
                                                            field.value
                                                                ? {
                                                                      value: field.value,
                                                                      label: field.value,
                                                                  }
                                                                : null
                                                        }
                                                        onChange={(opt) =>
                                                            field.onChange(
                                                                opt?.value ??
                                                                    '',
                                                            )
                                                        }
                                                        isLoading={
                                                            kunnValueMutation.isLoading
                                                        }
                                                        isClearable
                                                        isDisabled={
                                                            kunnValueMutation.isLoading ||
                                                            !watched.MainAttributeId
                                                        }
                                                        noOptionsMessage={() =>
                                                            kunnValueMutation.isError
                                                                ? 'KunnValue yüklenemedi'
                                                                : t(
                                                                      'common.no_options',
                                                                  )
                                                        }
                                                    />
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="solid"
                                                    onClick={() => {
                                                        field.onChange('')
                                                        setIsAddingNew(true)
                                                    }}
                                                >
                                                    + {t('common.add_new')}
                                                </Button>
                                            </div>
                                        )
                                    }}
                                />
                            </FormItem>
                        )}

                    {/* NODE */}
                    <FormItem label={`${t('nav.conceptsFileUploads.node')} *`}>
                        <Controller
                            name="NodeId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    options={nodeOptions}
                                    isLoading={subAttrLoading}
                                    value={
                                        nodeOptions.find(
                                            (opt) => opt.value === field.value,
                                        ) || null
                                    }
                                    onChange={(opt) =>
                                        field.onChange(opt?.value ?? null)
                                    }
                                    isDisabled={
                                        !watched.MainAttributeId || // 🔹 Ana özellik seçilmediyse kapalı
                                        subAttrLoading // 🔹 veya veri yükleniyorsa kapalı
                                    }
                                    placeholder={
                                        !watched.MainAttributeId
                                            ? t(
                                                  'common.select_main_attribute_first',
                                              ) // 🔹 isteğe bağlı: kullanıcıya bilgi
                                            : t('nav.conceptsFileUploads.node')
                                    }
                                />
                            )}
                        />
                    </FormItem>
                    {/* SUBNODE */}

                    <FormItem
                        label={`${t('nav.conceptsFileUploads.sub_node')} *`}
                    >
                        <Controller
                            name="SubNodeId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    placeholder={t(
                                        'nav.conceptsFileUploads.sub_node_select',
                                    )}
                                    options={filteredSubNodes}
                                    value={
                                        filteredSubNodes.find(
                                            (opt) => opt.value === field.value,
                                        ) || null
                                    }
                                    onChange={(opt) =>
                                        field.onChange(opt?.value ?? null)
                                    }
                                    isDisabled={!selectedNodeId}
                                />
                            )}
                        />
                    </FormItem>
                    {/* FILE NAME */}
                    {watched.MainAttributeId === 2 && watched.NodeId === 10 && (
                        <div className="mb-2 mt-7">
                            <Radio.Group
                                onChange={(val) => {
                                    const prefix = val ? `${val}-` : ''
                                    const currentName = watch('FileName') || ''

                                    // Eğer zaten aynı prefix ile başlıyorsa tekrar ekleme:
                                    const cleaned = currentName.replace(
                                        /^(Dorse-|Çekici-|Sürücü-)/,
                                        '',
                                    )

                                    setValue('FileName', prefix + cleaned)
                                }}
                            >
                                <Radio value="Dorse">
                                    {t('common.trailer')}
                                </Radio>
                                <Radio value="Çekici">
                                    {t('common.truck')}
                                </Radio>
                                <Radio value="Sürücü">
                                    {t('common.driver')}
                                </Radio>
                                <Radio value="">
                                    {t('common.resetFilter')}
                                </Radio>
                            </Radio.Group>
                        </div>
                    )}
                    <FormItem label={`${t('upload.fileName')} *`}>
                        <Controller
                            name="FileName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder={t('upload.fileName')}
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                    {/* FILE UPLOAD */}

                    <FormItem
                        label={`${t('nav.conceptsFileUploads.select_file')} *`}
                    >
                        <Upload
                            draggable
                            className="mt-2 bg-gray-100 dark:bg-transparent"
                            onChange={handleFilesChange}
                            onFileRemove={handleFilesChange}
                        >
                            <div className="my-4 text-center">
                                <div className="text-6xl mb-4 flex justify-center">
                                    <UploadMedia height={150} width={200} />
                                </div>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    Dosyayı sürükleyin veya yükleyin
                                </p>
                                <p className="mt-1 font-semibold opacity-60 dark:text-white">
                                    Bilgisayarınızdan seçebilirsiniz
                                </p>
                            </div>
                        </Upload>
                    </FormItem>
                    <div className="mt-4">
                        <Button
                            block
                            loading={uploadMutation.isLoading}
                            variant="solid"
                            disabled={
                                watched.MainAttributeId !== 3 &&
                                watched.MainAttributeId !== 4
                                    ? !isFormFilled || uploadMutation.isLoading
                                    : !isFormFilledId
                            }
                            type="submit"
                        >
                            {t('upload.uploadButton')}
                        </Button>
                    </div>
                </Form>
            </AdaptiveCard>
        </Container>
    )
}

export default FileUpload
