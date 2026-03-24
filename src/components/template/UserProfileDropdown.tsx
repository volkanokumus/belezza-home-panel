import { useAuth } from '@/auth'
import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import { userApi } from '@/utils/factories'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import type { JSX } from 'react'
import { useTranslation } from 'react-i18next'
import { PiGearDuotone, PiSignOutDuotone, PiUserDuotone } from 'react-icons/pi'
import { Link } from 'react-router'
import useSWR from 'swr'

type DropdownList = {
    label: string
    path: string
    icon: JSX.Element
}

const dropdownItemList: DropdownList[] = [
    {
        label: 'userDropdown.profile',
        path: '/concepts/account/settings',
        icon: <PiUserDuotone />,
    },
    {
        label: 'userDropdown.accountSetting',
        path: '/concepts/account/settings',
        icon: <PiGearDuotone />,
    },
]

const _UserDropdown = () => {
    // const { avatar, userName, email } = useSessionUser((state) => state.user)
    const { signOut } = useAuth()
    const { t } = useTranslation()
    const { user } = useAuth() // örnek, user bilgisi varsa login olmuş demektir
    //    const { data: userData } = useSWR('active-user-info', async () => {
    //         const response = await userApi.apiUserGetActiveUserInfoGet()
    //         return response.data
    //     })
    const shouldFetch = Boolean(user) // login olmuşsa true

    const { data: userData } = useSWR(
        shouldFetch ? 'active-user-info' : null, // login olmadan null ver, SWR istek atmaz
        async () => {
            const response = await userApi.apiUserGetActiveUserInfoGet()
            return response.data
        },
        {
            revalidateOnFocus: false, // sekmeye geçince tekrar fetch etmesin
            revalidateOnReconnect: false, // ağ bağlantısı tekrar kurulunca fetch etmesin
            dedupingInterval: 1000 * 60 * 10, // 10 dakika içinde aynı isteği tekrar etmesin
        },
    )

    const avatar = userData?.photoFile || ''
    const userName =
        userData?.firstName || userData?.lastName
            ? `${userData?.firstName ?? ''} ${userData?.lastName ?? ''}`.trim()
            : ''
    const email = userData?.eMail || ''

    const handleSignOut = () => {
        signOut()
    }

    const avatarProps = {
        ...(avatar ? { src: avatar } : { icon: <PiUserDuotone /> }),
    }

    return (
        <Dropdown
            className="flex"
            toggleClassName="flex items-center"
            renderTitle={
                <div className="cursor-pointer flex items-center">
                    {userName ? (
                        <div className="min-w-8 max-w-8 max-h-8 text-xs min-h-8 object-contain flex items-center justify-center font-bold border-[#A3A3A3] bg-[#A3A3A3] text-white hover:text-[#A3A3A3] hover:bg-white  transition-all duration-200  border-[1px] rounded-full">
                            {userData?.firstName?.charAt(0)}{' '}
                            {userData?.lastName?.charAt(0)}
                        </div>
                    ) : (
                        <Avatar size={32} {...avatarProps} />
                    )}
                </div>
            }
            placement="bottom-end"
        >
            <Dropdown.Item variant="header">
                <div className="py-2 px-3 flex items-center gap-3">
                    <Avatar {...avatarProps} />
                    <div>
                        <div className="font-bold text-gray-900 dark:text-gray-100">
                            {userName || t('userDropdown.anonymous')}
                        </div>
                        <div className="text-xs">
                            {email || t('userDropdown.noEmail')}
                        </div>
                    </div>
                </div>
            </Dropdown.Item>
            <Dropdown.Item variant="divider" />
            {dropdownItemList.map((item) => (
                <Dropdown.Item
                    key={item.label}
                    eventKey={item.label}
                    className="px-0"
                >
                    <Link className="flex h-full w-full px-2" to={item.path}>
                        <span className="flex gap-2 items-center w-full">
                            <span className="text-xl">{item.icon}</span>
                            <span>{t(item.label)}</span>
                        </span>
                    </Link>
                </Dropdown.Item>
            ))}
            <Dropdown.Item variant="divider" />
            <Dropdown.Item
                eventKey="Sign Out"
                className="gap-2"
                onClick={handleSignOut}
            >
                <span className="text-xl">
                    <PiSignOutDuotone />
                </span>
                <span>{t('userDropdown.signOut')}</span>
            </Dropdown.Item>
        </Dropdown>
    )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
