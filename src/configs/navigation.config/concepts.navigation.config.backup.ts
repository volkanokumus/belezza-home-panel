import type { NavigationTree } from '@/@types/navigation'
import {
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from '@/constants/navigation.constant'
import { ADMIN, SUPERADMIN, USER } from '@/constants/roles.constant'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'

const conceptsNavigationConfig: NavigationTree[] = [
    {
        key: 'concepts',
        path: '',
        title: 'Concepts',
        translateKey: 'nav.concepts',
        icon: 'concepts',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER, SUPERADMIN],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4,
            },
        },
        subMenu: [
            // Temporarily hidden - can be restored when needed
            /*
            {
                key: 'concepts.ai',
                path: '',
                title: 'AI',
                translateKey: 'nav.conceptsAi.ai',
                icon: 'ai',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.ai.chat',
                        path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
                        title: 'Chat',
                        translateKey: 'nav.conceptsAi.chat',
                        icon: 'aiChat',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.chatDesc',
                                label: 'AI-powered chat systems',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.ai.image',
                        path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
                        title: 'Image',
                        translateKey: 'nav.conceptsAi.image',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            */
            /*
            {
                key: 'concepts.projects',
                path: '',
                title: 'Projects',
                translateKey: 'nav.conceptsProjects.projects',
                icon: 'projects',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProjects.projectsDesc',
                        label: 'Manage and track projects',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.projects.scrumBoard',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
                        title: 'Scrum Board',
                        translateKey: 'nav.conceptsProjects.scrumBoard',
                        icon: 'projectScrumBoard',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.scrumBoardDesc',
                                label: 'Manage your scrum workflow',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectList',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
                        title: 'Project List',
                        translateKey: 'nav.conceptsProjects.projectList',
                        icon: 'projectList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectListDesc',
                                label: 'Organize all projects',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/27`,
                        title: 'Details',
                        translateKey: 'nav.conceptsProjects.projectDetails',
                        icon: 'projectDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectDetailsDesc',
                                label: 'Project detailed information',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectTasks',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
                        title: 'Tasks',
                        translateKey: 'nav.conceptsProjects.projectTasks',
                        icon: 'projectTask',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectTasksDesc',
                                label: 'Manage project tasks',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectIssue',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/1`,
                        title: 'Issue',
                        translateKey: 'nav.conceptsProjects.projectIssue',
                        icon: 'projectIssue',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectIssueDesc',
                                label: 'Resolve project issues',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.customers',
                path: '',
                title: 'Customers',
                translateKey: 'nav.conceptsCustomers.customers',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCustomers.customersDesc',
                        label: 'Customer management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.customers.customerList',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
                        title: 'Customer List',
                        translateKey: 'nav.conceptsCustomers.customerList',
                        icon: 'customerList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerListDesc',
                                label: 'List of all customers',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/1`,
                        title: 'Customer Edit',
                        translateKey: 'nav.conceptsCustomers.customerEdit',
                        icon: 'customerEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerEditDesc',
                                label: 'Edit customer info',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
                        title: 'Customer Create',
                        translateKey: 'nav.conceptsCustomers.customerCreate',
                        icon: 'customerCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerCreateDesc',
                                label: 'Add a new customer',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/1`,
                        title: 'Customer Details',
                        translateKey: 'nav.conceptsCustomers.customerDetails',
                        icon: 'customerDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerDetailsDesc',
                                label: 'Detailed customer info',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
         
            */
            // {
            //     key: 'concepts.dashboard.MainDashboard',
            //     path: `${CONCEPTS_PREFIX_PATH}/main-menu`,
            //     title: 'Main Menu',
            //     translateKey: 'nav.concepts',
            //     icon: 'mainMenu',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.concepts',
            //             label: 'Main Menu',
            //         },
            //     },
            //     subMenu: [],
            // },
               {
                key: 'concepts.products',
                path: '',
                title: 'Products',
                translateKey: 'nav.conceptsProducts.products',
                icon: 'products',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProducts.productsDesc',
                        label: 'Product inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.products.productList',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
                        title: 'Product List',
                        translateKey: 'nav.conceptsProducts.productList',
                        icon: 'productList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productListDesc',
                                label: 'All products listed',
                            },
                        },
                        subMenu: [],
                    },
                    // {
                    //     key: 'concepts.products.productEdit',
                    //     path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/12`,
                    //     title: 'Product Edit',
                    //     translateKey: 'nav.conceptsProducts.productEdit',
                    //     icon: 'productEdit',
                    //     type: NAV_ITEM_TYPE_ITEM,
                    //      authority: [ADMIN, USER,SUPERADMIN],
                    //     meta: {
                    //         description: {
                    //             translateKey:
                    //                 'nav.conceptsProducts.productEditDesc',
                    //             label: 'Edit product details',
                    //         },
                    //     },
                    //     subMenu: [],
                    // },
                    {
                        key: 'concepts.products.productCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
                        title: 'Product Create',
                        translateKey: 'nav.conceptsProducts.productCreate',
                        icon: 'productCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productCreateDesc',
                                label: 'Add new product',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.slider',
                path: '',
                title: 'Slider',
                translateKey: 'nav.conceptsSlider.slider',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsSlider.sliderDesc',
                        label: 'Product inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.slider.sliderList',
                        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-list`,
                        title: 'Slider List',
                        translateKey: 'nav.conceptsSlider.sliderList',
                        icon: 'sliderList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsSlider.sliderListDesc',
                                label: 'All sliders listed',
                            },
                        },
                        subMenu: [],
                    },
                    // {
                    //     key: 'concepts.products.productEdit',
                    //     path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/12`,
                    //     title: 'Product Edit',
                    //     translateKey: 'nav.conceptsProducts.productEdit',
                    //     icon: 'productEdit',
                    //     type: NAV_ITEM_TYPE_ITEM,
                    //      authority: [ADMIN, USER,SUPERADMIN],
                    //     meta: {
                    //         description: {
                    //             translateKey:
                    //                 'nav.conceptsProducts.productEditDesc',
                    //             label: 'Edit product details',
                    //         },
                    //     },
                    //     subMenu: [],
                    // },
                    {
                        key: 'concepts.slider.sliderCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-create`,
                        title: 'slider Create',
                        translateKey: 'nav.conceptsSlider.sliderCreate',
                        icon: 'sliderCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsSlider.sliderCreateDesc',
                                label: 'Add new slider',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.page',
                path: '',
                title: 'Page',
                translateKey: 'nav.conceptsPage.page',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsPage.pageDesc',
                        label: 'Product inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.page.pageList',
                        path: `${CONCEPTS_PREFIX_PATH}/page/page-list`,
                        title: 'Page List',
                        translateKey: 'nav.conceptsPage.pageList',
                        icon: 'pageList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsPage.pageListDesc',
                                label: 'All pages listed',
                            },
                        },
                        subMenu: [],
                    },
                    // {
                    //     key: 'concepts.products.productEdit',
                    //     path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/12`,
                    //     title: 'Product Edit',
                    //     translateKey: 'nav.conceptsProducts.productEdit',
                    //     icon: 'productEdit',
                    //     type: NAV_ITEM_TYPE_ITEM,
                    //      authority: [ADMIN, USER,SUPERADMIN],
                    //     meta: {
                    //         description: {
                    //             translateKey:
                    //                 'nav.conceptsProducts.productEditDesc',
                    //             label: 'Edit product details',
                    //         },
                    //     },
                    //     subMenu: [],
                    // },
                    {
                        key: 'concepts.page.pageCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/page/page-create`,
                        title: 'page Create',
                        translateKey: 'nav.conceptsPage.pageCreate',
                        icon: 'pageCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsPage.pageCreateDesc',
                                label: 'Add new page',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.attributes',
                path: '',
                title: 'Attributes',
                translateKey: 'nav.conceptsAttributes.attributes',
                icon: 'attributes',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAttributes.attributesDesc',
                        label: 'Attribute management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.attributes.attributeList',
                        path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-list`,
                        title: 'Attribute List',
                        translateKey: 'nav.conceptsAttributes.attributeList',
                        icon: 'attributeList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAttributes.attributeListDesc',
                                label: 'All attributes listed',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.attributes.attributeEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-edit/1`,
                        title: 'Attribute Edit',
                        translateKey: 'nav.conceptsAttributes.edit_attribute',
                        icon: 'attributeEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAttributes.attributeEditDesc',
                                label: 'Edit attribute details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.attributes.attributeCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-create`,
                        title: 'Attribute Create',
                        translateKey: 'nav.conceptsAttributes.create_attribute',
                        icon: 'attributeCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAttributes.attributeCreateDesc',
                                label: 'Add new attribute',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.attributes-value',
                path: '',
                title: 'Attributes Values',
                translateKey: 'nav.conceptsAttributeValues.attributes-value',
                icon: 'attributes',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAttributes.attributesDesc',
                        label: 'Attribute management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.attributes-value.attributeValueList',
                        path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-list`,
                        title: 'Attribute Value List',
                        translateKey:
                            'nav.conceptsAttributes.attributeValueList',
                        icon: 'attributeList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAttributes.attributeListDesc',
                                label: 'All attributes listed',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.attributes.attributeValueEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-value-edit/1`,
                        title: 'Attribute Value Edit',
                        translateKey:
                            'nav.conceptsAttributesValue.attributeValueEdit',
                        icon: 'attributeEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAttributesValue.attributeValueEditDesc',
                                label: 'Edit attribute details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.attributes.attributeValueCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-create`,
                        title: 'Attribute Value Create',
                        translateKey:
                            'nav.conceptsAttributeValues.create_attribute',
                        icon: 'attributeCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAttributesValue.attributeValueCreateDesc',
                                label: 'Add new attribute',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            // {
            //     key: 'concepts.categories',
            //     path: '',
            //     title: 'Categories',
            //     translateKey: 'nav.conceptsCategories.categories',
            //     icon: 'categories',
            //     type: NAV_ITEM_TYPE_COLLAPSE,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.conceptsCategories.categoriesDesc',
            //             label: 'Category management',
            //         },
            //     },
            //     subMenu: [
            //         {
            //             key: 'concepts.categories.categoryList',
            //             path: `${CONCEPTS_PREFIX_PATH}/categories/category-list`,
            //             title: 'Category List',
            //             translateKey: 'nav.conceptsCategories.categoryList',
            //             icon: 'categoryList',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsCategories.categoryListDesc',
            //                     label: 'All categories listed',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         {
            //             key: 'concepts.categories.categoryEdit',
            //             path: `${CONCEPTS_PREFIX_PATH}/categories/category-edit/1`,
            //             title: 'Category Edit',
            //             translateKey: 'nav.conceptsCategories.categoryEdit',
            //             icon: 'categoryEdit',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsCategories.categoryEditDesc',
            //                     label: 'Edit category details',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         {
            //             key: 'concepts.categories.categoryCreate',
            //             path: `${CONCEPTS_PREFIX_PATH}/categories/category-create`,
            //             title: 'Category Create',
            //             translateKey: 'nav.conceptsCategories.categoryCreate',
            //             icon: 'categoryCreate',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsCategories.categoryCreateDesc',
            //                     label: 'Add new category',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //     ],
            // },
            // {
            //     key: 'concepts.folders',
            //     path: '',
            //     title: 'Folders',
            //     translateKey: 'nav.conceptsFolders.folders',
            //     icon: 'folders',
            //     type: NAV_ITEM_TYPE_COLLAPSE,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.conceptsFolders.foldersDesc',
            //             label: 'Folder management',
            //         },
            //     },
            //     subMenu: [
            //         {
            //             key: 'concepts.folders.folderList',
            //             path: `${CONCEPTS_PREFIX_PATH}/folders/folder-list`,
            //             title: 'Folder List',
            //             translateKey: 'nav.conceptsFolders.folderList',
            //             icon: 'folderList',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsFolders.folderListDesc',
            //                     label: 'All folders listed',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         // {
            //         //     key: 'concepts.folders.folderEdit',
            //         //     path: `${CONCEPTS_PREFIX_PATH}/folders/folder-edit/1`,
            //         //     title: 'Folder Edit',
            //         //     translateKey: 'nav.conceptsFolders.folderEdit',
            //         //     icon: 'folderEdit',
            //         //     type: NAV_ITEM_TYPE_ITEM,
            //         //     authority: [ADMIN, USER, SUPERADMIN],
            //         //     meta: {
            //         //         description: {
            //         //             translateKey:
            //         //                 'nav.conceptsFolders.folderEditDesc',
            //         //             label: 'Edit folder details',
            //         //         },
            //         //     },
            //         //     subMenu: [],
            //         // },
            //         {
            //             key: 'concepts.folders.folderCreate',
            //             path: `${CONCEPTS_PREFIX_PATH}/folders/folder-create`,
            //             title: 'Folder Create',
            //             translateKey: 'nav.conceptsFolders.folderCreate',
            //             icon: 'folderCreate',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsFolders.folderCreateDesc',
            //                     label: 'Add new folder',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //     ],
            // },
            // {
            //     key: 'concepts.tree',
            //     path: `${CONCEPTS_PREFIX_PATH}/tree`,
            //     title: 'Tree',
            //     translateKey: 'nav.tree',
            //     icon: 'tree',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.treeDesc',
            //             label: 'Manage your file system',
            //         },
            //     },
            //     subMenu: [],
            // },
            // {
            //     key: 'concepts.tree.treeEdit',
            //     path: `${CONCEPTS_PREFIX_PATH}/tree/tree-edit/1-2`,
            //     title: 'Attribute Value Edit',
            //     translateKey: 'nav.tree.treeEdit',
            //     icon: 'treeEdit',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.tree.treeEditDesc',
            //             label: 'Edit attribute details',
            //         },
            //     },
            //     subMenu: [],
            // },
            // {
            //     key: 'concepts.fileUpload',
            //     path: `${CONCEPTS_PREFIX_PATH}/file-upload`,
            //     title: 'File Upload',
            //     translateKey: 'nav.fileUpload',
            //     icon: 'fileUpload',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.fileUploadDesc',
            //             label: 'Manage your file system',
            //         },
            //     },
            //     subMenu: [],
            // },
            // Temporarily hidden - all other menu items can be restored when needed
            /*
            {
                key: 'concepts.orders',
                path: '',
                title: 'Orders',
                translateKey: 'nav.conceptsOrders.orders',
                icon: 'orders',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsOrders.ordersDesc',
                        label: 'Customer orders management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.orders.orderList',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
                        title: 'Order List',
                        translateKey: 'nav.conceptsOrders.orderList',
                        icon: 'orderList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderListDesc',
                                label: 'View all customer orders',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/95954`,
                        title: 'Order Edit',
                        translateKey: 'nav.conceptsOrders.orderEdit',
                        icon: 'orderEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderEditDesc',
                                label: 'Edit order details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
                        title: 'Order Create',
                        translateKey: 'nav.conceptsOrders.orderCreate',
                        icon: 'orderCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderCreateDesc',
                                label: 'Create new order',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/95954`,
                        title: 'Order Details',
                        translateKey: 'nav.conceptsOrders.orderDetails',
                        icon: 'ordeDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderDetailsDesc',
                                label: 'Detailed order information',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.account',
                path: '',
                title: 'Account',
                translateKey: 'nav.conceptsAccount.account',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAccount.accountDesc',
                        label: 'Account settings and info',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.account.settings',
                        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
                        title: 'Settings',
                        translateKey: 'nav.conceptsAccount.settings',
                        icon: 'accountSettings',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.settingsDesc',
                                label: 'Configure your settings',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.activityLog',
                        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
                        title: 'Activity log',
                        translateKey: 'nav.conceptsAccount.activityLog',
                        icon: 'accountActivityLogs',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.activityLogDesc',
                                label: 'View recent activities',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.rolesPermissions',
                        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
                        title: 'Roles & Permissions',
                        translateKey: 'nav.conceptsAccount.rolesPermissions',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.rolesPermissionsDesc',
                                label: 'Manage roles & permissions',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.pricing',
                        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
                        title: 'Pricing',
                        translateKey: 'nav.conceptsAccount.pricing',
                        icon: 'accountPricing',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAccount.pricingDesc',
                                label: 'View pricing plans',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.helpCenter',
                path: '',
                title: 'Help Center',
                translateKey: 'nav.conceptsHelpCenter.helpCenter',
                icon: 'helpCenter',
                type: NAV_ITEM_TYPE_COLLAPSE,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsHelpCenter.helpCenterDesc',
                        label: 'Support and articles',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.helpCenter.supportHub',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
                        title: 'Support Hub',
                        translateKey: 'nav.conceptsHelpCenter.supportHub',
                        icon: 'helpCeterSupportHub',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.supportHubDesc',
                                label: 'Central support hub',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.article',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/pWBKE_0UiQ`,
                        title: 'Article',
                        translateKey: 'nav.conceptsHelpCenter.article',
                        icon: 'helpCeterArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.articleDesc',
                                label: 'Read support articles',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.editArticle',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/pWBKE_0UiQ`,
                        title: 'Edit Article',
                        translateKey: 'nav.conceptsHelpCenter.editArticle',
                        icon: 'helpCeterEditArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.editArticleDesc',
                                label: 'Modify article content',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.manageArticle',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
                        title: 'Manage Article',
                        translateKey: 'nav.conceptsHelpCenter.manageArticle',
                        icon: 'helpCeterManageArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.manageArticleDesc',
                                label: 'Article management',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.calendar',
                path: `${CONCEPTS_PREFIX_PATH}/calendar`,
                title: 'Calendar',
                translateKey: 'nav.calendar',
                icon: 'calendar',
                type: NAV_ITEM_TYPE_ITEM,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.calendarDesc',
                        label: 'Schedule and events',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.fileManager',
                path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
                title: 'File Manager',
                translateKey: 'nav.fileManager',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_ITEM,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.fileManagerDesc',
                        label: 'Manage your files',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.mail',
                path: `${CONCEPTS_PREFIX_PATH}/mail`,
                title: 'Mail',
                translateKey: 'nav.mail',
                icon: 'mail',
                type: NAV_ITEM_TYPE_ITEM,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.mailDesc',
                        label: 'Manage your emails',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.chat',
                path: `${CONCEPTS_PREFIX_PATH}/chat`,
                title: 'Chat',
                translateKey: 'nav.chat',
                icon: 'chat',
                type: NAV_ITEM_TYPE_ITEM,
                 authority: [ADMIN, USER,SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.chatDesc',
                        label: 'Chat with friends',
                    },
                },
                subMenu: [],
            },
        ],
    },
    */
        ],
    },
]
export default conceptsNavigationConfig
