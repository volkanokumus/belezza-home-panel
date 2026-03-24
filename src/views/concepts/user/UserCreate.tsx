import { AdaptiveCard } from '@/components/shared'
import { Notification, Select, toast } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import type { CreateUserRequestDto } from '@/openApiServices/api'
import { userApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { z } from 'zod'

const UserCreate = () => {
    const roleData = [
        { id: 1, roleName: 'SuperAdmin' },
        // { id: 2, attributeName: 'User' },
        // { id: 3, attributeName: 'Manager' },
    ]
    const { t } = useTranslation()
    // Şifreyi göster/gizle için state
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    // Zod şeması ile validasyon kuralları
    const schema = z.object({
        firstName: z.string().min(1, t('common.required')),
        lastName: z.string().min(1, t('common.required')),
        eMail: z
            .string()
            .min(1, t('common.required'))
            .email(t('common.emailNotValid')),
        password: z.string().min(6, t('common.passwordNotValid')),
        phoneNumber: z.string().optional(),
        defaultLanguage: z.string().optional(),
        photoFile: z.string().optional(),
        applicationRole: z.string().optional(),
        id: z.string().optional(),
        // companyId: z.string().optional(),
        // departmentId: z.string().optional(),
    })

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserRequestDto>({
        //@ts-ignore
        resolver: zodResolver(schema),
        defaultValues: {
            id: '',
            companyId: null,
            departmentId: null,
            firstName: '',
            lastName: '',
            eMail: '',
            password: '',
            phoneNumber: '',
            defaultLanguage: 'tr',
            photoFile: '',
            applicationRole: '',
        },
        mode: 'onChange',
    })

    const createUserMutation = useMutation({
        mutationFn: async (data: CreateUserRequestDto) => {
            await userApi.apiUserCreateUserPost(data)
        },
        // onSuccess: () => navigate('/concepts/user/user-list'),
        onSuccess: () => {
            ;(navigate('/concepts/user/user-list'),
                toast.push(
                    <Notification type="success" duration={2500}>
                        {t('common.success')}
                    </Notification>,
                ))
        },
        onError: (error: { detail: string }) => {
            toast.push(
                <Notification type="danger" duration={5000}>
                    {error?.detail}
                </Notification>,
            )
        },
    })

    const onSubmit = (values: CreateUserRequestDto) => {
        createUserMutation.mutate(values)
    }

    return (
        <AdaptiveCard>
            <div className="flex items-center gap-2 mb-4">
                <h3>{t('nav.conceptsUser.userCreate')}</h3>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormItem
                        label={t('nav.conceptsUser.firstName')}
                        invalid={!!errors.firstName}
                        errorMessage={errors.firstName?.message}
                    >
                        <Controller
                            name="firstName"
                            control={control}
                            // Zod ile validasyon
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="First Name"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label={t('nav.conceptsUser.lastName')}
                        invalid={!!errors.lastName}
                        errorMessage={errors.lastName?.message}
                    >
                        <Controller
                            name="lastName"
                            control={control}
                            // Zod ile validasyon
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Last Name"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label={t('nav.conceptsUser.email')}
                        invalid={!!errors.eMail}
                        errorMessage={errors.eMail?.message}
                    >
                        <Controller
                            name="eMail"
                            control={control}
                            // Zod ile validasyon
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Email"
                                    value={field.value ?? ''}
                                    autoComplete="off"
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label={t('nav.conceptsUser.password')}
                        invalid={!!errors.password}
                        errorMessage={errors.password?.message}
                    >
                        <Controller
                            name="password"
                            control={control}
                            // Zod ile validasyon
                            render={({ field }) => (
                                <div className="relative">
                                    <Input
                                        {...field}
                                        placeholder="Password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        value={field.value ?? ''}
                                        autoComplete="new-password"
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    >
                                        {showPassword ? (
                                            <HiEyeOff />
                                        ) : (
                                            <HiEye />
                                        )}
                                    </span>
                                </div>
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label={t('nav.conceptsUser.phone')}
                        invalid={!!errors.phoneNumber}
                        errorMessage={errors.phoneNumber?.message}
                    >
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => {
                                const formatPhone = (value: string) => {
                                    const digits = value
                                        .replace(/\D/g, '')
                                        .slice(0, 10)
                                    const part1 = digits.slice(0, 3)
                                    const part2 = digits.slice(3, 6)
                                    const part3 = digits.slice(6, 8)
                                    const part4 = digits.slice(8, 10)
                                    let masked = ''
                                    if (part1) masked += `(${part1}`
                                    if (part1 && part1.length === 3)
                                        masked += ') '
                                    if (part2) masked += part2
                                    if (part2 && part2.length === 3)
                                        masked += ' '
                                    if (part3) masked += part3
                                    if (part4) masked += ` ${part4}`
                                    return masked
                                }
                                return (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span
                                            className=""
                                            style={{
                                                marginRight: 8,
                                                fontWeight: 500,
                                                color: '#555',
                                            }}
                                        >
                                            +90
                                        </span>
                                        <Input
                                            {...field}
                                            style={{ flex: 1 }}
                                            placeholder="Phone Number"
                                            value={formatPhone(
                                                field.value ?? '',
                                            )}
                                            onChange={(e) => {
                                                const raw = e.target.value
                                                    .replace(/\D/g, '')
                                                    .slice(0, 10)
                                                field.onChange(raw)
                                            }}
                                        />
                                    </div>
                                )
                            }}
                        />
                    </FormItem>
                    {/* <FormItem
                        label="Default Language"
                        invalid={!!errors.defaultLanguage}
                        errorMessage={errors.defaultLanguage?.message}
                    >
                        <Controller
                            name="defaultLanguage"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Default Language"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem> */}
                    {/* <FormItem
                        label="Photo File"
                        invalid={!!errors.photoFile}
                        errorMessage={errors.photoFile?.message}
                    >
                        <Controller
                            name="photoFile"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        size={90}
                                        className="border-4 border-white bg-gray-100 text-gray-300 shadow-lg"
                                        icon={<HiEyeOff />}
                                        src={field.value ?? ''}
                                    />
                                    <div className="flex items-center gap-2">
                                        <Upload
                                            showList={false}
                                            uploadLimit={1}
                                            onChange={(files) => {
                                                if (files.length > 0) {
                                                    field.onChange(
                                                        URL.createObjectURL(
                                                            files[0],
                                                        ),
                                                    )
                                                }
                                            }}
                                        >
                                            <Button
                                                variant="solid"
                                                size="sm"
                                                type="button"
                                                icon={<TbPlus />}
                                            >
                                                Upload Image
                                            </Button>
                                        </Upload>
                                        <Button
                                            size="sm"
                                            type="button"
                                            onClick={() => {
                                                field.onChange('')
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            )}
                        />
                    </FormItem> */}
                    <FormItem
                        label={t('nav.conceptsUser.role')}
                        invalid={!!errors.applicationRole}
                        errorMessage={errors.applicationRole?.message}
                    >
                        <Controller
                            name="applicationRole"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    options={roleData || []}
                                    getOptionLabel={(opt) => opt.roleName || ''}
                                    getOptionValue={(opt) => String(opt.id)}
                                    placeholder={t('nav.conceptsUser.role')}
                                    value={
                                        roleData?.find(
                                            (attr) =>
                                                attr.roleName === field.value,
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        field.onChange(
                                            option ? option.roleName : '',
                                        )
                                    }
                                />
                            )}
                        />
                    </FormItem>
                </div>
                <div className="flex justify-end mt-8">
                    <Button variant="solid" type="submit" size="lg">
                        {t('nav.conceptsUser.userCreate')}
                    </Button>
                </div>
            </Form>
        </AdaptiveCard>
    )
}

export default UserCreate
