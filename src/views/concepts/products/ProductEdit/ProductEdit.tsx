import ConfirmDialog from '@/components/shared/ConfirmDialog'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { apiGetProduct, apiUpdateProduct } from '@/services/ProductService'
import { useState } from 'react'
import { TbTrash } from 'react-icons/tb'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import ProductForm from '../ProductForm'
import { ProductFormSchema } from '../ProductForm/types'

const ProductEdit = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)

    // Ürün verilerini getir
    const { data: productData, isLoading: isLoadingProduct } = useQuery(
        ['product', id],
        async () => {
            if (!id) return null
            const response = await apiGetProduct({ id })
            return response?.data
        },
        {
            enabled: !!id,
        },
    )

    const updateProductMutation = useMutation({
        mutationFn: async (data: ProductFormSchema) => {
            if (!id) throw new Error('Product ID is required')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return await apiUpdateProduct(id, data as any)
        },
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2500}>
                    Product updated successfully!
                </Notification>,
                { placement: 'top-center' },
            )
            navigate('/concepts/products/product-list')
        },
        onError: (error: unknown) => {
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : 'Failed to update product'
            toast.push(
                <Notification type="danger" duration={5000}>
                    {errorMessage}
                </Notification>,
                { placement: 'top-center' },
            )
        },
    })

    const handleFormSubmit = async (values: ProductFormSchema) => {
        updateProductMutation.mutate(values)
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(true)
        toast.push(
            <Notification type="success">Product discarded!</Notification>,
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

    if (isLoadingProduct) {
        return (
            <Container>
                <div className="flex items-center justify-center py-20">
                    <p className="text-gray-500">Loading product...</p>
                </div>
            </Container>
        )
    }

    const defaultValues: ProductFormSchema = productData
        ? {
              name: productData.name || '',
              slug: productData.slug || '',
              shortDescription: productData.shortDescription || '',
              description: productData.description || '',
              productCode: productData.productCode || '',
              category: productData.category || '',
              mainImageUrl: productData.mainImageUrl || '',
              imageUrls: productData.imageUrls || [],
              price: Number(productData.price) || 0,
              discountPrice: Number(productData.discountPrice) || 0,
              currency: productData.currency || 'TL',
              showPrice: productData.showPrice ?? true,
              dimensions: productData.dimensions || '',
              material: productData.material || '',
              colors: productData.colors || '',
              features: productData.features || {},
              metaTitle: productData.metaTitle || '',
              metaDescription: productData.metaDescription || '',
              keywords: productData.keywords || '',
              status: productData.status ?? 1,
              isFeatured: productData.isFeatured ?? false,
              isNewProduct: productData.isNewProduct ?? false,
              order: productData.order ?? 0,
          }
        : {
              name: '',
              slug: '',
              shortDescription: '',
              description: '',
              productCode: '',
              category: '',
              mainImageUrl: '',
              imageUrls: [],
              price: 0,
              discountPrice: 0,
              currency: 'TL',
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
          }

    return (
        <>
            <ProductForm
                newProduct={false}
                defaultValues={defaultValues}
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
                                loading={updateProductMutation.isLoading}
                            >
                                Update
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

export default ProductEdit
