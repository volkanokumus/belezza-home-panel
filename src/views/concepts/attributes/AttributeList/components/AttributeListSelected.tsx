import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { HiOutlineTrash } from 'react-icons/hi'

const AttributeListSelected = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const selectedAttributes: string[] = [] // This will come from store

    const onDialogClose = () => {
        setDialogOpen(false)
    }

    const onDialogOk = () => {
        // Handle delete multiple attributes
        setDialogOpen(false)
    }

    if (selectedAttributes.length === 0) {
        return null
    }

    return (
        <>
            <div className="flex items-center justify-between my-4">
                <h5>
                    {selectedAttributes.length} attribute
                    {selectedAttributes.length > 1 ? 's' : ''} selected
                </h5>
                <Button
                    size="sm"
                    variant="solid"
                    color="red-600"
                    icon={<HiOutlineTrash />}
                    onClick={() => setDialogOpen(true)}
                >
                    Delete
                </Button>
            </div>
            <Dialog
                isOpen={dialogOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className="flex flex-col h-full justify-between">
                    <div className="overflow-y-auto">
                        <div className="px-6 py-4">
                            <h5 className="mb-4">Remove attributes</h5>
                            <p>
                                Are you sure you want to remove these attributes? This action
                                cannot be undone.
                            </p>
                        </div>
                    </div>
                    <div className="text-right px-6 py-3">
                        <Button
                            className="mr-3"
                            variant="plain"
                            onClick={onDialogClose}
                        >
                            Cancel
                        </Button>
                        <Button variant="solid" color="red-600" onClick={onDialogOk}>
                            Remove
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default AttributeListSelected