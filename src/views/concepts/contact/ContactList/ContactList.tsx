import { AdaptiveCard, Container } from '@/components/shared'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import Table from '@/components/ui/Table'
import toast from '@/components/ui/toast'
import { contactApi } from '@/utils/factories'
import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'

const ContactList = () => {
    const navigate = useNavigate()

    const contactListMutation = useMutation({
        mutationFn: async () => contactApi.apiContactGet(),
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2000}>
                    Contact listesi yuklendi.
                </Notification>,
            )
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={3000}>
                    Contact listesi yuklenemedi.
                </Notification>,
            )
        },
    })

    useEffect(() => {
        contactListMutation.mutate()
        // intentionally run once on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const contacts = contactListMutation.data?.data || []

    return (
        <AdaptiveCard>
            <Container>
                <div className="flex items-center justify-between mb-4">
                    <h4>Contact Listesi</h4>
                </div>

                {contactListMutation.isError ? (
                    <div className="text-red-500">Contact listesi yuklenemedi.</div>
                ) : null}

                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ad Soyad</th>
                            <th>Email</th>
                            <th>Telefon</th>
                            <th>Sehir</th>
                            <th>Konu</th>
                            <th>Islemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactListMutation.isLoading ? (
                            <tr>
                                <td colSpan={7}>Yukleniyor...</td>
                            </tr>
                        ) : (
                            contacts.map((row: any) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.nameSurname || '-'}</td>
                                    <td>{row.email || '-'}</td>
                                    <td>{row.phoneNumber || '-'}</td>
                                    <td>{row.city || '-'}</td>
                                    <td>{row.subject || '-'}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                navigate(
                                                    `/concepts/contact/contact-detail/${row.id}`,
                                                )
                                            }
                                        >
                                            Detay
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </Container>
        </AdaptiveCard>
    )
}

export default ContactList
