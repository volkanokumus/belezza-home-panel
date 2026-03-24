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
        title: '',
        translateKey: '',
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
            // {
            //     key: 'concepts.attributes',
            //     path: '',
            //     title: 'Attributes',
            //     translateKey: 'nav.conceptsAttributes.attributes',
            //     icon: 'attributes',
            //     type: NAV_ITEM_TYPE_COLLAPSE,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.conceptsAttributes.attributesDesc',
            //             label: 'Attribute management',
            //         },
            //     },
            //     subMenu: [
            //         {
            //             key: 'concepts.attributes.attributeList',
            //             path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-list`,
            //             title: 'Attribute List',
            //             translateKey: 'nav.conceptsAttributes.attributeList',
            //             icon: 'attributeList',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsAttributes.attributeListDesc',
            //                     label: 'All attributes listed',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         // {
            //         //     key: 'concepts.attributes.attributeEdit',
            //         //     path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-edit/1`,
            //         //     title: 'Attribute Edit',
            //         //     translateKey: 'nav.conceptsAttributes.edit_attribute',
            //         //     icon: 'attributeEdit',
            //         //     type: NAV_ITEM_TYPE_ITEM,
            //         //     authority: [ADMIN, USER, SUPERADMIN],
            //         //     meta: {
            //         //         description: {
            //         //             translateKey:
            //         //                 'nav.conceptsAttributes.attributeEditDesc',
            //         //             label: 'Edit attribute details',
            //         //         },
            //         //     },
            //         //     subMenu: [],
            //         // },
            //         {
            //             key: 'concepts.attributes.attributeCreate',
            //             path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-create`,
            //             title: 'Attribute Create',
            //             translateKey: 'nav.conceptsAttributes.create_attribute',
            //             icon: 'attributeCreate',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsAttributes.attributeCreateDesc',
            //                     label: 'Add new attribute',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //     ],
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
                        label: 'Slider inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.slider.sliderList',
                        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-list`,
                        title: 'Slider List',
                        translateKey: 'nav.conceptsslider.sliderList',
                        icon: 'sliderList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.sliderListDesc',
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
                        key: 'concepts.slider.sliderCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/slider/slider-create`,
                        title: 'Slider Create',
                        translateKey: 'nav.conceptsSliders.sliderCreate',
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
                        label: 'page inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.page.pageList',
                        path: `${CONCEPTS_PREFIX_PATH}/page/page-list`,
                        title: 'page List',
                        translateKey: 'nav.conceptspage.pageList',
                        icon: 'pageList',
                        type: NAV_ITEM_TYPE_ITEM,
                         authority: [ADMIN, USER,SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.pageListDesc',
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
                        key: 'concepts.page.pageCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/page/page-create`,
                        title: 'page Create',
                        translateKey: 'nav.conceptsPages.pageCreate',
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
                key: 'concepts.contact',
                path: '',
                title: 'Contact',
                translateKey: 'nav.conceptsContact.contact',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsContact.contactDesc',
                        label: 'Contact management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.contact.contactList',
                        path: `${CONCEPTS_PREFIX_PATH}/contact/contact-list`,
                        title: 'Contact List',
                        translateKey: 'nav.conceptsContact.contactList',
                        icon: 'pageList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsContact.contactListDesc',
                                label: 'All contacts listed',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            // {
            //     key: 'concepts.attributes-value',
            //     path: '',
            //     title: 'Attributes Value',
            //     translateKey: 'nav.conceptsAttributeValues.attributes-value',
            //     icon: 'attributes',
            //     type: NAV_ITEM_TYPE_COLLAPSE,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey:
            //                 'nav.conceptsAttributesValue.attributesDesc',
            //             label: 'Attribute management',
            //         },
            //     },
            //     subMenu: [
            //         {
            //             key: 'concepts.attributes-value.attributeValueList',
            //             path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-list`,
            //             title: 'Attribute Value List',
            //             translateKey:
            //                 'nav.conceptsAttributeValues.attributes-value-list',
            //             icon: 'attributeValueList',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsAttributesValue.attributeValueListDesc',
            //                     label: 'All attributes listed',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         // {
            //         //     key: 'concepts.attributes.attributeEdit',
            //         //     path: `${CONCEPTS_PREFIX_PATH}/attributes/attribute-edit/1`,
            //         //     title: 'Attribute Edit',
            //         //     translateKey: 'nav.conceptsAttributes.attributeEdit',
            //         //     icon: 'attributeEdit',
            //         //     type: NAV_ITEM_TYPE_ITEM,
            //         //     authority: [ADMIN, USER, SUPERADMIN],
            //         //     meta: {
            //         //         description: {
            //         //             translateKey:
            //         //                 'nav.conceptsAttributes.attributeEditDesc',
            //         //             label: 'Edit attribute details',
            //         //         },
            //         //     },
            //         //     subMenu: [],
            //         // },
            //         {
            //             key: 'concepts.attributes-value.attributeValueCreate',
            //             path: `${CONCEPTS_PREFIX_PATH}/attributes-value/attribute-value-create`,
            //             title: 'Attribute Value Create',
            //             translateKey:
            //                 'nav.conceptsAttributeValues.create_attribute',
            //             icon: 'attributeValueCreate',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey:
            //                         'nav.conceptsAttributes.attributeCreateDesc',
            //                     label: 'Add new attribute',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //     ],
            // },
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
            //         // {
            //         //     key: 'concepts.categories.categoryEdit',
            //         //     path: `${CONCEPTS_PREFIX_PATH}/categories/category-edit/1`,
            //         //     title: 'Category Edit',
            //         //     translateKey: 'nav.conceptsCategories.categoryEdit',
            //         //     icon: 'categoryEdit',
            //         //     type: NAV_ITEM_TYPE_ITEM,
            //         //     authority: [ADMIN, USER, SUPERADMIN],
            //         //     meta: {
            //         //         description: {
            //         //             translateKey:
            //         //                 'nav.conceptsCategories.categoryEditDesc',
            //         //             label: 'Edit category details',
            //         //         },
            //         //     },
            //         //     subMenu: [],
            //         // },
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
            //     key: 'concepts.user',
            //     path: '',
            //     title: 'User',
            //     translateKey: 'nav.conceptsUser.user',
            //     icon: 'user',
            //     type: NAV_ITEM_TYPE_COLLAPSE,
            //     authority: [ADMIN, USER, SUPERADMIN],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.conceptsUser.userDesc',
            //             label: 'User management',
            //         },
            //     },
            //     subMenu: [
            //         {
            //             key: 'concepts.user.userList',
            //             path: `${CONCEPTS_PREFIX_PATH}/user/user-list`,
            //             title: 'User List',
            //             translateKey: 'nav.conceptsUser.userList',
            //             icon: 'userList',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey: 'nav.conceptsUser.userListDesc',
            //                     label: 'All users listed',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         // {
            //         //     key: 'concepts.user.userEdit',
            //         //     path: `${CONCEPTS_PREFIX_PATH}/user/user-edit/:id`,
            //         //     title: 'User Edit',
            //         //     translateKey: 'nav.conceptsUser.userEdit',
            //         //     icon: 'userEdit',
            //         //     type: NAV_ITEM_TYPE_ITEM,
            //         //     authority: [ADMIN, USER, SUPERADMIN],
            //         //     meta: {
            //         //         description: {
            //         //             translateKey: 'nav.conceptsUser.userEditDesc',
            //         //             label: 'Edit user details',
            //         //         },
            //         //     },
            //         //     subMenu: [],
            //         // },
            //         {
            //             key: 'concepts.user.userCreate',
            //             path: `${CONCEPTS_PREFIX_PATH}/user/user-create`,
            //             title: 'User Create',
            //             translateKey: 'nav.conceptsUser.userCreate',
            //             icon: 'userCreate',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER, SUPERADMIN],
            //             meta: {
            //                 description: {
            //                     translateKey: 'nav.conceptsUser.userCreateDesc',
            //                     label: 'Add new user',
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
            //     translateKey: 'nav.conceptsTree.title',
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
            //     key: 'concepts.treeEdit',
            //     path: `${CONCEPTS_PREFIX_PATH}/tree-edit/:id/:version`,
            //     title: 'Tree Edit',
            //     translateKey: 'nav.conceptsTreeEdit.title',
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
            //     key: 'concepts.fileUpload',
            //     path: `${CONCEPTS_PREFIX_PATH}/file-upload`,
            //     title: 'File Upload',
            //     translateKey: 'nav.conceptsFileUploads.fileUploads',
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
        ],
    },
]

export default conceptsNavigationConfig
