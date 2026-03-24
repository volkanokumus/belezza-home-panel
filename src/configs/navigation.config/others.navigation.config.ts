import type { NavigationTree } from '@/@types/navigation'
import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from '@/constants/navigation.constant'
import { ADMIN, SUPERADMIN, USER } from '@/constants/roles.constant'

const othersNavigationConfig: NavigationTree[] = [
    {
        key: 'others',
        path: '',
        title: 'Others',
        translateKey: 'nav.others.others',
        icon: 'others',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER, SUPERADMIN],
        subMenu: [
            {
                key: 'others.accessDenied',
                path: `/access-denied`,
                title: 'Access Denied',
                translateKey: 'nav.others.accessDenied',
                icon: 'accessDenied',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.others.accessDeniedDesc',
                        label: 'Access denied page',
                    },
                },
                subMenu: [],
            },
            {
                key: 'others.landing',
                path: `/landing`,
                title: 'Landing',
                translateKey: 'nav.others.landing',
                icon: 'landing',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.others.landingDesc',
                        label: 'Shared component usage',
                    },
                },
                subMenu: [],
            },
        ],
    },
]

export default othersNavigationConfig
