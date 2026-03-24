# FileGridListResponseDtoItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**fileDisplayName** | **string** |  | [optional] [default to undefined]
**uploadedFileName** | **string** |  | [optional] [default to undefined]
**isInExternalStorage** | **boolean** |  | [optional] [default to undefined]
**physicalPathName** | **string** |  | [optional] [default to undefined]
**physicalFileName** | **string** |  | [optional] [default to undefined]
**externalStorageId** | **string** |  | [optional] [default to undefined]
**folderId** | **number** |  | [optional] [default to undefined]
**latestVersion** | **number** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**dateCreated** | **string** |  | [optional] [default to undefined]
**dateLastModified** | **string** |  | [optional] [default to undefined]
**versions** | [**Array&lt;FileVersion&gt;**](FileVersion.md) |  | [optional] [default to undefined]
**attributes** | [**Array&lt;FileAttributeDto&gt;**](FileAttributeDto.md) |  | [optional] [default to undefined]
**mainAttributeValue** | **string** |  | [optional] [default to undefined]
**nodeValue** | **string** |  | [optional] [default to undefined]
**subNodeValue** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FileGridListResponseDtoItem } from './api';

const instance: FileGridListResponseDtoItem = {
    id,
    fileDisplayName,
    uploadedFileName,
    isInExternalStorage,
    physicalPathName,
    physicalFileName,
    externalStorageId,
    folderId,
    latestVersion,
    isActive,
    dateCreated,
    dateLastModified,
    versions,
    attributes,
    mainAttributeValue,
    nodeValue,
    subNodeValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
