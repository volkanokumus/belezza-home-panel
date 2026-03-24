import ActionLink from '@/components/shared/ActionLink'
import DataTable from '@/components/shared/DataTable'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { SliderType } from '@/openApiServices'
import { slidersApi } from '@/utils/factories'
import type { ColumnDef } from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
type SliderItem = {
    id: number
    title: string
    sliderType: number
    linkType: number
    isActive: boolean
    order: number
}
const SliderListTable = ({ className }: { className?: string }) => {
    const navigate = useNavigate()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedSlider, setSelectedSlider] = useState<SliderItem | null>(
        null,
    )

    /* 🔹 FILTER STATES (API PARAMS) */
    const [sliderTypeFilter, setSliderTypeFilter] = useState<
        SliderType | undefined
    >()
    const [isActiveFilter, setIsActiveFilter] = useState<boolean | undefined>()

    /* 🔹 LIST QUERY */
    const { data, isLoading, isError, refetch } = useQuery(
        ['sliders', sliderTypeFilter, isActiveFilter],
        async () => {
            const res = await slidersApi.apiSlidersGet(
                sliderTypeFilter,
                isActiveFilter,
                undefined, // targetLocation
            )
            return res.data || []
        },
        {
            onError: () => {
                toast.push(
                    <Notification type="danger" duration={3000}>
                        Slider listesi yuklenemedi.
                    </Notification>,
                )
            },
        },
    )

    /* 🔹 DELETE */

    /* 🔹 COLUMNS */
    const columns: ColumnDef<SliderItem>[] = useMemo(
        () => [
            {
                header: 'Title',
                accessorKey: 'title',
                cell: ({ row }) => (
                    <div className="flex items-center gap-3">
                        <Avatar size={28} className="bg-gray-100">
                            {row.original.title?.charAt(0)}
                        </Avatar>
                        <span className="font-semibold">
                            {row.original.title}
                        </span>
                    </div>
                ),
            },
            {
                header: 'Description',
                accessorKey: 'description',
                cell: ({ row }) => (
                    <div className="flex items-center gap-3">
                        <Avatar size={28} className="bg-gray-100">
                            {row.original.title?.charAt(0)}
                        </Avatar>
                        <span className="font-semibold">
                            {row.original.title}
                        </span>
                    </div>
                ),
            },
            {
                header: 'Order',
                accessorKey: 'order',
            },
            {
                header: 'Active',
                accessorKey: 'isActive',
                cell: ({ getValue }) => (getValue<boolean>() ? 'Yes' : 'No'),
            },
            {
                header: '',
                id: 'actions',
                cell: ({ row }) => (
                    <div className="flex gap-2">
                        <ActionLink
                            onClick={() =>
                                navigate(
                                    `/concepts/slider/slider-edit/${row.original.id}`,
                                )
                            }
                        >
                            <HiOutlinePencil />
                        </ActionLink>
                        <ActionLink
                            className="text-red-600"
                            onClick={() => {
                                setSelectedSlider(row.original)
                                setDialogOpen(true)
                            }}
                        >
                            <HiOutlineTrash />
                        </ActionLink>
                    </div>
                ),
            },
        ],
        [navigate],
    )

    return (
        <>
            <DataTable<SliderItem>
                columns={columns}
                data={data || []}
                loading={isLoading}
                noData={!isLoading && !isError && (data || []).length === 0}
                className={className}
            />
            {isError ? (
                <div className="mt-3 text-sm text-red-500">
                    Slider listesi yuklenemedi. Lutfen tekrar deneyin.
                </div>
            ) : null}

            {/* DELETE DIALOG */}
            <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
                <div className="px-6 py-4">
                    <h5 className="mb-3">Delete Slider</h5>
                    <p>
                        Are you sure you want delete "{selectedSlider?.title}"?
                    </p>
                    <div className="text-right mt-6">
                        <Button
                            variant="plain"
                            className="mr-3"
                            onClick={() => setDialogOpen(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default SliderListTable
