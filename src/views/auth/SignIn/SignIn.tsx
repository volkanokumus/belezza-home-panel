import Alert from '@/components/ui/Alert'
import { useThemeStore } from '@/store/themeStore'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import { useTranslation } from 'react-i18next'
import SignInForm from './components/SignInForm'

type SignInProps = {
    signUpUrl?: string
    forgetPasswordUrl?: string
    disableSubmit?: boolean
}

export const SignInBase = ({
    signUpUrl = '/sign-up',
    forgetPasswordUrl = '/forgot-password',
    disableSubmit,
}: SignInProps) => {
    const [message, setMessage] = useTimeOutMessage()
    const mode = useThemeStore((state) => state.mode)
    const { t } = useTranslation()

    return (
        <>
            {/* <div className="mb-8">
                <Logo
                    type="streamline"
                    mode={mode}
                    imgClass="ml-auto"
                    logoWidth={250}
                />
            </div>
            <div className="mb-10">
                <h3 className="mb-2">{t('signIn.welcomeBack')}</h3>
                <p className="font-semibold heading-text">
                    {t('signIn.enterCredentials')}
                </p>
            </div> */}
            {/* <div className="mt-6">
                <AzureLoginButton />
                <div className="flex items-center gap-2 my-10">
                    <div className="border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]" />
                    <p className="font-semibold heading-text">
                        {t('signIn.orContinueWith')}
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]" />
                </div>
                <OauthSignIn
                    disableSubmit={disableSubmit}
                    setMessage={setMessage}
                />
            </div> */}
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    <span className="break-all">{message}</span>
                </Alert>
            )}
            <SignInForm
                disableSubmit={disableSubmit}
                setMessage={setMessage}
                // passwordHint={
                //     <div className="mb-7 mt-2">
                //         <ActionLink
                //             to={forgetPasswordUrl}
                //             className="font-semibold heading-text mt-2 underline"
                //             themeColor={false}
                //         >
                //             {t('signIn.forgotPassword')}
                //         </ActionLink>
                //     </div>
                // }
            />

            {/* <div>
                <div className="mt-6 text-center">
                    <span>{t('signIn.noAccount')} </span>
                    <ActionLink
                        to={signUpUrl}
                        className="heading-text font-bold"
                        themeColor={false}
                    >
                        {t('signIn.signUp')}
                    </ActionLink>
                </div>
            </div> */}
        </>
    )
}

const SignIn = () => {
    return <SignInBase />
}

export default SignIn
