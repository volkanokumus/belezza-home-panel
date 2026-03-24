# TreeNodeResultDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**parentId** | **number** |  | [optional] [default to undefined]
**fileAzureName** | **string** |  | [optional] [default to undefined]
**fileDisplayName** | **string** |  | [optional] [default to undefined]
**kunnId** | **number** |  | [optional] [default to undefined]
**kunnNodePairId** | **number** |  | [optional] [default to undefined]
**isFolder** | **boolean** |  | [optional] [default to undefined]
**fileOldVersions** | [**Array&lt;FileVersionResponseDto&gt;**](FileVersionResponseDto.md) |  | [optional] [default to undefined]
**latestVersion** | **number** |  | [optional] [default to undefined]
**fileSize** | **number** |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**oldVersionCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { TreeNodeResultDto } from './api';

const instance: TreeNodeResultDto = {
    id,
    name,
    parentId,
    fileAzureName,
    fileDisplayName,
    kunnId,
    kunnNodePairId,
    isFolder,
    fileOldVersions,
    latestVersion,
    fileSize,
    createdDate,
    oldVersionCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
