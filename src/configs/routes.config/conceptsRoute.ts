import type { Routes } from '@/@types/routes'
import { ADMIN, SUPERADMIN, USER } from '@/constants/roles.constant'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import { lazy } from 'react'

const conceptsRoute: Routes = [
    {
        key: 'concepts.ai.chat',
        path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
        component: lazy(() => import('@/views/concepts/ai/Chat')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.ai.image',
        path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
        component: lazy(() => import('@/views/concepts/ai/Image')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.customers.customerList',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerList'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
    },
    {
        key: 'concepts.user.userList',
        path: `${CONCEPTS_PREFIX_PATH}/user/user-list`,
        component: lazy(() => import('@/views/concepts/user/UserList')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'default',
        },
    },
    {
        key: 'concepts.user.userEdit',
        path: `${CONCEPTS_PREFIX_PATH}/user/user-edit/:id`,
        component: lazy(() => import('@/views/concepts/user/UserEdit')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                // title: 'Edit user',
                description: 'Quickly manage user details and properties.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.user.userCreate',
        path: `${CONCEPTS_PREFIX_PATH}/user/user-create`,
        component: lazy(() => import('@/views/concepts/user/UserCreate')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                // title: 'Create user',
                description:
                    'Quickly add users to your system. Enter key details and properties.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerEdit',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerEdit'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Edit customer',
                description:
                    'Manage customer details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerCreate',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerCreate'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Create customer',
                description:
                    'Manage customer details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerDetails'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.products.productList',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
        component: lazy(() => import('@/views/concepts/products/ProductList')),
        authority: [ADMIN, USER, SUPERADMIN],
    },
    {
        key: 'concepts.products.productEdit',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/:id`,
        component: lazy(() => import('@/views/concepts/products/ProductEdit')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Edit product',
                description:
                    'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.products.productCreate',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
        component: lazy(
            () => import('@/views/concepts/products/ProductCreate'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Create product',
                description:
                    'Quickly add products to your inventory. Enter key details, manage stock, and set availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.slider.sliderList',
        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-list`,
        component: lazy(() => import('@/views/concepts/slider/sliderList')),
        authority: [ADMIN, USER, SUPERADMIN],
    },
    {
        key: 'concepts.slider.sliderEdit',
        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-edit/:id`,
        component: lazy(() => import('@/views/concepts/slider/sliderEdit')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Edit slider',
                description:
                    'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.slider.sliderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-create`,
        component: lazy(
            () => import('@/views/concepts/slider/sliderCreate'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Create slider',
                description:
                    'Quickly add slider to your inventory. Enter key details, manage stock, and set availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.page.pageList',
        path: `${CONCEPTS_PREFIX_PATH}/page/page-list`,
        component: lazy(() => import('@/views/concepts/page/pageList/PageList')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.page.pageCreate',
        path: `${CONCEPTS_PREFIX_PATH}/page/page-create`,
        component: lazy(() => import('@/views/concepts/page/pageCreate/PageCreate')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.page.pageEdit',
        path: `${CONCEPTS_PREFIX_PATH}/page/page-edit/:id`,
        component: lazy(() => import('@/views/concepts/page/pageEdit/PageEdit')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.contact.contactList',
        path: `${CONCEPTS_PREFIX_PATH}/contact/contact-list`,
        component: lazy(() => import('@/views/concepts/contact/ContactList')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.contact.contactDetail',
        path: `${CONCEPTS_PREFIX_PATH}/contact/contact-detail/:id`,
        component: lazy(
            () => import('@/views/concepts/contact/ContactDetail'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    // {
    //     key: 'concepts.attributes-value.attributeValueList',
    //     path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-list`,
    //     component: lazy(
    //         () =>
    //             import('@/views/concepts/attributes-value/AttributesValueList'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    // },
    // {
    //     key: 'concepts.attributes-value.attributeValueEdit',
    //     path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-edit/:id`,
    //     component: lazy(
    //         () =>
    //             import('@/views/concepts/attributes-value/AttributesValueEdit'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Edit attribute',
    //             description: 'Quickly manage attribute details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.attributes-value.attributeValueCreate',
    //     path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-create`,
    //     component: lazy(
    //         () =>
    //             import(
    //                 '@/views/concepts/attributes-value/AttributesValueCreate'
    //             ),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Create attribute',
    //             description:
    //                 'Quickly add attributes to your system. Enter key details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.attributes.attributeList',
    //     path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-list`,
    //     component: lazy(
    //         () => import('@/views/concepts/attributes/AttributeList'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    // },
    // {
    //     key: 'concepts.attributes.attributeEdit',
    //     path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-edit/:id`,
    //     component: lazy(
    //         () => import('@/views/concepts/attributes/AttributeEdit'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Edit attribute',
    //             description: 'Quickly manage attribute details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.attributes.attributeCreate',
    //     path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-create`,
    //     component: lazy(
    //         () => import('@/views/concepts/attributes/AttributeCreate'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Create attribute',
    //             description:
    //                 'Quickly add attributes to your system. Enter key details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.categories.categoryList',
    //     path: `${CONCEPTS_PREFIX_PATH}/categories/category-list`,
    //     component: lazy(
    //         () => import('@/views/concepts/categories/CategoryList'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    // },
    // {
    //     key: 'concepts.categories.categoryEdit',
    //     path: `${CONCEPTS_PREFIX_PATH}/categories/category-edit/:id`,
    //     component: lazy(
    //         () => import('@/views/concepts/categories/CategoryEdit'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Edit category',
    //             description: 'Quickly manage category details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.categories.categoryCreate',
    //     path: `${CONCEPTS_PREFIX_PATH}/categories/category-create`,
    //     component: lazy(
    //         () => import('@/views/concepts/categories/CategoryCreate'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Create category',
    //             description:
    //                 'Quickly add categories to your system. Enter key details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.folders.folderList',
    //     path: `${CONCEPTS_PREFIX_PATH}/folders/folder-list`,
    //     component: lazy(() => import('@/views/concepts/folders/FolderList')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    // },
    // {
    //     key: 'concepts.folders.folderEdit',
    //     path: `${CONCEPTS_PREFIX_PATH}/folders/folder-edit/:id`,
    //     component: lazy(() => import('@/views/concepts/folders/FolderEdit')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             title: 'Edit folder',
    //             description: 'Quickly manage folder details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.folders.folderCreate',
    //     path: `${CONCEPTS_PREFIX_PATH}/folders/folder-create`,
    //     component: lazy(() => import('@/views/concepts/folders/FolderCreate')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             // title: 'Create folder',
    //             description:
    //                 'Quickly add folders to your system. Enter key details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    {
        key: 'concepts.projects.scrumBoard',
        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
        component: lazy(() => import('@/views/concepts/projects/ScrumBoard')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectList',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
        component: lazy(() => import('@/views/concepts/projects/ProjectList')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectDetails',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/:id`,
        component: lazy(
            () => import('@/views/concepts/projects/ProjectDetails'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectTasks',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
        component: lazy(() => import('@/views/concepts/projects/Tasks')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectIssue',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/:id`,
        component: lazy(() => import('@/views/concepts/projects/Issue')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderList',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
        component: lazy(() => import('@/views/concepts/orders/OrderList')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderEdit',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderEdit')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Edit order',
                contained: true,
                description: 'Manage and track orders efficiently',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
        component: lazy(() => import('@/views/concepts/orders/OrderCreate')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                title: 'Create order',
                contained: true,
                description:
                    'Create new customer orders quickly and accurately',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderDetails',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderDetails')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                contained: true,
                title: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeader'
                        ),
                ),
                extraHeader: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeaderExtra'
                        ),
                ),
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.settings',
        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
        component: lazy(() => import('@/views/concepts/accounts/Settings')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            header: {
                // title: 'Settings',
            },
            pageContainerType: 'default',
        },
    },
    {
        key: 'concepts.account.activityLog',
        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
        component: lazy(() => import('@/views/concepts/accounts/ActivityLog')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.rolesPermissions',
        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
        component: lazy(
            () => import('@/views/concepts/accounts/RolesPermissions'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.account.pricing',
        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
        component: lazy(() => import('@/views/concepts/accounts/Pricing')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.helpCenter.supportHub',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
        component: lazy(
            () => import('@/views/concepts/help-center/SupportHub'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.article',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/:id`,
        component: lazy(() => import('@/views/concepts/help-center/Article')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.editArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/:id`,
        component: lazy(
            () => import('@/views/concepts/help-center/EditArticle'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.helpCenter.manageArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
        component: lazy(
            () => import('@/views/concepts/help-center/ManageArticle'),
        ),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.calendar',
        path: `${CONCEPTS_PREFIX_PATH}/calendar`,
        component: lazy(() => import('@/views/concepts/calendar/Calendar')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    // {
    //     key: 'concepts.fileManager',
    //     path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
    //     component: lazy(() => import('@/views/concepts/files/FileManager')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         pageContainerType: 'contained',
    //         pageBackgroundType: 'plain',
    //     },
    // },
    {
        key: 'concepts.mail',
        path: `${CONCEPTS_PREFIX_PATH}/mail`,
        component: lazy(() => import('@/views/concepts/mail/Mail')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.chat',
        path: `${CONCEPTS_PREFIX_PATH}/chat`,
        component: lazy(() => import('@/views/concepts/chat/Chat')),
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
    // {
    //     key: 'concepts.tree',
    //     path: `${CONCEPTS_PREFIX_PATH}/tree`,
    //     component: lazy(() => import('@/views/concepts/tree/index')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         pageContainerType: 'default',
    //     },
    // },
    // {
    //     key: 'concepts.dashboard',
    //     path: `${CONCEPTS_PREFIX_PATH}/main-menu`,
    //     component: lazy(
    //         () => import('@/views/concepts/dashboard/MainDashboard'),
    //     ),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         pageContainerType: 'default',
    //     },
    // },

    // {
    //     key: 'concepts.tree.treeEdit',
    //     path: `${CONCEPTS_PREFIX_PATH}/tree/tree-edit/:id`,
    //     component: lazy(() => import('@/views/concepts/tree/treeEdit')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         header: {
    //             description: 'Quickly manage attribute details and properties.',
    //             contained: true,
    //         },
    //         footer: false,
    //     },
    // },
    // {
    //     key: 'concepts.fileUpload',
    //     path: `${CONCEPTS_PREFIX_PATH}/file-upload`,
    //     component: lazy(() => import('@/views/concepts/fileUpload/index')),
    //     authority: [ADMIN, USER, SUPERADMIN],
    //     meta: {
    //         pageContainerType: 'default',
    //     },
    // },
]

export default conceptsRoute
