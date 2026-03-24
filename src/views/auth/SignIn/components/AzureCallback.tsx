import { useAuth } from '@/auth'
import appConfig from '@/configs/app.config'
import { useEffect } from 'react'

const AzureCallback = () => {
    const { oAuthSignIn } = useAuth()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (token) {
            oAuthSignIn(({ onSignIn, redirect }) => {
                onSignIn({ accessToken: token, refreshToken: '' })
                redirect()
            })
        } else {
            window.location.replace(appConfig.unAuthenticatedEntryPath)
        }
    }, [oAuthSignIn])
    return <p>Finishing login...</p>
}

export default AzureCallback
