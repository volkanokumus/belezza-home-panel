import { Form, FormItem, Select } from '@/components/ui'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Notification from '@/components/ui/Notification/Notification'
import toast from '@/components/ui/toast'
import type { CreateUserRequestDto } from '@/openApiServices/api'
import { userApi } from '@/utils/factories'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import useSWR from 'swr'

// type ProfileSchema = {
//     firstName: string
//     lastName: string
//     email: string
//     dialCode: string
//     phoneNumber: string
//     img: string
//     country: string
//     address: string
//     postcode: string
//     city: string
// }

// type CountryOption = {
//     label: string
//     dialCode: string
//     value: string
// }

// const { Control } = components

// const validationSchema = z.object({
//     firstName: z.string().min(1, { message: 'First name required' }),
//     lastName: z.string().min(1, { message: 'Last name required' }),
//     email: z
//         .string()
//         .min(1, { message: 'Email required' })
//         .email({ message: 'Invalid email' }),
//     dialCode: z.string().min(1, { message: 'Please select your country code' }),
//     phoneNumber: z
//         .string()
//         .min(1, { message: 'Please input your mobile number' }),
//     country: z.string().min(1, { message: 'Please select a country' }),
//     address: z.string().min(1, { message: 'Addrress required' }),
//     postcode: z.string().min(1, { message: 'Postcode required' }),
//     city: z.string().min(1, { message: 'City required' }),
//     img: z.string(),
// })

// const CustomSelectOption = (
//     props: OptionProps<CountryOption> & { variant: 'country' | 'phone' },
// ) => {
//     return (
//         <DefaultOption<CountryOption>
//             {...props}
//             customLabel={(data, label) => (
//                 <span className="flex items-center gap-2">
//                     <Avatar
//                         shape="circle"
//                         size={20}
//                         src={`/img/countries/${data.value}.png`}
//                     />
//                     {props.variant === 'country' && <span>{label}</span>}
//                     {props.variant === 'phone' && <span>{data.dialCode}</span>}
//                 </span>
//             )}
//         />
//     )
// }

// const CustomControl = ({ children, ...props }: ControlProps<CountryOption>) => {
//     const selected = props.getValue()[0]
//     return (
//         <Control {...props}>
//             {selected && (
//                 <Avatar
//                     className="ltr:ml-4 rtl:mr-4"
//                     shape="circle"
//                     size={20}
//                     src={`/img/countries/${selected.value}.png`}
//                 />
//             )}
//             {children}
//         </Control>
//     )
// }

