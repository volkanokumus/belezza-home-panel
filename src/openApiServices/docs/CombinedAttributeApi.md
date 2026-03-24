# CombinedAttributeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiCombinedAttributeCreateCombinedAttributePost**](#apicombinedattributecreatecombinedattributepost) | **POST** /api/CombinedAttribute/CreateCombinedAttribute | |
|[**apiCombinedAttributeDeleteCombinedAttributeDelete**](#apicombinedattributedeletecombinedattributedelete) | **DELETE** /api/CombinedAttribute/DeleteCombinedAttribute | |
|[**apiCombinedAttributeGetCombinedAttributeByIdPost**](#apicombinedattributegetcombinedattributebyidpost) | **POST** /api/CombinedAttribute/GetCombinedAttributeById | |
|[**apiCombinedAttributeGetCombinedAttributesPost**](#apicombinedattributegetcombinedattributespost) | **POST** /api/CombinedAttribute/GetCombinedAttributes | |
|[**apiCombinedAttributeUpdateCombinedAttributePut**](#apicombinedattributeupdatecombinedattributeput) | **PUT** /api/CombinedAttribute/UpdateCombinedAttribute | |

# **apiCombinedAttributeCreateCombinedAttributePost**
> CombinedAttributeDto apiCombinedAttributeCreateCombinedAttributePost()


### Example

```typescript
import {
    CombinedAttributeApi,
    Configuration,
    CombinedAttributeCreateCommandDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CombinedAttributeApi(configuration);

let combinedAttributeCreateCommandDto: CombinedAttributeCreateCommandDto; // (optional)

const { status, data } = await apiInstance.apiCombinedAttributeCreateCombinedAttributePost(
    combinedAttributeCreateCommandDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **combinedAttributeCreateCommandDto** | **CombinedAttributeCreateCommandDto**|  | |


### Return type

**CombinedAttributeDto**

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

# **apiCombinedAttributeDeleteCombinedAttributeDelete**
> boolean apiCombinedAttributeDeleteCombinedAttributeDelete()


### Example

```typescript
import {
    CombinedAttributeApi,
    Configuration,
    CombinedAttributeDeleteCommandDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CombinedAttributeApi(configuration);

let combinedAttributeDeleteCommandDto: CombinedAttributeDeleteCommandDto; // (optional)

const { status, data } = await apiInstance.apiCombinedAttributeDeleteCombinedAttributeDelete(
    combinedAttributeDeleteCommandDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **combinedAttributeDeleteCommandDto** | **CombinedAttributeDeleteCommandDto**|  | |


### Return type

**boolean**

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

# **apiCombinedAttributeGetCombinedAttributeByIdPost**
> CombinedAttributeDto apiCombinedAttributeGetCombinedAttributeByIdPost()


### Example

```typescript
import {
    CombinedAttributeApi,
    Configuration,
    CombinedAttributeGetByIdRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CombinedAttributeApi(configuration);

let combinedAttributeGetByIdRequestDto: CombinedAttributeGetByIdRequestDto; // (optional)

const { status, data } = await apiInstance.apiCombinedAttributeGetCombinedAttributeByIdPost(
    combinedAttributeGetByIdRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **combinedAttributeGetByIdRequestDto** | **CombinedAttributeGetByIdRequestDto**|  | |


### Return type

**CombinedAttributeDto**

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

# **apiCombinedAttributeGetCombinedAttributesPost**
> CombinedAttributeGridListResponseDto apiCombinedAttributeGetCombinedAttributesPost()


### Example

```typescript
import {
    CombinedAttributeApi,
    Configuration,
    DataTablesPaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CombinedAttributeApi(configuration);

let dataTablesPaginationRequestDto: DataTablesPaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiCombinedAttributeGetCombinedAttributesPost(
    dataTablesPaginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataTablesPaginationRequestDto** | **DataTablesPaginationRequestDto**|  | |


### Return type

**CombinedAttributeGridListResponseDto**

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

# **apiCombinedAttributeUpdateCombinedAttributePut**
> CombinedAttributeDto apiCombinedAttributeUpdateCombinedAttributePut()


### Example

```typescript
import {
    CombinedAttributeApi,
    Configuration,
    CombinedAttributeUpdateCommandDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CombinedAttributeApi(configuration);

let combinedAttributeUpdateCommandDto: CombinedAttributeUpdateCommandDto; // (optional)

const { status, data } = await apiInstance.apiCombinedAttributeUpdateCombinedAttributePut(
    combinedAttributeUpdateCommandDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **combinedAttributeUpdateCommandDto** | **CombinedAttributeUpdateCommandDto**|  | |


### Return type

**CombinedAttributeDto**

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

