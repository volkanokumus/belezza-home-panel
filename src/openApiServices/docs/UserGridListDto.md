# UserGridListDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageNo** | **number** |  | [optional] [default to undefined]
**pageSize** | **number** |  | [optional] [default to undefined]
**searchText** | **string** |  | [optional] [default to undefined]
**orderBy** | **string** |  | [optional] [default to undefined]
**totalRecords** | **number** |  | [optional] [default to undefined]
**totalPages** | **number** |  | [optional] [default to undefined]
**items** | [**Array&lt;UserGridListItemDto&gt;**](UserGridListItemDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserGridListDto } from './api';

const instance: UserGridListDto = {
    pageNo,
    pageSize,
    searchText,
    orderBy,
    totalRecords,
    totalPages,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
