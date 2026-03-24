export const getFileTypeFromBase64 = (base64: string, fileName?: string) => {
    if (fileName) {
        const ext = fileName.split('.').pop()?.toLowerCase()
        if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg'
        if (ext === 'png') return 'image/png'
        if (ext === 'pdf') return 'application/pdf'
        if (ext === 'txt') return 'text/plain'
    }
    if (base64.startsWith('/9j/')) return 'image/jpeg'
    if (base64.startsWith('iVBORw0KGgo')) return 'image/png'
    if (base64.startsWith('JVBER')) return 'application/pdf'
    return 'application/octet-stream'
}
