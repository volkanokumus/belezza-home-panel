# AttributeValuesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAttributeValuesAttributeValuesListPost**](#apiattributevaluesattributevalueslistpost) | **POST** /api/AttributeValues/AttributeValuesList | |
|[**apiAttributeValuesCreatePost**](#apiattributevaluescreatepost) | **POST** /api/AttributeValues/Create | |
|[**apiAttributeValuesDeleteDelete**](#apiattributevaluesdeletedelete) | **DELETE** /api/AttributeValues/Delete | |
|[**apiAttributeValuesGetAttributeValueSubAttributesPost**](#apiattributevaluesgetattributevaluesubattributespost) | **POST** /api/AttributeValues/GetAttributeValueSubAttributes | |
|[**apiAttributeValuesGetAttributeValuesByAttributeIdAttributeIdGet**](#apiattributevaluesgetattributevaluesbyattributeidattributeidget) | **GET** /api/AttributeValues/GetAttributeValuesByAttributeId/{attributeId} | |
|[**apiAttributeValuesGetKunnValuesPost**](#apiattributevaluesgetkunnvaluespost) | **POST** /api/AttributeValues/GetKunnValues | |
|[**apiAttributeValuesGetMainAttributeValuesListGet**](#apiattributevaluesgetmainattributevalueslistget) | **GET** /api/AttributeValues/GetMainAttributeValuesList | |
|[**apiAttributeValuesIdGet**](#apiattributevaluesidget) | **GET** /api/AttributeValues/{Id} | |
|[**apiAttributeValuesUpdatePut**](#apiattributevaluesupdateput) | **PUT** /api/AttributeValues/Update | |

# **apiAttributeValuesAttributeValuesListPost**
> AttributeValuesGridListResponseDto apiAttributeValuesAttributeValuesListPost()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration,
    DataTablesPaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let dataTablesPaginationRequestDto: DataTablesPaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiAttributeValuesAttributeValuesListPost(
    dataTablesPaginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataTablesPaginationRequestDto** | **DataTablesPaginationRequestDto**|  | |


### Return type

**AttributeValuesGridListResponseDto**

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

# **apiAttributeValuesCreatePost**
> AttributeValuesDetailResponseDto apiAttributeValuesCreatePost()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration,
    AttributeValuesCreateCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let attributeValuesCreateCommand: AttributeValuesCreateCommand; // (optional)

const { status, data } = await apiInstance.apiAttributeValuesCreatePost(
    attributeValuesCreateCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeValuesCreateCommand** | **AttributeValuesCreateCommand**|  | |


### Return type

**AttributeValuesDetailResponseDto**

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

# **apiAttributeValuesDeleteDelete**
> apiAttributeValuesDeleteDelete()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration,
    AttributeValuesDeleteCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let attributeValuesDeleteCommand: AttributeValuesDeleteCommand; // (optional)

const { status, data } = await apiInstance.apiAttributeValuesDeleteDelete(
    attributeValuesDeleteCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeValuesDeleteCommand** | **AttributeValuesDeleteCommand**|  | |


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttributeValuesGetAttributeValueSubAttributesPost**
> GetAttributeValueSubAttributesResponseDto apiAttributeValuesGetAttributeValueSubAttributesPost()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration,
    GetAttributeValueSubAttributesRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let getAttributeValueSubAttributesRequestDto: GetAttributeValueSubAttributesRequestDto; // (optional)

const { status, data } = await apiInstance.apiAttributeValuesGetAttributeValueSubAttributesPost(
    getAttributeValueSubAttributesRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getAttributeValueSubAttributesRequestDto** | **GetAttributeValueSubAttributesRequestDto**|  | |


### Return type

**GetAttributeValueSubAttributesResponseDto**

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

# **apiAttributeValuesGetAttributeValuesByAttributeIdAttributeIdGet**
> Array<AttributeValuesDetailResponseDto> apiAttributeValuesGetAttributeValuesByAttributeIdAttributeIdGet()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let attributeId: number; // (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiAttributeValuesGetAttributeValuesByAttributeIdAttributeIdGet(
    attributeId,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeId** | [**number**] |  | defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AttributeValuesDetailResponseDto>**

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

# **apiAttributeValuesGetKunnValuesPost**
> Array<KunnValueResponseDto> apiAttributeValuesGetKunnValuesPost()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration,
    ListKunnValuesRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let listKunnValuesRequestDto: ListKunnValuesRequestDto; // (optional)

const { status, data } = await apiInstance.apiAttributeValuesGetKunnValuesPost(
    listKunnValuesRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listKunnValuesRequestDto** | **ListKunnValuesRequestDto**|  | |


### Return type

**Array<KunnValueResponseDto>**

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

# **apiAttributeValuesGetMainAttributeValuesListGet**
> Array<GetAttributeValueSubAttributesResponseDto> apiAttributeValuesGetMainAttributeValuesListGet()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

const { status, data } = await apiInstance.apiAttributeValuesGetMainAttributeValuesListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetAttributeValueSubAttributesResponseDto>**

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

# **apiAttributeValuesIdGet**
> AttributeValuesDetailResponseDto apiAttributeValuesIdGet()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiAttributeValuesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**AttributeValuesDetailResponseDto**

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

# **apiAttributeValuesUpdatePut**
> AttributeValuesDetailResponseDto apiAttributeValuesUpdatePut()


### Example

```typescript
import {
    AttributeValuesApi,
    Configuration,
    AttributeValuesUpdateCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new AttributeValuesApi(configuration);

let attributeValuesUpdateCommand: AttributeValuesUpdateCommand; // (optional)

const { status, data } = await apiInstance.apiAttributeValuesUpdatePut(
    attributeValuesUpdateCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attributeValuesUpdateCommand** | **AttributeValuesUpdateCommand**|  | |


### Return type

**AttributeValuesDetailResponseDto**

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

