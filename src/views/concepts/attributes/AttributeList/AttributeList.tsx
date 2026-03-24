import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { useTranslation } from 'react-i18next'
import AttributeListActionTools from './components/AttributeListActionTools'
import AttributeListSelected from './components/AttributeListSelected'
import AttributeListTable from './components/AttributeListTable'

const AttributeList = () => {
    const { t } = useTranslation()
    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="lg:flex items-center justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                        <div className="flex items-center gap-2">
                            <h3>{t('nav.conceptsAttributes.attributeList')}</h3>
                        </div>
                        {/* <p>Manage your application attributes</p> */}
                    </div>
                    <AttributeListActionTools />
                </div>
                <AttributeListSelected />
                <AttributeListTable />
            </AdaptiveCard>
        </Container>
    )
}

export default AttributeList
