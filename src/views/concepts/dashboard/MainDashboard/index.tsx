import { AdaptiveCard } from '@/components/shared'
import { useTranslation } from 'react-i18next'
import {
    FcAutomotive,
    FcCollaboration,
    FcDatabase,
    FcDiploma2,
    FcGlobe,
    FcReading,
} from 'react-icons/fc'

type Props = {}

const MainDashboard = (props: Props) => {
    const { t } = useTranslation()
    // const [loading, setLoading] = useState(false)
    // const [dashboardData, setDashboardData] = useState<DashboardStatsDto>()

    // ✅ Sayı formatlama helper
    const formatNumber = (num?: number) => {
        if (num == null) return '-'
        return num.toLocaleString('tr-TR') // 12345 -> 12.345
    }

    // useEffect(() => {
    //     const loadDashboard = async () => {
    //         setLoading(true)
    //         try {
    //             const response = await dashboardApi.apiDashboardStatsGet()
    //             setDashboardData(response.data)
    //         } catch (error: any) {
    //             toast.push(
    //                 <Notification type="success" duration={2500}>
    //                     {error}
    //                 </Notification>,
    //             )
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     loadDashboard()
    // }, [])

    const topData = [
        {
            title: `${t('common.totalFiles')}`,
            // value: `${formatNumber(dashboardData?.totalFiles)} Adet`,
            icon: <FcDatabase size={50} />,
            className: '',
        },
        {
            title: `${t('common.totalCustomer')}`,
            // value: `${formatNumber(dashboardData?.customerCount ?? 0)} Adet`,
            icon: <FcDiploma2 size={50} />,
            className: 'bg-emerald-100 dark:bg-emerald/75',
        },
        {
            title: `${t('common.totalUsers')}`,
            // value: `${formatNumber(dashboardData?.totalUsers)} Adet`,
            icon: <FcReading size={50} />,
            className: 'bg-emerald-100 dark:bg-emerald/75',
        },
    ]

    const bottomData = [
        {
            title: `${t('common.numberFile')}`,
            // value: `${formatNumber(dashboardData?.customerFiles)} Adet`,
            icon: <FcDiploma2 size={50} />,
            id: 1,
            className: 'bg-purple-100 dark:bg-purple/75',
        },
        {
            title: `${t('common.supplierFiles')}`,
            // value: `${formatNumber(dashboardData?.supplierFiles)} Adet`,
            icon: <FcAutomotive size={50} />,
            className: 'bg-yellow-100 dark:bg-yellow/75',
            id: 2,
        },
        {
            title: `${t('common.numberDocuments')}`,
            // value: `${formatNumber(dashboardData?.groupInternalFiles)} Adet`,
            icon: <FcGlobe size={50} />,
            className: 'bg-blue-100 dark:bg-blue/75',
            id: 3,
        },
        {
            title: `${t('common.officalNumber')}`,
            // value: `${formatNumber(dashboardData?.officialFiles)} Adet`,
            icon: <FcCollaboration size={50} />,
            className: 'bg-rose-100 dark:bg-rose/75',
            id: 4,
        },
        {
            title: `${t('common.otherNumber')}`,
            // value: `${formatNumber(dashboardData?.otherFiles)} Adet`,
            icon: <FcDatabase size={50} />,
            className: 'bg-teal-100 dark:bg-teal/75',
            id: 5,
        },
    ]

    return (
        <div>
            <div className="flex gap-6 w-full max-xl:flex-col">
                <AdaptiveCard className="xl:w-7/12 h-full">
                    <h3 className="mb-4 text-lg font-semibold">
                        {t('nav.concepts')}
                    </h3>
                    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 bg-gray-100 dark:bg-gray-700 rounded-2xl py-10 px-4 w-full h-full">
                        {topData.map((item, index) => (
                            <div
                                key={index}
                                className={`px-4 py-8 rounded-2xl ltr:text-left rtl:text-right transition duration-150 outline-hidden bg-white dark:bg-gray-900 shadow-md ${item.className}`}
                            >
                                <div className="flex gap-6 items-center">
                                    <div>{item?.icon}</div>
                                    <div>
                                        <div className="text-gray-900 font-bold text-lg">
                                            {item.title}
                                        </div>
                                        <div className="text-2xl">
                                            {item?.value}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AdaptiveCard>
                <AdaptiveCard className="flex flex-col w-full xl:w-5/12">
                    {bottomData.map((item, index) => (
                        <a
                            href={`/concepts/tree?id=${item?.id}`}
                            className={`last-of-type:mb-0 flex items-center gap-2 mb-4`}
                            key={index}
                        >
                            <div className="avatar avatar-round bg-white">
                                {item?.icon}
                            </div>
                            <div className="flex flex-col items-start gap-0">
                                <div className="text-gray-900 font-bold text-lg">
                                    {item?.title}
                                </div>
                                <div className="text-2xl">{item?.value}</div>
                            </div>
                        </a>
                    ))}
                </AdaptiveCard>
            </div>
        </div>
    )
}

export default MainDashboard
