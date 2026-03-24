import type { Mode } from '@/@types/theme'
import Logo from '@/components/template/Logo'
import appConfig from '@/configs/app.config'
import { useThemeStore } from '@/store/themeStore'
import { Link } from 'react-router'

const HeaderLogo = ({ mode }: { mode?: Mode }) => {
    const defaultMode = useThemeStore((state) => state.mode)

    return (
        <Link to={appConfig.authenticatedEntryPath}>
            <Logo
                imgClass="max-h-16 w-40"
                mode={mode || defaultMode}
                className="hidden lg:block"
            />
        </Link>
    )
}

export default HeaderLogo
