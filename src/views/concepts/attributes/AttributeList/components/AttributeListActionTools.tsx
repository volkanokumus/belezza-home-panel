import Button from '@/components/ui/Button'
import { useTranslation } from 'react-i18next'
import { HiOutlinePlus } from 'react-icons/hi'
import { useNavigate } from 'react-router'

const AttributeListActionTools = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <Button
                size="sm"
                icon={<HiOutlinePlus />}
                onClick={() =>
                    navigate('/concepts/attributes/attribute-create')
                }
            >
                {t('nav.conceptsAttributes.add_attributes')}
            </Button>
        </div>
    )
}

export default AttributeListActionTools
