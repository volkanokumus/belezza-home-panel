# PagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiPagesGet**](#apipagesget) | **GET** /api/Pages | |
|[**apiPagesIdDelete**](#apipagesiddelete) | **DELETE** /api/Pages/{id} | |
|[**apiPagesIdGet**](#apipagesidget) | **GET** /api/Pages/{id} | |
|[**apiPagesIdPut**](#apipagesidput) | **PUT** /api/Pages/{id} | |
|[**apiPagesPost**](#apipagespost) | **POST** /api/Pages | |

# **apiPagesGet**
> apiPagesGet()


### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let status: number; // (optional) (default to undefined)
let template: number; // (optional) (default to undefined)
let publishedOnly: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiPagesGet(
    status,
    template,
    publishedOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**number**] |  | (optional) defaults to undefined|
| **template** | [**number**] |  | (optional) defaults to undefined|
| **publishedOnly** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPagesIdDelete**
> apiPagesIdDelete()


### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiPagesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPagesIdGet**
> apiPagesIdGet()


### Example

```typescript
import {
    PagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiPagesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPagesIdPut**
> apiPagesIdPut()


### Example

```typescript
import {
    PagesApi,
    Configuration,
    UpdatePageCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let id: number; // (default to undefined)
let updatePageCommand: UpdatePageCommand; // (optional)

const { status, data } = await apiInstance.apiPagesIdPut(
    id,
    updatePageCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePageCommand** | **UpdatePageCommand**|  | |
| **id** | [**number**] |  | defaults to undefined|


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

# **apiPagesPost**
> apiPagesPost()


### Example

```typescript
import {
    PagesApi,
    Configuration,
    CreatePageCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new PagesApi(configuration);

let createPageCommand: CreatePageCommand; // (optional)

const { status, data } = await apiInstance.apiPagesPost(
    createPageCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPageCommand** | **CreatePageCommand**|  | |


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

