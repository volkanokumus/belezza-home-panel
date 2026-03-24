import { AdaptiveCard, Container } from '@/components/shared'
import DataTable from '@/components/shared/DataTable'
import { userApi } from '@/utils/factories'
import type { ColumnDef } from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlinePencil } from 'react-icons/hi'
import { useQuery } from 'react-query'
// User list item type
type UserListItem = {
    id?: string | number
    fullName?: string
    firstName?: string
    lastName?: string
    eMail?: string
    applicationRole?: string
    phone?: string
}

const UserList = () => {
    // ...existing code...

    // Edit handler
    const handleEditClick = (user: UserListItem) => {
        if (user.id) {
            window.location.href = `/concepts/user/user-edit/${user.id}`
        }
    }
    const [pagination, setPagination] = useState({
        pageNo: 1,
        pageSize: 10,
        searchText: '',
        orderBy: '',
    })
    const { t } = useTranslation()
    const [searchInput, setSearchInput] = useState('')
    useEffect(() => {
        const handler = setTimeout(() => {
            setPagination((prev) => ({
                ...prev,
                searchText: searchInput,
                pageNo: 1,
            }))
        }, 2000)
        return () => clearTimeout(handler)
    }, [searchInput])
    const { data: userListData, isLoading } = useQuery(
        [
            'userList',
            pagination.pageNo,
            pagination.pageSize,
            pagination.searchText,
            pagination.orderBy,
        ],
        async () => {
            const requestData = {
                pageNo: pagination.pageNo,
                pageSize: pagination.pageSize,
                searchText: pagination.searchText,
                orderBy: pagination.orderBy,
            }
            const response = await userApi.apiUserGetUserListPost(requestData)
            const res = response.data
            // totalRecords ve totalPages'ı response'dan alacağız
            return {
                items: res?.items || [],
                totalRecords: res?.totalRecords ?? 0,
                totalPages: res?.totalPages ?? 0,
            }
        },
    )

    const columns: ColumnDef<UserListItem>[] = [
        // ...existing code...
        {
            header: `${t('nav.conceptsUser.fullName')}`,
            accessorKey: 'fullName',
        },
        // {
        //     header: `${t('nav.conceptsUser.firstName')}`,
        //     accessorKey: 'firstName',
        // },
        // {
        //     header: `${t('nav.conceptsUser.lastName')}`,
        //     accessorKey: 'lastName',
        // },
        { header: `${t('nav.conceptsUser.email')}`, accessorKey: 'eMail' },
        {
            header: `${t('nav.conceptsUser.role')}`,
            accessorKey: 'applicationRole',
        },
        { header: `${t('nav.conceptsUser.phone')}`, accessorKey: 'phone' },
        {
            header: '',
            id: 'edit',
            cell: (props) => (
                <button
                    className="text-indigo-600 hover:text-indigo-500 p-2 rounded"
                    title="Edit"
                    onClick={() => handleEditClick(props.row.original)}
                >
                    <HiOutlinePencil size={18} />
                </button>
            ),
        },
    ]

    const handlePageChange = (newPageNo: number) => {
        setPagination((prev) => ({ ...prev, pageNo: newPageNo }))
    }

    const handlePageSizeChange = (newPageSize: number) => {
        setPagination((prev) => ({ ...prev, pageSize: newPageSize, pageNo: 1 }))
    }

    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="flex items-center gap-2 mb-4">
                    <h3>{t('nav.conceptsUser.userList')}</h3>
                </div>
                <div className="mb-4 flex gap-2 w-full justify-end">
                    <input
                        type="text"
                        className="input max-w-1/4 input-md h-10 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="İsim veya Email ile ara"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={userListData?.items}
                    loading={isLoading}
                    pagingData={{
                        pageIndex: pagination.pageNo,
                        pageSize: pagination.pageSize,
                        total: userListData?.totalRecords ?? 0,
                    }}
                    onPaginationChange={handlePageChange}
                    onSelectChange={handlePageSizeChange}
                />
            </AdaptiveCard>
        </Container>
    )
}

export default UserList