const SettingsProfile = () => {
    // Şifreyi göster/gizle için state
    const [showPassword, setShowPassword] = useState(false)
    // Artık user bilgisini useAuth'tan değil, userApi'den getActiveUserInfo ile alıyoruz
    const { data: userData, mutate } = useSWR(
        'active-user-info',
        async () => {
            const response = await userApi.apiUserGetActiveUserInfoGet()
            return response.data
        },
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    // const dialCodeList = useMemo(() => {
    //     const newCountryList: Array<CountryOption> = JSON.parse(
    //         JSON.stringify(countryList),
    //     )

    //     return newCountryList.map((country) => {
    //         country.label = country.dialCode
    //         return country
    //     })
    // }, [])

    // const beforeUpload = (files: FileList | null) => {
    //     let valid: string | boolean = true

    //     const allowedFileType = ['image/jpeg', 'image/png']
    //     if (files) {
    //         for (const file of files) {
    //             if (!allowedFileType.includes(file.type)) {
    //                 valid = 'Please upload a .jpeg or .png file!'
    //             }
    //         }
    //     }

    //     return valid
    // }

    const [isSubmitting, setIsSubmitting] = useState(false)
    const { handleSubmit, reset, control } = useForm<CreateUserRequestDto>({
        // validation kaldırıldı, backend modeline uygun
    })
    const roleData = [
        { id: 1, roleName: 'SuperAdmin' },
        // { id: 2, attributeName: 'User' },
        // { id: 3, attributeName: 'Manager' },
    ]
    // API'dan gelen UserDto'yu CreateUserRequestDto'ya mapleyen fonksiyon
    function mapUserDtoToForm(user: any): CreateUserRequestDto {
        return {
            id: user.id ?? '',
            firstName: user.firstName ?? '',
            lastName: user.lastName ?? '',
            eMail: user.eMail ?? '',
            password: '', // güvenlik için şifreyi boş bırakıyoruz
            phoneNumber: user.phoneNumber ?? '',
            defaultLanguage: user.defaultLanguage ?? '',
            photoFile: user.photoFile ?? '',
            applicationRole: user.applicationRole ?? '',
            companyId: user.companyId ?? null,
            departmentId: user.departmentId ?? null,
        }
    }

    useEffect(() => {
        if (userData) {
            reset(mapUserDtoToForm(userData))
        }
    }, [userData, reset])

    const onSubmit = async (values: CreateUserRequestDto) => {
        setIsSubmitting(true)
        try {
            await userApi.apiUserUpdateUserPost(values)
            mutate({ ...userData, ...values }, false)
            toast.push(
                <Notification type="success" duration={2500}>
                    {t('common.success')}
                </Notification>,
            )
        } catch {
            toast.push(
                <Notification type="danger" duration={2500}>
                    {t('common.error')}
                </Notification>,
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const { t } = useTranslation()
    return (
        <>
            <h4 className="mb-8">{t('settingsProfile.personalInfo')}</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="mb-8">
                    <Controller
                        name="photoFile"
                        control={control}
                        render={({ field }) => (
                            <div className="flex items-center gap-4">
                                <Avatar
                                    size={90}
                                    className="border-4 border-white bg-gray-100 text-gray-300 shadow-lg"
                                    icon={<HiOutlineUser />}
                                    src={field.value ?? ''}
                                />
                                <div className="flex items-center gap-2">
                                    <Upload
                                        showList={false}
                                        uploadLimit={1}
                                        onChange={(files) => {
                                            if (files.length > 0) {
                                                field.onChange(
                                                    URL.createObjectURL(
                                                        files[0],
                                                    ),
                                                )
                                            }
                                        }}
                                    >
                                        <Button
                                            variant="solid"
                                            size="sm"
                                            type="button"
                                            icon={<TbPlus />}
                                        >
                                            {t('settingsProfile.uploadImage')}
                                        </Button>
                                    </Upload>
                                    <Button
                                        size="sm"
                                        type="button"
                                        onClick={() => {
                                            field.onChange('')
                                        }}
                                    >
                                        {t('settingsProfile.remove')}
                                    </Button>
                                </div>
                            </div>
                        )}
                    />
                </div> */}
                <div className="grid md:grid-cols-2 gap-4">
                    <FormItem label={t('settingsProfile.firstName')}>
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="First Name"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem label={t('settingsProfile.lastName')}>
                        <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Last Name"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem label={t('settingsProfile.email')}>
                        <Controller
                            name="eMail"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Email"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem>
                    {/* <FormItem label={t('settingsProfile.companyId')}>
                        <Controller
                            name="companyId"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Company ID"
                                    type="number"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem> */}
                    {/* <FormItem label={t('settingsProfile.departmentId')}>
                        <Controller
                            name="departmentId"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Department ID"
                                    type="number"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem> */}
                    <FormItem label={t('settingsProfile.password')}>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <div className="relative">
                                    <Input
                                        {...field}
                                        placeholder="Password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        value={field.value ?? ''}
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-400"
                                        onMouseDown={() =>
                                            setShowPassword(true)
                                        }
                                        onMouseUp={() => setShowPassword(false)}
                                        onMouseLeave={() =>
                                            setShowPassword(false)
                                        }
                                    >
                                        {showPassword ? (
                                            <HiEyeOff />
                                        ) : (
                                            <HiEye />
                                        )}
                                    </span>
                                </div>
                            )}
                        />
                    </FormItem>
                    <FormItem label={t('settingsProfile.phoneNumber')}>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => {
                                const formatPhone = (value: string) => {
                                    const digits = value
                                        .replace(/\D/g, '')
                                        .slice(0, 10)
                                    const part1 = digits.slice(0, 3)
                                    const part2 = digits.slice(3, 6)
                                    const part3 = digits.slice(6, 8)
                                    const part4 = digits.slice(8, 10)
                                    let masked = ''
                                    if (part1) masked += `(${part1}`
                                    if (part1 && part1.length === 3)
                                        masked += ') '
                                    if (part2) masked += part2
                                    if (part2 && part2.length === 3)
                                        masked += ' '
                                    if (part3) masked += part3
                                    if (part4) masked += ` ${part4}`
                                    return masked
                                }
                                return (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span
                                            className=""
                                            style={{
                                                marginRight: 8,
                                                fontWeight: 500,
                                                color: '#555',
                                            }}
                                        >
                                            +90
                                        </span>
                                        <Input
                                            {...field}
                                            style={{ flex: 1 }}
                                            placeholder="Phone Number"
                                            value={formatPhone(
                                                field.value ?? '',
                                            )}
                                            onChange={(e) => {
                                                const raw = e.target.value
                                                    .replace(/\D/g, '')
                                                    .slice(0, 10)
                                                field.onChange(raw)
                                            }}
                                        />
                                    </div>
                                )
                            }}
                        />
                    </FormItem>
                    {/* <FormItem label={t('settingsProfile.defaultLanguage')}>
                        <Controller
                            name="defaultLanguage"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Default Language"
                                    value={field.value ?? ''}
                                />
                            )}
                        />
                    </FormItem> */}
                    <FormItem label={t('settingsProfile.applicationRole')}>
                        <Controller
                            name="applicationRole"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    options={roleData || []}
                                    getOptionLabel={(opt) => opt.roleName || ''}
                                    getOptionValue={(opt) => opt.roleName || ''}
                                    placeholder={t('nav.conceptsUser.role')}
                                    value={
                                        roleData?.find(
                                            (opt) =>
                                                opt.roleName === field.value,
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        field.onChange(option?.roleName || '')
                                    }
                                />
                            )}
                        />
                    </FormItem>
                </div>
                <div className="flex justify-end mt-8">
                    <Button
                        variant="solid"
                        type="submit"
                        size="lg"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? t('settingsProfile.updating')
                            : t('settingsProfile.update')}
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default SettingsProfile
