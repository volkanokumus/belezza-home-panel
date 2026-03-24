import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import { useTranslation } from 'react-i18next'
import CategoryListTable from './components/CategoryListTable'

const CategoryList = () => {
    const { t } = useTranslation()
    return (
        <Container className="h-full">
            <AdaptiveCard>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0">
                        {t('nav.conceptsCategories.categories')}
                    </h3>
                </div>
                <CategoryListTable />
            </AdaptiveCard>
        </Container>
    )
}

export default CategoryList
