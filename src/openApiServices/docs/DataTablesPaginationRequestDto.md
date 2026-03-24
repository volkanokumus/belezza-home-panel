# DataTablesPaginationRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draw** | **number** |  | [optional] [default to undefined]
**start** | **number** |  | [optional] [default to undefined]
**length** | **number** |  | [optional] [default to undefined]
**order** | [**Array&lt;DataTablesPaginationRequestDtoOrder&gt;**](DataTablesPaginationRequestDtoOrder.md) |  | [optional] [default to undefined]
**search** | [**DataTablesPaginationRequestDtoSearch**](DataTablesPaginationRequestDtoSearch.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DataTablesPaginationRequestDto } from './api';

const instance: DataTablesPaginationRequestDto = {
    draw,
    start,
    length,
    order,
    search,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
