import ConfirmDialog from '@/components/shared/ConfirmDialog'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { STATIC_CATEGORIES } from '@/constants/categories.constant'
import { apiCreateProduct } from '@/services/ProductService'
import { useState } from 'react'
import { TbTrash } from 'react-icons/tb'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import ProductForm from '../ProductForm'
import type { ProductFormSchema } from '../ProductForm/types'

const ProductCreate = () => {
    const navigate = useNavigate()
    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)

    // İlk kategoriyi default olarak set et
    const defaultCategory = STATIC_CATEGORIES[0]?.id || 1

    const createProductMutation = useMutation({
        mutationFn: async (data: ProductFormSchema) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return await apiCreateProduct(data as any)
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    Product created successfully!
                </Notification>,
                { placement: 'top-center' },
            )
            navigate('/concepts/products/product-list')
        },
        onError: (error: unknown) => {
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : 'Failed to create product'
            toast.push(
                <Notification type="danger" duration={5000}>
                    {errorMessage}
                </Notification>,
                { placement: 'top-center' },
            )
        },
    })

    const handleFormSubmit = async (values: ProductFormSchema) => {
        createProductMutation.mutate(values)
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(true)
        toast.push(
            <Notification type="success">Product discardd!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/products/product-list')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <ProductForm
                newProduct
                defaultValues={{
                    name: '',
                    slug: '',
                    shortDescription: '',
                    description: '',
                    productCode: '',
                    category: defaultCategory,
                    mainImageUrl: '',
                    imageUrls: [],
                    price: 0,
                    discountPrice: 0,
                    currency: 'USD',
                    showPrice: true,
                    dimensions: '',
                    material: '',
                    colors: '',
                    features: {},
                    metaTitle: '',
                    metaDescription: '',
                    keywords: '',
                    status: 1,
                    isFeatured: false,
                    isNewProduct: false,
                    order: 0,
                }}
                onFormSubmit={handleFormSubmit}
            >
                <Container>
                    <div className="flex items-center justify-between px-8">
                        <span></span>
                        <div className="flex items-center">
                            <Button
                                className="ltr:mr-3 rtl:ml-3"
                                type="button"
                                customColorClass={() =>
                                    'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                }
                                icon={<TbTrash />}
                                onClick={handleDiscard}
                            >
                                Discard
                            </Button>
                            <Button
                                variant="solid"
                                type="submit"
                                loading={createProductMutation.isLoading}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </Container>
            </ProductForm>
            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="Discard changes"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDiscard}
            >
                <p>
                    Are you sure you want discard this? This action can&apos;t
                    be undo.{' '}
                </p>
            </ConfirmDialog>
        </>
    )
}

export default ProductCreate
