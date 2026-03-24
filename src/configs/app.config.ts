export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    locale: string
    accessTokenPersistStrategy: 'localStorage' | 'sessionStorage' | 'cookies'
    enableMock: boolean
    activeNavTranslation: boolean
}

const appConfig: AppConfig = {
    // apiPrefix: 'https://6zf0qtb2-7283.euw.devtunnels.ms/api',
    apiPrefix: '',
    authenticatedEntryPath: '/concepts/main-menu',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'tr',
    accessTokenPersistStrategy: 'localStorage',
    enableMock: false,
    activeNavTranslation: true,
}

export default appConfig
