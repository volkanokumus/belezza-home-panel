import type { CommonProps } from '@/@types/common'
import { useAuth } from '@/auth'
import PasswordInput from '@/components/shared/PasswordInput'
import Button from '@/components/ui/Button'
import { Form, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { useLoginMutation } from '@/services/useLoginMutation'
import { useSessionUser, useToken } from '@/store/authStore'
import classNames from '@/utils/classNames'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { mutate } from 'swr'
import { z } from 'zod'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
    passwordHint?: string | ReactNode
    setMessage?: (message: string) => void
}

type SignInFormSchema = {
    username: string
    password: string
}

const validationSchema = z.object({
    username: z.string().min(1, { message: 'signIn.validation.emailRequired' }),
    password: z
        .string()
        .min(1, { message: 'signIn.validation.passwordRequired' }),
})

const SignInForm = (props: SignInFormProps) => {
    const [isSubmitting, setSubmitting] = useState<boolean>(false)
    const { t } = useTranslation()

    const { disableSubmit = false, className, setMessage, passwordHint } = props

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<SignInFormSchema>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: zodResolver(validationSchema),
    })

    const loginMutation = useLoginMutation()
    const { setToken } = useToken()
    const setSessionSignedIn = useSessionUser(
        (state) => state.setSessionSignedIn,
    )
    const navigate = window.location
    const { oAuthSignIn } = useAuth()

    const onSignIn = async (values: SignInFormSchema) => {
        const { username, password } = values
        if (!disableSubmit) {
            setSubmitting(true)
            loginMutation.mutate(
                { username, password },
                {
                    onError: (error: unknown) => {
                        if (error instanceof Error) {
                            setMessage?.(error.message || 'Giriş başarısız')
                        } else {
                            setMessage?.('Giriş başarısız')
                        }
                        setSubmitting(false)
                    },
                    onSuccess: (response: any) => {
                        const token = response?.data?.token || response?.token
                        const user = response?.data || response?.user

                        if (token) {
                            setToken(token)
                            setSessionSignedIn(true)
                        }
                        if (user) {
                            // Map API user response to full User type
                            const mappedUser = {
                                userId: user.id ?? null,
                                avatar: user.photoUrl ?? '',
                                userName: user.fullName ?? '',
                                email: values.username,
                                authority: user.applicationRoles ?? [],
                                id: user.id ?? null,
                                firstName: user.firstName ?? null,
                                lastName: user.lastName ?? null,
                                fullName: user.fullName ?? null,
                                title: user.title ?? null,
                                photoUrl: user.photoUrl ?? null,
                                phone: user.phone ?? null,
                                defaultLanguage: user.defaultLanguage ?? null,
                                applicationRoles: user.applicationRoles ?? [],
                                isSuper: user.isSuper ?? false,
                                isCompany: user.isCompany ?? false,
                                isCompanyUser: user.isCompanyUser ?? false,
                            }
                            useSessionUser.getState().setUser(mappedUser)
                        }
                        if (token) {
                            // window.location.replace(
                            //     appConfig.authenticatedEntryPath,
                            // )
                            // Profil verisini güncelle
                            mutate('active-user-info')
                            oAuthSignIn(({ onSignIn, redirect }) => {
                                onSignIn(
                                    { accessToken: token, refreshToken: '' },
                                    user,
                                )
                                redirect()
                            })
                        }
                        setSubmitting(false)
                    },
                },
            )
        }
    }

    return (
        <div className={className}>
            <Form onSubmit={handleSubmit(onSignIn)}>
                <FormItem
                    label={t('signIn.email')}
                    invalid={Boolean(errors.username)}
                    errorMessage={
                        errors.username?.message && t(errors.username.message)
                    }
                >
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                placeholder={t('signIn.emailPlaceholder')}
                                autoComplete="off"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label={t('signIn.password')}
                    invalid={Boolean(errors.password)}
                    errorMessage={
                        errors.password?.message && t(errors.password.message)
                    }
                    className={classNames(
                        passwordHint ? 'mb-0' : '',
                        errors.password?.message ? 'mb-8' : '',
                    )}
                >
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <PasswordInput
                                type="text"
                                placeholder={t('signIn.passwordPlaceholder')}
                                autoComplete="off"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                {passwordHint}
                <Button
                    block
                    loading={isSubmitting}
                    variant="solid"
                    type="submit"
                >
                    {isSubmitting ? t('signIn.signingIn') : t('signIn.signIn')}
                </Button>
            </Form>
        </div>
    )
}

export default SignInForm
