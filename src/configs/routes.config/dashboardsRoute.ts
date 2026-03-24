import type { Routes } from '@/@types/routes'
import { ADMIN, SUPERADMIN, USER } from '@/constants/roles.constant'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { lazy } from 'react'

const dashboardsRoute: Routes = [
    {
        key: 'dashboard.ecommerce',
        path: `${DASHBOARDS_PREFIX_PATH}/ecommerce`,
        component: lazy(() => import('@/views/dashboards/EcommerceDashboard')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.project',
        path: `${DASHBOARDS_PREFIX_PATH}/project`,
        component: lazy(() => import('@/views/dashboards/ProjectDashboard')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.marketing',
        path: `${DASHBOARDS_PREFIX_PATH}/marketing`,
        component: lazy(() => import('@/views/dashboards/MarketingDashboard')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.analytic',
        path: `${DASHBOARDS_PREFIX_PATH}/analytic`,
        component: lazy(() => import('@/views/dashboards/AnalyticDashboard')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default dashboardsRoute
