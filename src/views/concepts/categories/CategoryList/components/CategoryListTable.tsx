import type { CategoryGridListResponseDto_Category } from '@/@types/category'
import DataTable from '@/components/shared/DataTable'
import { Notification } from '@/components/ui'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import toast from '@/components/ui/toast'
import { categoryApi } from '@/utils/factories'
import type { ColumnDef } from '@tanstack/react-table'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router'

interface CategoryDeleteCommand {
    id: number
}

type CategoryListTableProps = {
    className?: string
}

const CategoryListTable = ({ className }: CategoryListTableProps) => {
    const navigate = useNavigate()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] =
        useState<CategoryGridListResponseDto_Category | null>(null)
    const { t } = useTranslation()
    const [pagination, setPagination] = useState({
        draw: 1,
        start: 0,
        length: 10,
        recordsTotal: 0,
        recordsFiltered: 0,
    })

    // React Query: Category List
    const {
        data: categoryListData,
        isLoading,
        refetch,
    } = useQuery(
        ['categoryList', pagination.start, pagination.length],
        async () => {
            const requestData = {
                draw: 1,
                start: pagination.start,
                length: pagination.length,
            }
            const response =
                await categoryApi.apiCategoryGetCategoriesPost(requestData)
            setPagination((prev) => ({
                ...prev,
                recordsTotal: response.data?.recordsTotal ?? 0,
                recordsFiltered: response.data?.recordsFiltered ?? 0,
            }))
            return response.data?.data || []
        },
    )

    const onDelete = useCallback(
        (category: CategoryGridListResponseDto_Category) => {
            setSelectedCategory(category)
            setDialogOpen(true)
        },
        [],
    )

    const onEdit = useCallback(
        (category: CategoryGridListResponseDto_Category) => {
            if (!category.id || category.id === 0) {
                console.error('Invalid category ID')
                return
            }
            navigate(`/concepts/categories/category-edit/${category.id}`)
        },
        [navigate],
    )

    // React Query: Delete Category
    const deleteCategoryMutation = useMutation({
        mutationFn: async (deleteCommand: CategoryDeleteCommand) => {
            await categoryApi.apiCategoryDeleteCategoryDelete(deleteCommand)
        },
        onSuccess: () => {
            refetch()
            setDialogOpen(false)
            setSelectedCategory(null)
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {' '}
                    {t('common.danger')}
                </Notification>,
            )
        },
    })

    const onDeleteConfirm = () => {
        if (!selectedCategory) return
        const deleteCommand: CategoryDeleteCommand = {
            id: selectedCategory.id,
        }
        deleteCategoryMutation.mutate(deleteCommand)
    }

    const onDialogClose = () => {
        setDialogOpen(false)
        setSelectedCategory(null)
    }

    const columns = useMemo<ColumnDef<CategoryGridListResponseDto_Category>[]>(
        () => [
            {
                header: `${t('nav.conceptsCategories.categoryName')}`,
                accessorKey: 'categoryName',
                cell: (props) => {
                    const row = props.row
                        .original as CategoryGridListResponseDto_Category
                    const name = row.categoryName || 'N/A'
                    return (
                        <div className="flex items-center">
                            <Avatar
                                size={28}
                                shape="circle"
                                src={`/img/avatars/thumb-1.jpg`}
                            />
                            <span className="ml-2 rtl:mr-2 font-semibold">
                                {name}
                            </span>
                        </div>
                    )
                },
            },
            {
                header: `${t('nav.conceptsCategories.color')}`,
                accessorKey: 'categoryColor',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            {row.categoryColor && (
                                <div
                                    className="w-6 h-6 rounded mr-2"
                                    style={{
                                        backgroundColor: row.categoryColor,
                                    }}
                                />
                            )}
                            <span>{row.categoryColor || 'No Color'}</span>
                        </div>
                    )
                },
            },
            {
                header: `${t('nav.conceptsCategories.parent_category')}`,
                accessorKey: 'parentCategoryId',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <span>
                            {row.parentCategoryId
                                ? `ID: ${row.parentCategoryId}`
                                : 'No Parent'}
                        </span>
                    )
                },
            },
            {
                header: `${t('nav.conceptsCategories.document_tree_visible')}`,
                accessorKey: 'willBeVisibleForDocumentTree',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            <Badge
                                className={
                                    row.willBeVisibleForDocumentTree
                                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100'
                                        : 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-100'
                                }
                            >
                                {row.willBeVisibleForDocumentTree
                                    ? `${t('nav.conceptsAttributes.visible')}`
                                    : `${t('nav.conceptsAttributes.hidden')}`}
                            </Badge>
                        </div>
                    )
                },
            },
            {
                header: '',
                id: 'action',
                cell: (props) => {
                    const row = props.row
                        .original as CategoryGridListResponseDto_Category
                    return (
                        <div className="flex justify-end text-lg">
                            <span
                                className="cursor-pointer p-2 hover:text-indigo-600"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    onEdit(row)
                                }}
                            >
                                <HiOutlinePencil />
                            </span>
                            <span
                                className="cursor-pointer p-2 hover:text-red-500"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    onDelete(row)
                                }}
                            >
                                <HiOutlineTrash />
                            </span>
                        </div>
                    )
                },
            },
        ],
        [onEdit, onDelete],
    )

    return (
        <>
            <DataTable<CategoryGridListResponseDto_Category>
                columns={columns}
                data={categoryListData}
                className={className}
                loading={isLoading}
                pagingData={{
                    pageIndex:
                        Math.floor(pagination.start / pagination.length) + 1,
                    pageSize: pagination.length,
                    total: pagination.recordsTotal,
                }}
                onPaginationChange={(page) => {
                    setPagination((prev) => ({
                        ...prev,
                        start: (page - 1) * prev.length,
                    }))
                }}
                onSelectChange={(pageSize) => {
                    setPagination((prev) => ({
                        ...prev,
                        length: pageSize,
                        start: 0,
                    }))
                }}
            />
            <Dialog
                isOpen={dialogOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className="flex flex-col h-full justify-between">
                    <h5 className="mb-4">
                        {t('nav.conceptsCategories.categoryDelete')}
                    </h5>
                    <p>
                        {t('nav.conceptsCategories.are_you_sure')}&nbsp; &quot;
                        {selectedCategory?.categoryName}&quot;?
                    </p>
                    <div className="text-right mt-6">
                        <Button
                            className="ltr:mr-2 rtl:ml-2"
                            variant="plain"
                            onClick={onDialogClose}
                        >
                            {t('common.cancel')}
                        </Button>
                        <Button variant="solid" onClick={onDeleteConfirm}>
                            {t('common.delete')}
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default CategoryListTable
