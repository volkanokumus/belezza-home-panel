import Button from '@/components/ui/Button'
import { authApi } from '@/utils/factories'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const AzureLoginButton = () => {
    const { t } = useTranslation()
    // const handleAzureLogin = async () => {
    //     try {
    //         const response =
    //             await authApi.apiAuthorizationAzureAdAuthorizeRequestGet()
    //         // Örneğin response.data.url veya response.url olabilir, response'u console.log ile kontrol et
    //         const url = response?.data
    //         if (url) {
    //             window.open(url, '_blank')
    //         } else {
    //             // Fallback: Eğer response'da url yoksa, başka bir işlem yap
    //             console.log('Azure login response:', response)
    //         }
    //     } catch (error) {
    //         console.error('Azure login error:', error)
    //     }
    // }

    const [loading, setLoading] = useState(false)
    const handleAzureLogin = async () => {
        if (loading) return
        setLoading(true)
        try {
            const response =
                await authApi.apiAuthorizationAzureAdAuthorizeRequestGet()
            const url = response.data // Doğrudan string url döner
            if (typeof url === 'string' && url) {
                window.location.href = url
            } else {
                console.log('Azure login response:', response)
            }
        } catch (error) {
            console.error('Azure login error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button
            block
            loading={loading}
            disabled={loading}
            variant="solid"
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-[#f3f4f6] text-black font-semibold border-[1px] border-[#DFDFDF] shadow-md"
            onClick={handleAzureLogin}
        >
            <span className="flex items-center gap-2 w-full justify-center">
                <svg
                    id="f4337506-5d95-4e80-b7ca-68498c6e008e"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    className="max-w-8"
                >
                    <defs>
                        <linearGradient
                            id="ba420277-700e-42cc-9de9-5388a5c16e54"
                            x1="9"
                            y1="16.97"
                            x2="9"
                            y2="1.03"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#0078d4" />
                            <stop offset="0.16" stopColor="#1380da" />
                            <stop offset="0.53" stopColor="#3c91e5" />
                            <stop offset="0.82" stopColor="#559cec" />
                            <stop offset="1" stopColor="#5ea0ef" />
                        </linearGradient>
                    </defs>
                    <path
                        id="a91f0ca4-8fb7-4019-9c09-0a52e2c05754"
                        d="M17,4v9.74l-4,3.28-6.2-2.26V17L3.29,12.41l10.23.8V4.44Zm-3.41.49L7.85,1V3.29L2.58,4.84,1,6.87v4.61l2.26,1V6.57Z"
                        fill="url(#ba420277-700e-42cc-9de9-5388a5c16e54)"
                    />
                </svg>
                <span>
                    {loading
                        ? t('signIn.azureLoading', 'Yönlendiriliyor...')
                        : t('signIn.azureSignIn', 'Azure ile Giriş Yap')}
                </span>
            </span>
        </Button>
    )
}

export default AzureLoginButton
