import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { useTranslation } from 'react-i18next'
import SliderListSelected from './components/SliderListSelected'
import SliderListTable from './components/SliderListTable'

const SliderList = () => {
    const { t } = useTranslation()
    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="lg:flex items-center justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                        <div className="flex items-center gap-2">
                            <h3>Slider Listesi</h3>
                        </div>
                        {/* <p>Manage your application attributes</p> */}
                    </div>
                    {/* <SliderListActionTools /> */}
                </div>
                <SliderListSelected />
                <SliderListTable />
            </AdaptiveCard>
        </Container>
    )
}

export default SliderList
