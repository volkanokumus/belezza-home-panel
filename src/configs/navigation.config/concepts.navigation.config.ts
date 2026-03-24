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
                        translateKey: 'nav.conceptsAttributes.attributeEdit',
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
                        translateKey: 'nav.conceptsAttributes.attributeCreate',
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
                key: 'concepts.categories',
                path: '',
                title: 'Categories',
                translateKey: 'nav.conceptsCategories.categories',
                icon: 'categories',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCategories.categoriesDesc',
                        label: 'Category management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.categories.categoryList',
                        path: `${CONCEPTS_PREFIX_PATH}/categories/category-list`,
                        title: 'Category List',
                        translateKey: 'nav.conceptsCategories.categoryList',
                        icon: 'categoryList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCategories.categoryListDesc',
                                label: 'All categories listed',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.categories.categoryEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/categories/category-edit/1`,
                        title: 'Category Edit',
                        translateKey: 'nav.conceptsCategories.categoryEdit',
                        icon: 'categoryEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCategories.categoryEditDesc',
                                label: 'Edit category details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.categories.categoryCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/categories/category-create`,
                        title: 'Category Create',
                        translateKey: 'nav.conceptsCategories.categoryCreate',
                        icon: 'categoryCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCategories.categoryCreateDesc',
                                label: 'Add new category',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.folders',
                path: '',
                title: 'Folders',
                translateKey: 'nav.conceptsFolders.folders',
                icon: 'folders',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER, SUPERADMIN],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsFolders.foldersDesc',
                        label: 'Folder management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.folders.folderList',
                        path: `${CONCEPTS_PREFIX_PATH}/folders/folder-list`,
                        title: 'Folder List',
                        translateKey: 'nav.conceptsFolders.folderList',
                        icon: 'folderList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsFolders.folderListDesc',
                                label: 'All folders listed',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.folders.folderEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/folders/folder-edit/1`,
                        title: 'Folder Edit',
                        translateKey: 'nav.conceptsFolders.folderEdit',
                        icon: 'folderEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsFolders.folderEditDesc',
                                label: 'Edit folder details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.folders.folderCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/folders/folder-create`,
                        title: 'Folder Create',
                        translateKey: 'nav.conceptsFolders.folderCreate',
                        icon: 'folderCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER, SUPERADMIN],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsFolders.folderCreateDesc',
                                label: 'Add new folder',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default conceptsNavigationConfig
