import type {
    AuthResult,
    OauthSignInCallbackPayload,
    SignInCredential,
    SignUpCredential,
    Token,
    User,
} from '@/@types/auth'
import { Notification, toast } from '@/components/ui'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { apiLogout, apiSignIn, apiSignUp } from '@/services/AuthService'
import { useSessionUser, useToken } from '@/store/authStore'
import axiosInstance from '@/utils/axios'
import type { ReactNode, Ref } from 'react'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import type { NavigateFunction } from 'react-router'
import { useNavigate } from 'react-router'
import AuthContext from './AuthContext'

type AuthProviderProps = { children: ReactNode }

export type IsolatedNavigatorRef = {
    navigate: NavigateFunction
}

const IsolatedNavigator = ({ ref }: { ref: Ref<IsolatedNavigatorRef> }) => {
    const navigate = useNavigate()

    useImperativeHandle(ref, () => {
        return {
            navigate,
        }
    }, [navigate])

    return <></>
}

function AuthProvider({ children }: AuthProviderProps) {
    const signedIn = useSessionUser((state) => state.session.signedIn)
    const user = useSessionUser((state) => state.user)
    const setUser = useSessionUser((state) => state.setUser)
    const setSessionSignedIn = useSessionUser(
        (state) => state.setSessionSignedIn,
    )
    const { token, setToken } = useToken()
    const [tokenState, setTokenState] = useState(token)

    useEffect(() => {
        if (tokenState) {
            axiosInstance.defaults.headers.Authorization = `Bearer ${tokenState}`
        } else {
            delete axiosInstance.defaults.headers.Authorization
        }
    }, [tokenState])
    // const authenticated = Boolean(tokenState && signedIn)

    const navigatorRef = useRef<IsolatedNavigatorRef>(null)
    const IDLE_TIMEOUT = 30 * 60 * 1000 // 30 dakika
    const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const resetIdleTimer = () => {
        if (idleTimerRef.current) {
            clearTimeout(idleTimerRef.current)
        }
        if (tokenState && signedIn) {
            idleTimerRef.current = setTimeout(async () => {
                await signOut()
                navigatorRef.current?.navigate('/')
                toast.push(
                    <Notification type="danger" duration={2500}>
                        Uzun süre işlem yapılmadığı için oturumunuz
                        sonlandırılmıştır.
                    </Notification>,
                )
            }, IDLE_TIMEOUT)
        }
    }
    useEffect(() => {
        // Aktivite olaylarını dinle
        const events = ['mousemove', 'keydown', 'click', 'scroll']
        events.forEach((event) =>
            window.addEventListener(event, resetIdleTimer),
        )

        // İlk yüklemede timer başlat
        resetIdleTimer()

        return () => {
            events.forEach((event) =>
                window.removeEventListener(event, resetIdleTimer),
            )
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
        }
    }, [tokenState, signedIn])

    useEffect(() => {
        if (tokenState) {
            axiosInstance.defaults.headers.Authorization = `Bearer ${tokenState}`
        } else {
            delete axiosInstance.defaults.headers.Authorization
        }
    }, [tokenState])

    const authenticated = Boolean(tokenState && signedIn)

    const redirect = () => {
        const search = window.location.search
        const params = new URLSearchParams(search)
        const redirectUrl = params.get(REDIRECT_URL_KEY)

        navigatorRef.current?.navigate(
            redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath,
        )
    }

    const handleSignIn = (tokens: Token, user?: User) => {
        setToken(tokens.accessToken)
        setTokenState(tokens.accessToken)
        setSessionSignedIn(true)

        if (user) {
            setUser(user)
        }
    }

    const handleSignOut = () => {
        setToken('')
        setUser({})
        setSessionSignedIn(false)

        if (typeof window !== 'undefined') {
            localStorage.removeItem('sessionUser')
        }
    }

    const signIn = async (values: SignInCredential): AuthResult => {
        try {
            const resp = await apiSignIn(values)
            if (resp) {
                const userInfo: User = {
                    userId: resp.id,
                    userName: resp.fullName,
                    email: values.eMail,
                    authority: resp.applicationRoles,
                    avatar: resp.photoUrl,
                    id: resp.id,
                    firstName: resp.firstName,
                    lastName: resp.lastName,
                    fullName: resp.fullName,
                    title: resp.title,
                    photoUrl: resp.photoUrl,
                    phone: resp.phone,
                    defaultLanguage: resp.defaultLanguage,
                    applicationRoles: resp.applicationRoles,
                    isSuper: resp.isSuper,
                    isCompany: resp.isCompany,
                    isCompanyUser: resp.isCompanyUser,
                }
                handleSignIn(
                    {
                        accessToken: resp.token,
                        refreshToken: resp.refreshToken,
                    },
                    userInfo,
                )
                redirect()
                return {
                    status: 'success',
                    message: '',
                }
            }
            return {
                status: 'failed',
                message: 'Unable to sign in',
            }
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const signUp = async (values: SignUpCredential): AuthResult => {
        try {
            const resp = await apiSignUp(values)
            if (resp) {
                const userInfo: User = {
                    userId: resp.id,
                    userName: resp.fullName,
                    email: values.email,
                    authority: resp.applicationRoles,
                    avatar: resp.photoUrl,
                    id: resp.id,
                    firstName: resp.firstName,
                    lastName: resp.lastName,
                    fullName: resp.fullName,
                    title: resp.title,
                    photoUrl: resp.photoUrl,
                    phone: resp.phone,
                    defaultLanguage: resp.defaultLanguage,
                    applicationRoles: resp.applicationRoles,
                    isSuper: resp.isSuper,
                    isCompany: resp.isCompany,
                    isCompanyUser: resp.isCompanyUser,
                }
                handleSignIn(
                    {
                        accessToken: resp.token,
                        refreshToken: resp.refreshToken,
                    },
                    userInfo,
                )
                redirect()
                return {
                    status: 'success',
                    message: '',
                }
            }
            return {
                status: 'failed',
                message: 'Unable to sign up',
            }
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const signOut = async () => {
        try {
            await apiLogout() // Backend'e logout isteği gönderiyoruz
        } catch (error) {
            console.error('Logout API failed:', error)
        } finally {
            // Her koşulda local logout
            handleSignOut()
            navigatorRef.current?.navigate('/')
        }
    }
    const oAuthSignIn = (
        callback: (payload: OauthSignInCallbackPayload) => void,
    ) => {
        callback({
            onSignIn: handleSignIn,
            redirect,
        })
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                user,
                signIn,
                signUp,
                signOut,
                oAuthSignIn,
            }}
        >
            {children}
            <IsolatedNavigator ref={navigatorRef} />
        </AuthContext.Provider>
    )
}

export default AuthProvider
