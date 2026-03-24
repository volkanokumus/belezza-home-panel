export type SignInCredential = {
    eMail: string
    password: string
}

export type SignInResponse = {
    id: string
    token: string
    refreshToken: string
    firstName: string
    lastName: string
    fullName: string
    title: string
    photoUrl: string
    phone: string
    defaultLanguage: string
    applicationRoles: string[]
    isSuper: boolean
    isCompany: boolean
    isCompanyUser: boolean
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
    userName: string
    email: string
    password: string
}

export type ForgotPassword = {
    email: string
}

export type ResetPassword = {
    password: string
}

export type AuthRequestStatus = 'success' | 'failed' | ''

export type AuthResult = Promise<{
    status: AuthRequestStatus
    message: string
}>

export type User = {
    userId?: string | null
    avatar?: string | null
    userName?: string | null
    email?: string | null
    authority?: string[]
    id?: string | null
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    title?: string | null
    photoUrl?: string | null
    phone?: string | null
    defaultLanguage?: string | null
    applicationRoles?: string[]
    isSuper?: boolean
    isCompany?: boolean
    isCompanyUser?: boolean
}

export type Token = {
    accessToken: string
    refreshToken?: string
}

export type OauthSignInCallbackPayload = {
    onSignIn: (tokens: Token, user?: User) => void
    redirect: () => void
}
