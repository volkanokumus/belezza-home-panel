import { AdaptiveCard, Container } from '@/components/shared'
import Button from '@/components/ui/Button'
import Table from '@/components/ui/Table'
import { pagesApi } from '@/utils/factories'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'

function stripHtml(html: string) {
    if (!html) return ''
    return html.replace(/<[^>]+>/g, '')
}

// ...

const PageList = () => {
    const navigate = useNavigate()
    const { data, isLoading, isError } = useQuery<any>(['pages'], () =>
        pagesApi.apiPagesGet(),
    )

    return (
        <AdaptiveCard>
            <Container>
                <div className="flex justify-between mb-4">
                    <h4>Sayfa Listesi</h4>
                    <Button
                        onClick={() => navigate('/concepts/page/page-create')}
                    >
                        Yeni Sayfa
                    </Button>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Başlık</th>
                            <th>Özet</th>
                            <th>Slug</th>
                            <th>Durum</th>
                            <th>Yayın Tarihi</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={6}>Yukleniyor...</td>
                            </tr>
                        ) : isError ? (
                            <tr>
                                <td colSpan={6} className="text-red-500">
                                    Sayfa listesi yuklenemedi.
                                </td>
                            </tr>
                        ) : (
                            (data?.data?.pages || []).map((row: any) => (
                                <tr key={row.id}>
                                    <td>{row.title}</td>
                                    <td>
                                        {row.summary
                                            ? row.summary.slice(0, 60)
                                            : ''}
                                    </td>
                                    <td>{row.slug}</td>
                                    <td>{row.status}</td>
                                    <td>{row.publishedAt}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            onClick={() =>
                                                navigate(
                                                    `/concepts/page/page-edit/${row.id}`,
                                                )
                                            }
                                        >
                                            Düzenle
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

export default PageList
