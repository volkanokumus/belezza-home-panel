import type { Routes } from '@/@types/routes'
import { lazy } from 'react'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: `/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/sign-up`,
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    // {
    //     key: 'forgotPassword',
    //     path: `/forgot-password`,
    //     component: lazy(() => import('@/views/auth/ForgotPassword')),
    //     authority: [],
    // },
    {
        key: 'resetPassword',
        path: `/reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
    {
        key: 'otpVerification',
        path: `/otp-verification`,
        component: lazy(() => import('@/views/auth/OtpVerification')),
        authority: [],
    },
    {
        key: 'azureCallback',
        path: '/auth/azure-callback',
        component: lazy(
            () => import('@/views/auth/SignIn/components/AzureCallback'),
        ),
        authority: [],
    },
]

export default authRoute
