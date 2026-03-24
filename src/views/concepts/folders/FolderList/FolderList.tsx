import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import FileManager from '../../files/FileManager'

const FolderList = () => {
    return (
        <Container className="h-full">
            <AdaptiveCard>
                {/* <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0">Folders</h3>
                </div> */}
                {/* <FolderListTable /> */}
                <FileManager />
            </AdaptiveCard>
        </Container>
    )
}

export default FolderList
