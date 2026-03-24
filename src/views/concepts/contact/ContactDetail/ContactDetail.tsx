import { AdaptiveCard, Container } from '@/components/shared'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { contactApi } from '@/utils/factories'
import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { useNavigate, useParams } from 'react-router'

const ContactDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const contactId = id ? Number(id) : undefined

    const contactDetailMutation = useMutation({
        mutationFn: async (detailId: number) =>
            contactApi.apiContactIdGet(detailId),
        onSuccess: () => {
            toast.push(
                <Notification type="success" duration={2000}>
                    Contact detayi yuklendi.
                </Notification>,
            )
        },
        onError: () => {
            toast.push(
                <Notification type="danger" duration={3000}>
                    Contact detayi yuklenemedi.
                </Notification>,
            )
        },
    })

    useEffect(() => {
        if (contactId !== undefined && !Number.isNaN(contactId)) {
            contactDetailMutation.mutate(contactId)
        }
        // intentionally depends on parsed route id
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactId])

    const contact = contactDetailMutation.data?.data

    return (
        <AdaptiveCard>
            <Container>
                <div className="flex items-center justify-between mb-4">
                    <h4>Contact Detayi</h4>
                    <Button
                        type="button"
                        variant="default"
                        onClick={() => navigate('/concepts/contact/contact-list')}
                    >
                        Geri Don
                    </Button>
                </div>

                {contactDetailMutation.isLoading ? (
                    <div>Yukleniyor...</div>
                ) : null}

                {contactDetailMutation.isError ? (
                    <div className="text-red-500">Contact detayi yuklenemedi.</div>
                ) : null}

                {contact ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                            <div className="text-xs text-gray-500 mb-1">ID</div>
                            <div>{contact.id ?? '-'}</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                            <div className="text-xs text-gray-500 mb-1">Ad Soyad</div>
                            <div>{contact.nameSurname || '-'}</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                            <div className="text-xs text-gray-500 mb-1">Email</div>
                            <div>{contact.email || '-'}</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                            <div className="text-xs text-gray-500 mb-1">Telefon</div>
                            <div>{contact.phoneNumber || '-'}</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                            <div className="text-xs text-gray-500 mb-1">Sehir</div>
                            <div>{contact.city || '-'}</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3">
                            <div className="text-xs text-gray-500 mb-1">Konu</div>
                            <div>{contact.subject || '-'}</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 dark:border-gray-600 p-3 md:col-span-2">
                            <div className="text-xs text-gray-500 mb-1">Mesaj</div>
                            <div className="whitespace-pre-wrap">{contact.message || '-'}</div>
                        </div>
                    </div>
                ) : null}
            </Container>
        </AdaptiveCard>
    )
}

export default ContactDetail
