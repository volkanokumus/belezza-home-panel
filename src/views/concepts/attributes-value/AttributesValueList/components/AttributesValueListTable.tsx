// import type {
//     AttributeDeleteCommand,
//     AttributeGridListResponseDto_Item,
//     DataTablesPaginationRequestDto,
// } from '@/@types/attribute'
// import ActionLink from '@/components/shared/ActionLink'
// import DataTable from '@/components/shared/DataTable'
// import { Notification, toast } from '@/components/ui'
// import Avatar from '@/components/ui/Avatar'
// import Button from '@/components/ui/Button'
// import Dialog from '@/components/ui/Dialog'
// import { attributeValuesApi } from '@/utils/factories'
// import type { ColumnDef } from '@tanstack/react-table'
// import { useEffect, useMemo, useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
// import { useMutation, useQuery } from 'react-query'
// import { useNavigate } from 'react-router'

// type AttributeListTableProps = {
//     className?: string
// }

// const AttributeValueListTable = ({ className }: AttributeListTableProps) => {
//     const navigate = useNavigate()
//     const [dialogOpen, setDialogOpen] = useState(false)
//     const [selectedAttribute, setSelectedAttribute] =
//         useState<AttributeGridListResponseDto_Item | null>(null)
//     const { t } = useTranslation()

//     // 🔹 Pagination + Sorting + Search
//     const [pagination, setPagination] = useState({
//         draw: 1,
//         start: 0,
//         length: 10,
//         recordsTotal: 0,
//         recordsFiltered: 0,
//         order: [
//             {
//                 column: 0,
//                 dir: 'asc' as 'asc' | 'desc',
//                 name: '',
//             },
//         ],
//         search: {
//             value: '',
//             regex: false,
//         },
//     })

//     // 🔍 Arama için state ve debounce kontrolü
//     const [searchInput, setSearchInput] = useState('')
//     const [debouncedSearch, setDebouncedSearch] = useState('')

//     // ⏳ Debounce efekti (300ms)
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setDebouncedSearch(searchInput)
//             setPagination((prev) => ({
//                 ...prev,
//                 search: { value: searchInput, regex: false },
//                 start: 0, // aramada ilk sayfaya dön
//             }))
//         }, 300)
//         return () => clearTimeout(timeout)
//     }, [searchInput])

//     // 🔹 React Query: Attribute Value List
//     const {
//         data: attributeListData,
//         isLoading,
//         refetch,
//     } = useQuery(
//         [
//             'attributeValueList',
//             pagination.start,
//             pagination.length,
//             pagination.order,
//             debouncedSearch, // 👈 debounce edilen değer
//         ],
//         async () => {
//             const requestData: DataTablesPaginationRequestDto = {
//                 draw: pagination.draw,
//                 start: pagination.start,
//                 length: pagination.length,
//                 order: pagination.order,
//                 search: pagination.search,
//             }

//             const response =
//                 await attributeValuesApi.apiAttributeValuesAttributeValuesListPost(
//                     requestData,
//                 )

//             setPagination((prev) => ({
//                 ...prev,
//                 recordsTotal: response.data?.recordsTotal ?? 0,
//                 recordsFiltered: response.data?.recordsFiltered ?? 0,
//             }))

//             return response.data?.data || []
//         },
//     )

//     // 🔹 Silme işlemleri
//     const onDelete = (attribute: AttributeGridListResponseDto_Item) => {
//         setSelectedAttribute(attribute)
//         setDialogOpen(true)
//     }

//     const deleteAttributeMutation = useMutation({
//         mutationFn: async (deleteCommand: AttributeDeleteCommand) => {
//             await attributeValuesApi.apiAttributeValuesDeleteDelete(
//                 deleteCommand,
//             )
//         },
//         onSuccess: () => {
//             toast.push(
//                 <Notification type="success" duration={2500}>
//                     {t('common.success')}
//                 </Notification>,
//             )
//             refetch()
//             setDialogOpen(false)
//             setSelectedAttribute(null)
//         },
//         onError: (error: { detail: string }) => {
//             toast.push(
//                 <Notification type="danger" duration={2500}>
//                     {error?.detail && t('common.danger')}
//                 </Notification>,
//             )
//         },
//     })

//     const onDeleteConfirm = () => {
//         if (!selectedAttribute) return
//         deleteAttributeMutation.mutate({ id: selectedAttribute.id })
//     }

//     const onEdit = (attribute: AttributeGridListResponseDto_Item) => {
//         navigate(
//             `/concepts/attributes-value/attribute-value-edit/${attribute.id}`,
//         )
//     }

