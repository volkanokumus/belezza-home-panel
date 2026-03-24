# FolderTreeDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**folderName** | **string** |  | [optional] [default to undefined]
**folderDefinition** | **string** |  | [optional] [default to undefined]
**parentFolderId** | **number** |  | [optional] [default to undefined]
**hasChildren** | **boolean** |  | [optional] [default to undefined]
**children** | [**Array&lt;FolderTreeDto&gt;**](FolderTreeDto.md) |  | [optional] [default to undefined]
**files** | [**Array&lt;FolderFileDto&gt;**](FolderFileDto.md) |  | [optional] [default to undefined]
**hasFiles** | **boolean** |  | [optional] [default to undefined]
**fileCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { FolderTreeDto } from './api';

const instance: FolderTreeDto = {
    id,
    folderName,
    folderDefinition,
    parentFolderId,
    hasChildren,
    children,
    files,
    hasFiles,
    fileCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
