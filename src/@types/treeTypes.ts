type TreeNode = {
    id: number
    name: string
    mainAttributeId?: number
    hasChild: boolean
    children?: TreeNode[]
    isExpanded?: boolean
    nodeLevel?: number
    kunnId?: number | null
    isLoading?: boolean
    kunnNodePairId?: number | null
    fileBase64?: string | null
    path: string
    latestVersion?: number
    fileSize?: number | null
    createdDate?: string | null
    parentId?: number | null
      forceReload?: boolean
    fileOldVersions: {
        id: number
        fileId: number
        uploadedFileName: string
        version: number
        createdDate: string
        fileSize?: number | null
        base64Data?: string | null
    }[]
}
