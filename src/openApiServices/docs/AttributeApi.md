# AttributeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAttributeAttributeListPost**](#apiattributeattributelistpost) | **POST** /api/Attribute/AttributeList | |
|[**apiAttributeCreatePost**](#apiattributecreatepost) | **POST** /api/Attribute/Create | |
|[**apiAttributeDeleteDelete**](#apiattributedeletedelete) | **DELETE** /api/Attribute/Delete | |
|[**apiAttributeFilterGet**](#apiattributefilterget) | **GET** /api/Attribute/Filter | |
|[**apiAttributeIdGet**](#apiattributeidget) | **GET** /api/Attribute/{Id} | |
|[**apiAttributeUpdatePut**](#apiattributeupdateput) | **PUT** /api/Attribute/Update | |

# **apiAttributeAttributeListPost**
> AttributeGridListResponseDto apiAttributeAttributeListPost()


### Example

```typescript
import {
    AttributeApi,
    Configuration,
    DataTablesPaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeApi(configuration);

let dataTablesPaginationRequestDto: DataTablesPaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiAttributeAttributeListPost(
    dataTablesPaginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataTablesPaginationRequestDto** | **DataTablesPaginationRequestDto**|  | |


### Return type

**AttributeGridListResponseDto**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttributeCreatePost**
> AttributeDetailResponseDto apiAttributeCreatePost()


### Example

```typescript
import {
    AttributeApi,
    Configuration,
    AttributeCreateCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeApi(configuration);

let attributeCreateCommand: AttributeCreateCommand; // (optional)

const { status, data } = await apiInstance.apiAttributeCreatePost(
    attributeCreateCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeCreateCommand** | **AttributeCreateCommand**|  | |


### Return type

**AttributeDetailResponseDto**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttributeDeleteDelete**
> AttributeDetailResponseDto apiAttributeDeleteDelete()


### Example

```typescript
import {
    AttributeApi,
    Configuration,
    AttributeDeleteCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeApi(configuration);

let attributeDeleteCommand: AttributeDeleteCommand; // (optional)

const { status, data } = await apiInstance.apiAttributeDeleteDelete(
    attributeDeleteCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeDeleteCommand** | **AttributeDeleteCommand**|  | |


### Return type

**AttributeDetailResponseDto**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttributeFilterGet**
> Array<AttributeDetailResponseDto> apiAttributeFilterGet()


### Example

```typescript
import {
    AttributeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeApi(configuration);

let willAcceptTextValues: boolean; // (optional) (default to undefined)
let willBeVisibleForDocumentTree: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiAttributeFilterGet(
    willAcceptTextValues,
    willBeVisibleForDocumentTree
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **willAcceptTextValues** | [**boolean**] |  | (optional) defaults to undefined|
| **willBeVisibleForDocumentTree** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<AttributeDetailResponseDto>**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttributeIdGet**
> AttributeDetailResponseDto apiAttributeIdGet()


### Example

```typescript
import {
    AttributeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiAttributeIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**AttributeDetailResponseDto**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttributeUpdatePut**
> AttributeDetailResponseDto apiAttributeUpdatePut()


### Example

```typescript
import {
    AttributeApi,
    Configuration,
    AttributeUpdateCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeApi(configuration);

let attributeUpdateCommand: AttributeUpdateCommand; // (optional)

const { status, data } = await apiInstance.apiAttributeUpdatePut(
    attributeUpdateCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeUpdateCommand** | **AttributeUpdateCommand**|  | |


### Return type

**AttributeDetailResponseDto**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

