# CreateMenuDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**parentId** | **number** |  | [optional] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**menuType** | [**MenuType**](MenuType.md) |  | [optional] [default to undefined]
**linkType** | [**MenuLinkType**](MenuLinkType.md) |  | [optional] [default to undefined]
**openInNewTab** | **boolean** |  | [optional] [default to undefined]
**showForGuests** | **boolean** |  | [optional] [default to undefined]
**showForAuthenticated** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateMenuDto } from './api';

const instance: CreateMenuDto = {
    name,
    slug,
    description,
    url,
    icon,
    imageUrl,
    parentId,
    order,
    isActive,
    menuType,
    linkType,
    openInNewTab,
    showForGuests,
    showForAuthenticated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