//     // 🔹 Action sütunu
//     const ActionColumn = ({
//         row,
//     }: {
//         row: AttributeGridListResponseDto_Item
//     }) => (
//         <div className="flex items-center gap-2 justify-end">
//             <ActionLink
//                 className="text-indigo-600 hover:text-indigo-500"
//                 onClick={(e) => {
//                     e.preventDefault()
//                     onEdit(row)
//                 }}
//             >
//                 <HiOutlinePencil />
//             </ActionLink>
//             <ActionLink
//                 className="text-red-600 hover:text-red-500"
//                 onClick={(e) => {
//                     e.preventDefault()
//                     onDelete(row)
//                 }}
//             >
//                 <HiOutlineTrash />
//             </ActionLink>
//         </div>
//     )

//     // 🔹 Tablo sütunları
//     const columns: ColumnDef<AttributeGridListResponseDto_Item>[] = useMemo(
//         () => [
//             {
//                 header: t('nav.conceptsAttributeValues.name'),
//                 accessorKey: 'attributeName',
//                 enableSorting: true,
//                 cell: (props) => {
//                     const { attributeName } = props.row.original
//                     return (
//                         <div className="flex items-center gap-3">
//                             <Avatar
//                                 size={28}
//                                 className="bg-gray-100"
//                                 shape="circle"
//                             >
//                                 {attributeName?.charAt(0).toUpperCase() || 'A'}
//                             </Avatar>
//                             <div className="font-semibold">{attributeName}</div>
//                         </div>
//                     )
//                 },
//             },
//             {
//                 header: t('nav.conceptsAttributeValues.possible_value'),
//                 accessorKey: 'attributePossibleValue',
//                 enableSorting: true,
//                 cell: (props) => {
//                     const value = props.getValue() as string
//                     return <span>{value || '-'}</span>
//                 },
//             },
//             {
//                 header: '',
//                 id: 'action',
//                 cell: (props) => <ActionColumn row={props.row.original} />,
//             },
//         ],
//         [t],
//     )

//     return (
//         <>
//             {/* 🔍 Arama Inputu */}
//             <div className="flex justify-end mb-4">
//                 <input
//                     type="text"
//                     placeholder={
//                         t(
//                             'nav.conceptsAttributeValues.possible_value_search',
//                         ) || 'Ara...'
//                     }
//                     value={searchInput}
//                     onChange={(e) => setSearchInput(e.target.value)}
//                     className="input max-w-1/4 input-md h-10 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
//                 />
//             </div>

//             <DataTable<AttributeGridListResponseDto_Item>
//                 columns={columns}
//                 data={attributeListData}
//                 className={className}
//                 loading={isLoading}
//                 pagingData={{
//                     pageIndex:
//                         Math.floor(pagination.start / pagination.length) + 1,
//                     pageSize: pagination.length,
//                     total: pagination.recordsTotal,
//                 }}
//                 onPaginationChange={(page) => {
//                     setPagination((prev) => ({
//                         ...prev,
//                         start: (page - 1) * prev.length,
//                     }))
//                 }}
//                 onSelectChange={(pageSize) => {
//                     setPagination((prev) => ({
//                         ...prev,
//                         length: pageSize,
//                         start: 0,
//                     }))
//                 }}
//                 onSort={({ order, key }) => {
//                     setPagination((prev) => ({
//                         ...prev,
//                         order: [
//                             {
//                                 column: 0,
//                                 dir: order || 'asc',
//                                 name: String(key),
//                             },
//                         ],
//                         start: 0,
//                     }))
//                 }}
//             />

//             {/* 🔹 Silme Onay Diyaloğu */}
//             <Dialog
//                 isOpen={dialogOpen}
//                 onClose={() => setDialogOpen(false)}
//                 onRequestClose={() => setDialogOpen(false)}
//             >
//                 <div className="flex flex-col justify-between">
//                     <div className="px-6 py-4">
//                         <h5 className="mb-4">
//                             {t('nav.conceptsAttributeValues.delete_attributes')}
//                         </h5>
//                         <p>
//                             {t('nav.conceptsAttributeValues.are_you_sure')} "
//                             {selectedAttribute?.attributeName}"?{' '}
//                             {t('nav.conceptsAttributeValues.connot_undone')}
//                         </p>
//                     </div>
//                     <div className="text-right px-6 py-3">
//                         <Button
//                             type="button"
//                             className="mr-3"
//                             variant="plain"
//                             onClick={() => setDialogOpen(false)}
//                         >
//                             {t('common.cancel')}
//                         </Button>
//                         <Button
//                             type="button"
//                             variant="solid"
//                             color="red-600"
//                             onClick={onDeleteConfirm}
//                         >
//                             {t('common.delete')}
//                         </Button>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     )
// }

// export default AttributeValueListTable
