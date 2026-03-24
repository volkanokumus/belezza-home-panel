import { AdaptiveCard } from '@/components/shared'
import { Select } from '@/components/ui'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import Notification from '@/components/ui/Notification/Notification'
import toast from '@/components/ui/toast'
import type { CreateUserRequestDto } from '@/openApiServices/api'
import { userApi } from '@/utils/factories'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

const UserEdit = () => {
    const { id } = useParams()
    const { t } = useTranslation()
    // const navigate = useNavigate()
    // Sadece id ile user detayını çek
    const {
        data: userData,
        isLoading,
        refetch,
    } = useQuery(['user', id], async () => {
        const response = await userApi.apiUserGetUserPost({ id })
        return response.data
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)
    // const [showPassword, setShowPassword] = React.useState(false)

    const roleData = [
        { id: 1, roleName: 'SuperAdmin' },
        // { id: 2, attributeName: 'User' },
        // { id: 3, attributeName: 'Manager' },
    ]
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateUserRequestDto>({
        defaultValues: {
            id: id || '',
            companyId: 0,
            departmentId: 0,
            firstName: '',
            lastName: '',
            eMail: '',
            password: '',
            phoneNumber: '',
            defaultLanguage: '',
            photoFile: '',
            applicationRole: '',
        },
    })

    // userData geldiğinde formu doldur
    React.useEffect(() => {
        if (userData) {
            reset(userData)
        }
    }, [userData, reset])

    const onSubmit = async (values: CreateUserRequestDto) => {
        setIsSubmitting(true)
        try {
            await userApi.apiUserUpdateUserPost(values)
            await refetch()
            reset(values)
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
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

    return (
        <AdaptiveCard>
            {isLoading ? (
                <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : (
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
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Email"
                                        value={field.value ?? ''}
                                    />
                                )}
                            />
                        </FormItem>
                        {/* <FormItem
                            label="Company ID"
                            invalid={!!errors.companyId}
                            errorMessage={errors.companyId?.message}
                        >
                            <Controller
                                name="companyId"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Company ID"
                                        type="number"
                                        value={field.value ?? ''}
                                    />
                                )}
                            />
                        </FormItem> */}
                        {/* <FormItem
                            label="Department ID"
                            invalid={!!errors.departmentId}
                            errorMessage={errors.departmentId?.message}
                        >
                            <Controller
                                name="departmentId"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Department ID"
                                        type="number"
                                        value={field.value ?? ''}
                                    />
                                )}
                            />
                        </FormItem> */}
                        {/* <FormItem
                            label="Password"
                            invalid={!!errors.password}
                            errorMessage={errors.password?.message}
                        >
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            placeholder="Password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            value={field.value ?? ''}
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
                        </FormItem> */}
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
                                        getOptionLabel={(opt) =>
                                            opt.roleName || ''
                                        }
                                        getOptionValue={(opt) =>
                                            opt.roleName || ''
                                        }
                                        placeholder={t('nav.conceptsUser.role')}
                                        value={
                                            roleData?.find(
                                                (opt) =>
                                                    opt.roleName ===
                                                    field.value,
                                            ) || null
                                        }
                                        onChange={(option) =>
                                            field.onChange(
                                                option?.roleName || '',
                                            )
                                        }
                                    />
                                )}
                            />
                        </FormItem>
                    </div>
                    <div className="flex justify-end mt-8">
                        <Button
                            variant="solid"
                            type="submit"
                            size="lg"
                            loading={isSubmitting}
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? `${t('common.updating')}`
                                : `${t('common.update')}`}
                        </Button>
                    </div>
                </Form>
            )}
        </AdaptiveCard>
    )
}

export default UserEdit
