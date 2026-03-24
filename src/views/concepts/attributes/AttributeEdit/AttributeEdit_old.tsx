// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router'
// import { useForm, Controller } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import Container from '@/components/shared/Container'
// import AdaptiveCard from '@/components/shared/AdaptiveCard'
// import Button from '@/components/ui/Button'
// import Input from '@/components/ui/Input'
// import Switcher from '@/components/ui/Switcher'
// import { FormItem, Form } from '@/components/ui/Form'
// import { apiGetAttribute, apiUpdateAttribute } from '@/services/AttributeService'
// import type { AttributeDetailResponseDto, AttributeUpdateCommand } from '@/@types/attribute'

// const validationSchema = z.object({
//     id: z.number(),
//     attributeName: z
//         .string()
//         .min(1, { message: 'Attribute name is required' })
//         .max(255, { message: 'Attribute name must not exceed 255 characters' }),
//     willAcceptTextValues: z.boolean(),
//     willBeVisibleForDocumentTree: z.boolean(),
// })

// type AttributeFormSchema = z.infer<typeof validationSchema>

// const AttributeEdit = () => {
//     const navigate = useNavigate()
//     const { id } = useParams<{ id: string }>()
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [loading, setLoading] = useState(true)

//     const {
//         handleSubmit,
//         formState: { errors },
//         control,
//         reset
//     } = useForm<AttributeFormSchema>({
//         defaultValues: {
//             id: 0,
//             attributeName: '',
//             willAcceptTextValues: false,
//             willBeVisibleForDocumentTree: false,
//         },
//         resolver: zodResolver(validationSchema),
//     })

//     // Load attribute data
//     useEffect(() => {
//         const loadAttribute = async () => {
//             if (!id) return

//             setLoading(true)
//             try {
//                 const attributeId = parseInt(id)
//                 const attribute = await apiGetAttribute(attributeId)

//                 reset({
//                     id: attribute.id,
//                     attributeName: attribute.attributeName,
//                     willAcceptTextValues: attribute.willAcceptTextValues,
//                     willBeVisibleForDocumentTree: attribute.willBeVisibleForDocumentTree,
//                 })
//             } catch (error) {
//                 console.error('Error loading attribute:', error)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         loadAttribute()
//     }, [id, reset])

//     const onSubmit = async (values: AttributeFormSchema) => {
//         if (!id) return

//         setIsSubmitting(true)
//         try {
//             const updateCommand: AttributeUpdateCommand = {
//                 id: values.id,
//                 attributeName: values.attributeName,
//                 willAcceptTextValues: values.willAcceptTextValues,
//                 willBeVisibleForDocumentTree: values.willBeVisibleForDocumentTree,
//             }

//             await apiUpdateAttribute(updateCommand)

//             navigate('/concepts/attributes/attribute-list')
//         } catch (error) {
//             console.error('Error updating attribute:', error)
//         } finally {
//             setIsSubmitting(false)
//         }
//     }

//     const onCancel = () => {
//         navigate('/concepts/attributes/attribute-list')
//     }

//     if (loading) {
//         return (
//             <Container className="h-full">
//                 <AdaptiveCard>
//                     <div className="text-center py-8">
//                         <div>Loading attribute...</div>
//                     </div>
//                 </AdaptiveCard>
//             </Container>
//         )
//     }

//     return (
//         <Container className="h-full">
//             <AdaptiveCard>
//                 <div className="max-w-2xl">
//                     <div className="mb-8">
//                         <h3>Edit Attribute</h3>
//                         <p>Update attribute information</p>
//                     </div>

//                     <Form onSubmit={handleSubmit(onSubmit)}>
//                         <FormItem
//                             label="Name"
//                             invalid={Boolean(errors.name)}
//                             errorMessage={errors.name?.message}
//                         >
//                             <Controller
//                                 name="name"
//                                 control={control}
//                                 render={({ field }) => (
//                                     <Input
//                                         type="text"
//                                         placeholder="e.g. product_color"
//                                         autoComplete="off"
//                                         {...field}
//                                     />
//                                 )}
//                             />
//                         </FormItem>

//                         <FormItem
//                             label="Display Name"
//                             invalid={Boolean(errors.displayName)}
//                             errorMessage={errors.displayName?.message}
//                         >
//                             <Controller
//                                 name="displayName"
//                                 control={control}
//                                 render={({ field }) => (
//                                     <Input
//                                         type="text"
//                                         placeholder="e.g. Product Color"
//                                         autoComplete="off"
//                                         {...field}
//                                     />
//                                 )}
//                             />
//                         </FormItem>

//                         <FormItem
//                             label="Type"
//                             invalid={Boolean(errors.type)}
//                             errorMessage={errors.type?.message}
//                         >
//                             <Controller
//                                 name="type"
//                                 control={control}
//                                 render={({ field }) => (
//                                     <select
//                                         className="form-select border border-gray-300 rounded-md px-3 py-2 w-full"
//                                         {...field}
//                                     >
//                                         {attributeTypeOptions.map((option) => (
//                                             <option key={option.value} value={option.value}>
//                                                 {option.label}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 )}
//                             />
//                         </FormItem>

//                         <FormItem
//                             label="Description"
//                             invalid={Boolean(errors.description)}
//                             errorMessage={errors.description?.message}
//                         >
//                             <Controller
//                                 name="description"
//                                 control={control}
//                                 render={({ field }) => (
//                                     <Input
//                                         textArea
//                                         placeholder="Attribute description..."
//                                         {...field}
//                                     />
//                                 )}
//                             />
//                         </FormItem>

//                         <FormItem
//                             label="Default Value"
//                             invalid={Boolean(errors.defaultValue)}
//                             errorMessage={errors.defaultValue?.message}
//                         >
//                             <Controller
//                                 name="defaultValue"
//                                 control={control}
//                                 render={({ field }) => (
//                                     <Input
//                                         type="text"
//                                         placeholder="Default value (optional)"
//                                         {...field}
//                                     />
//                                 )}
//                             />
//                         </FormItem>

//                         <div className="grid grid-cols-2 gap-4">
//                             <FormItem
//                                 label="Required"
//                             >
//                                 <Controller
//                                     name="isRequired"
//                                     control={control}
//                                     render={({ field }) => (
//                                         <Switcher
//                                             checked={field.value}
//                                             onChange={field.onChange}
//                                         />
//                                     )}
//                                 />
//                             </FormItem>

//                             <FormItem
//                                 label="Active"
//                             >
//                                 <Controller
//                                     name="isActive"
//                                     control={control}
//                                     render={({ field }) => (
//                                         <Switcher
//                                             checked={field.value}
//                                             onChange={field.onChange}
//                                         />
//                                     )}
//                                 />
//                             </FormItem>
//                         </div>

//                         <div className="flex items-center justify-end gap-4 mt-8">
//                             <Button
//                                 type="button"
//                                 variant="plain"
//                                 onClick={onCancel}
//                             >
//                                 Cancel
//                             </Button>
//                             <Button
//                                 type="submit"
//                                 variant="solid"
//                                 loading={isSubmitting}
//                             >
//                                 Update Attribute
//                             </Button>
//                         </div>
//                     </Form>
//                 </div>
//             </AdaptiveCard>
//         </Container>
//     )
// }

// export default AttributeEdit
