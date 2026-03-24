import type { UpdateUserPasswordDto } from '@/@types/user'
import { useAuth } from '@/auth'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification/Notification'
import toast from '@/components/ui/toast'
import { userApi } from '@/utils/factories'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { z } from 'zod'

type PasswordSchema = {
    currentPassword: string
    newPassword: string
    confirmNewPassword: string
}

const validationSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, { message: 'Please enter your current password!' }),
        newPassword: z
            .string()
            .min(1, { message: 'Please enter your new password!' }),
        confirmNewPassword: z
            .string()
            .min(1, { message: 'Please confirm your new password!' }),
    })
    .refine((data) => data.confirmNewPassword === data.newPassword, {
        message: 'Password not match',
        path: ['confirmNewPassword'],
    })

const SettingsSecurity = () => {
    const { user } = useAuth()
    const { t } = useTranslation()

    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showCurrent, setShowCurrent] = useState(false)
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const {
        getValues,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<PasswordSchema>({
        resolver: zodResolver(validationSchema),
    })

    const handlePostSubmit = async () => {
        setIsSubmitting(true)
        const values = getValues()
        // Frontend şifre eşleşme kontrolü zaten var (zod ile)
        // Confirm password kontrolü
        if (values.newPassword !== values.confirmNewPassword) {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('settingsSecurity.mismatch')}
                </Notification>,
            )
            setIsSubmitting(false)
            return
        }
        const payload: UpdateUserPasswordDto = {
            userId: String(user.id ?? ''),
            oldPassword: values.currentPassword,
            newPassword: values.newPassword,
        }
        try {
            await userApi.apiUserUpdateUserPasswordPost(payload)
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('settingsSecurity.success')}
                </Notification>,
            )
            setConfirmationOpen(false)
        } catch {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('settingsSecurity.error')}
                </Notification>,
            )
            setConfirmationOpen(false)
        } finally {
            setIsSubmitting(false)
        }
    }

    const onSubmit = async () => {
        setConfirmationOpen(true)
    }

    return (
        <div>
            <div className="mb-8">
                <h4>{t('settingsSecurity.title')}</h4>
                <p>{t('settingsSecurity.description')}</p>
            </div>
            <Form
                ref={formRef}
                className="mb-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormItem
                    label={t('settingsSecurity.currentPassword')}
                    invalid={Boolean(errors.currentPassword)}
                    errorMessage={errors.currentPassword?.message}
                >
                    <Controller
                        name="currentPassword"
                        control={control}
                        render={({ field }) => (
                            <div className="relative">
                                <Input
                                    type={showCurrent ? 'text' : 'password'}
                                    autoComplete="off"
                                    placeholder="•••••••••"
                                    {...field}
                                />
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400"
                                    onMouseDown={() => setShowCurrent(true)}
                                    onMouseUp={() => setShowCurrent(false)}
                                    onMouseLeave={() => setShowCurrent(false)}
                                >
                                    {showCurrent ? <HiEyeOff /> : <HiEye />}
                                </span>
                            </div>
                        )}
                    />
                </FormItem>
                <FormItem
                    label={t('settingsSecurity.newPassword')}
                    invalid={Boolean(errors.newPassword)}
                    errorMessage={errors.newPassword?.message}
                >
                    <Controller
                        name="newPassword"
                        control={control}
                        render={({ field }) => (
                            <div className="relative">
                                <Input
                                    type={showNew ? 'text' : 'password'}
                                    autoComplete="off"
                                    placeholder="•••••••••"
                                    {...field}
                                />
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400"
                                    onMouseDown={() => setShowNew(true)}
                                    onMouseUp={() => setShowNew(false)}
                                    onMouseLeave={() => setShowNew(false)}
                                >
                                    {showNew ? <HiEyeOff /> : <HiEye />}
                                </span>
                            </div>
                        )}
                    />
                </FormItem>
                <FormItem
                    label={t('settingsSecurity.confirmNewPassword')}
                    invalid={Boolean(errors.confirmNewPassword)}
                    errorMessage={errors.confirmNewPassword?.message}
                >
                    <Controller
                        name="confirmNewPassword"
                        control={control}
                        render={({ field }) => (
                            <div className="relative">
                                <Input
                                    type={showConfirm ? 'text' : 'password'}
                                    autoComplete="off"
                                    placeholder="•••••••••"
                                    {...field}
                                />
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400"
                                    onMouseDown={() => setShowConfirm(true)}
                                    onMouseUp={() => setShowConfirm(false)}
                                    onMouseLeave={() => setShowConfirm(false)}
                                >
                                    {showConfirm ? <HiEyeOff /> : <HiEye />}
                                </span>
                            </div>
                        )}
                    />
                </FormItem>
                <div className="flex justify-end">
                    <Button variant="solid" type="submit">
                        {t('settingsSecurity.update')}
                    </Button>
                </div>
            </Form>
            <ConfirmDialog
                isOpen={confirmationOpen}
                type="warning"
                title={t('settingsSecurity.updatePassword')}
                confirmButtonProps={{
                    loading: isSubmitting,
                    onClick: handlePostSubmit,
                }}
                className="flex items-center justify-center"
                onClose={() => setConfirmationOpen(false)}
                onRequestClose={() => setConfirmationOpen(false)}
                onCancel={() => setConfirmationOpen(false)}
            >
                <div className="text-center w-full">
                    <p>{t('settingsSecurity.confirmDialog')}</p>
                </div>
            </ConfirmDialog>
            {/* <div className="mb-8">
                <h4>2-Step verification</h4>
                <p>
                    Your account holds great value to hackers. Enable two-step
                    verification to safeguard your account!
                </p>
                <div className="mt-8">
                    {authenticatorList.map((authOption, index) => (
                        <div
                            key={authOption.value}
                            className={classNames(
                                'py-6 border-gray-200 dark:border-gray-600',
                                !isLastChild(authenticatorList, index) &&
                                    'border-b',
                            )}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        size={35}
                                        className="bg-transparent"
                                        src={authOption.img}
                                    />
                                    <div>
                                        <h6>{authOption.label}</h6>
                                        <span>{authOption.desc}</span>
                                    </div>
                                </div>
                                <div>
                                    {selected2FaType === authOption.value ? (
                                        <Button
                                            size="sm"
                                            customColorClass={() =>
                                                'border-success ring-1 ring-success text-success hover:border-success hover:ring-success hover:text-success bg-transparent'
                                            }
                                            onClick={() =>
                                                setSelected2FaType('')
                                            }
                                        >
                                            Activated
                                        </Button>
                                    ) : (
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                setSelected2FaType(
                                                    authOption.value,
                                                )
                                            }
                                        >
                                            Enable
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default SettingsSecurity
