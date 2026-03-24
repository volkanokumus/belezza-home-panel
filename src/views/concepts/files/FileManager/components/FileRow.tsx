import Table from '@/components/ui/Table'
import FileIcon from '@/components/view/FileIcon'
import fileSizeUnit from '@/utils/fileSizeUnit'
import type { BaseFileItemProps } from '../types'
import FileItemDropdown from './FileItemDropdown'
import FileType from './FileType'

type FileRowProps = BaseFileItemProps

const { Tr, Td } = Table

const FileRow = (props: FileRowProps) => {
    const { fileType, size, name, onClick, ...rest } = props

    return (
        <Tr>
            <Td width="70%">
                <div
                    className="inline-flex items-center gap-2 cursor-pointer group"
                    role="button"
                    onClick={onClick}
                >
                    <div className="text-3xl">
                        <FileIcon type={fileType || ''} />
                    </div>
                    <div className="font-bold heading-text group-hover:text-primary">
                        {name}
                    </div>
                </div>
            </Td>
            <Td>{fileSizeUnit(size || 0)}</Td>
            <Td>
                <FileType type={fileType || ''} />
            </Td>
            <Td>
                <div className="flex justify-end">
                    <FileItemDropdown {...rest} fileType={fileType} />
                </div>
            </Td>
        </Tr>
    )
}

export default FileRow
