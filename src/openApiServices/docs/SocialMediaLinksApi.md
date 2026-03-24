# SocialMediaLinksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiSocialMediaLinksActiveGet**](#apisocialmedialinksactiveget) | **GET** /api/SocialMediaLinks/active | |
|[**apiSocialMediaLinksGet**](#apisocialmedialinksget) | **GET** /api/SocialMediaLinks | |
|[**apiSocialMediaLinksIdDelete**](#apisocialmedialinksiddelete) | **DELETE** /api/SocialMediaLinks/{id} | |
|[**apiSocialMediaLinksIdGet**](#apisocialmedialinksidget) | **GET** /api/SocialMediaLinks/{id} | |
|[**apiSocialMediaLinksIdPut**](#apisocialmedialinksidput) | **PUT** /api/SocialMediaLinks/{id} | |
|[**apiSocialMediaLinksPost**](#apisocialmedialinkspost) | **POST** /api/SocialMediaLinks | |

# **apiSocialMediaLinksActiveGet**
> apiSocialMediaLinksActiveGet()


### Example

```typescript
import {
    SocialMediaLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialMediaLinksApi(configuration);

const { status, data } = await apiInstance.apiSocialMediaLinksActiveGet();
```

### Parameters
This endpoint does not have any parameters.


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

# **apiSocialMediaLinksGet**
> apiSocialMediaLinksGet()


### Example

```typescript
import {
    SocialMediaLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialMediaLinksApi(configuration);

let activeOnly: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiSocialMediaLinksGet(
    activeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activeOnly** | [**boolean**] |  | (optional) defaults to undefined|


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

# **apiSocialMediaLinksIdDelete**
> apiSocialMediaLinksIdDelete()


### Example

```typescript
import {
    SocialMediaLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialMediaLinksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiSocialMediaLinksIdDelete(
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

# **apiSocialMediaLinksIdGet**
> apiSocialMediaLinksIdGet()


### Example

```typescript
import {
    SocialMediaLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialMediaLinksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiSocialMediaLinksIdGet(
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

# **apiSocialMediaLinksIdPut**
> apiSocialMediaLinksIdPut()


### Example

```typescript
import {
    SocialMediaLinksApi,
    Configuration,
    UpdateSocialMediaLinkCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialMediaLinksApi(configuration);

let id: number; // (default to undefined)
let updateSocialMediaLinkCommand: UpdateSocialMediaLinkCommand; // (optional)

const { status, data } = await apiInstance.apiSocialMediaLinksIdPut(
    id,
    updateSocialMediaLinkCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSocialMediaLinkCommand** | **UpdateSocialMediaLinkCommand**|  | |
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

# **apiSocialMediaLinksPost**
> apiSocialMediaLinksPost()


### Example

```typescript
import {
    SocialMediaLinksApi,
    Configuration,
    CreateSocialMediaLinkCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialMediaLinksApi(configuration);

let createSocialMediaLinkCommand: CreateSocialMediaLinkCommand; // (optional)

const { status, data } = await apiInstance.apiSocialMediaLinksPost(
    createSocialMediaLinkCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSocialMediaLinkCommand** | **CreateSocialMediaLinkCommand**|  | |


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

