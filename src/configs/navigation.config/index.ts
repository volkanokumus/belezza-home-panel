// import conceptsNavigationConfig from './concepts.navigation.config'
import type { NavigationTree } from '@/@types/navigation'
import conceptsNavigationConfig from './concepts.navigation.config.simple'

const navigationConfig: NavigationTree[] = [
    // ...dashboardsNavigationConfig,
    ...conceptsNavigationConfig,
    // Temporarily hidden - can be restored when needed
    // ...uiComponentNavigationConfig,
    // ...authNavigationConfig,
    // ...othersNavigationConfig,
    // ...guideNavigationConfig,
]

export default navigationConfig
