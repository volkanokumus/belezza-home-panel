import type { TableQueries } from '@/@types/common'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import type { ColumnDef, OnSortParam, Row } from '@/components/shared/DataTable'
import DataTable from '@/components/shared/DataTable'
import Avatar from '@/components/ui/Avatar'
import Notification from '@/components/ui/Notification'
import Progress from '@/components/ui/Progress'
import Tooltip from '@/components/ui/Tooltip'
import toast from '@/components/ui/toast'
import classNames from '@/utils/classNames'
import cloneDeep from 'lodash/cloneDeep'
import { useEffect, useMemo, useState } from 'react'
import { FiPackage } from 'react-icons/fi'
import { TbPencil, TbTrash } from 'react-icons/tb'
import { NumericFormat } from 'react-number-format'
import { useNavigate } from 'react-router'
import useProductList from '../hooks/useProductList'
import type { Product } from '../types'

const ProductColumn = ({ row }: { row: Product }) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar
                shape="round"
                size={60}
                {...(row.img ? { src: row.img } : { icon: <FiPackage /> })}
            />
            <div>
                <div className="font-bold heading-text mb-1">{row.name}</div>
                <span>ID: {row.productCode}</span>
            </div>
        </div>
    )
}

const ActionColumn = ({
    onEdit,
    onDelete,
}: {
    onEdit: () => void
    onDelete: () => void
}) => {
    return (
        <div className="flex items-center justify-end gap-3">
            <Tooltip title="Edit">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onEdit}
                >
                    <TbPencil />
                </div>
            </Tooltip>
            <Tooltip title="Delete">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onDelete}
                >
                    <TbTrash />
                </div>
            </Tooltip>
        </div>
    )
}

const ProductListTable = () => {
    const navigate = useNavigate()

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)
    const [toDeleteId, setToDeleteId] = useState<number | undefined>(undefined)

    const handleCancel = () => {
        setDeleteConfirmationOpen(false)
    }

    const handleDelete = (product: Product) => {
        setDeleteConfirmationOpen(true)
        setToDeleteId(Number(product.id))
    }

    const handleEdit = (product: Product) => {
        navigate(`/concepts/products/product-edit/${product.id}`)
    }

    const handleConfirmDelete = () => {
        const newProductList = productList.filter((product) => {
            return toDeleteId !== Number(product.id)
        })
        setSelectAllProduct([])
        mutate(
            (current) =>
                current
                    ? {
                          ...current,
                          data: newProductList as typeof current.data,
                      }
                    : current,
            false,
        )
        setDeleteConfirmationOpen(false)
        setToDeleteId(undefined)
    }

    const {
        productList,
        productListTotal,
        tableData,
        isLoading,
        error,
        setTableData,
        setSelectAllProduct,
        setSelectedProduct,
        selectedProduct,
        mutate,
    } = useProductList()

    useEffect(() => {
        if (error) {
            toast.push(
                <Notification type="danger" duration={3000}>
                    Product listesi yuklenemedi.
                </Notification>,
                { placement: 'top-center' },
            )
        }
    }, [error])

    const columns: ColumnDef<Product>[] = useMemo(
        () => [
            {
                header: 'Product',
                accessorKey: 'name',
                cell: (props) => {
                    const row = props.row.original
                    return <ProductColumn row={row} />
                },
            },
            {
                header: 'Price',
                accessorKey: 'price',
                cell: (props) => {
                    const { price } = props.row.original
                    return (
                        <span className="font-bold heading-text">
                            <NumericFormat
                                fixedDecimalScale
                                prefix="₺"
                                displayType="text"
                                value={price}
                                decimalScale={2}
                                thousandSeparator={true}
                            />
                        </span>
                    )
                },
            },
            {
                header: 'Quantity',
                accessorKey: 'stock',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <span className="font-bold heading-text">
                            {row.stock}
                        </span>
                    )
                },
            },
            {
                header: 'Sales',
                accessorKey: 'status',
                cell: (props) => {
                    const { salesPercentage, sales } = props.row.original
                    return (
                        <div className="flex flex-col gap-1">
                            <span className="flex gap-1">
                                <span className="font-semibold">
                                    <NumericFormat
                                        displayType="text"
                                        value={sales}
                                        thousandSeparator={true}
                                    />
                                </span>
                                <span>Sales</span>
                            </span>
                            <Progress
                                percent={salesPercentage}
                                showInfo={false}
                                customColorClass={classNames(
                                    'bg-error',
                                    salesPercentage > 40 && 'bg-warning',
                                    salesPercentage > 70 && 'bg-success',
                                )}
                            />
                        </div>
                    )
                },
            },
            {
                header: '',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onDelete={() => handleDelete(props.row.original)}
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
        if (selectedProduct.length > 0) {
            setSelectAllProduct([])
        }
    }

    const handlePaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        handleSetTableData(newTableData)
    }

    const handleSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        handleSetTableData(newTableData)
    }

    const handleSort = (sort: OnSortParam) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        handleSetTableData(newTableData)
    }

    const handleRowSelect = (checked: boolean, row: Product) => {
        setSelectedProduct(checked, row)
    }

    const handleAllRowSelect = (checked: boolean, rows: Row<Product>[]) => {
        if (checked) {
            const originalRows = rows.map((row) => row.original)
            setSelectAllProduct(originalRows)
        } else {
            setSelectAllProduct([])
        }
    }

    return (
        <>
            <DataTable
                selectable
                columns={columns}
                data={productList}
                noData={!isLoading && productList.length === 0}
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ width: 28, height: 28 }}
                loading={isLoading}
                pagingData={{
                    total: productListTotal,
                    pageIndex: tableData.pageIndex as number,
                    pageSize: tableData.pageSize as number,
                }}
                checkboxChecked={(row) =>
                    selectedProduct.some((selected) => selected.id === row.id)
                }
                onPaginationChange={handlePaginationChange}
                onSelectChange={handleSelectChange}
                onSort={handleSort}
                onCheckBoxChange={handleRowSelect}
                onIndeterminateCheckBoxChange={handleAllRowSelect}
            />
            {error ? (
                <div className="mt-3 text-sm text-red-500">
                    Product listesi yuklenemedi. Lutfen tekrar deneyin.
                </div>
            ) : null}
            <ConfirmDialog
                isOpen={deleteConfirmationOpen}
                type="danger"
                title="Remove products"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDelete}
            >
                <p>
                    {' '}
                    Are you sure you want to remove this product? This action
                    can&apos;t be undo.{' '}
                </p>
            </ConfirmDialog>
        </>
    )
}

export default ProductListTable
