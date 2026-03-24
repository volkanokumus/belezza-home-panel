# ContactApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiContactGet**](#apicontactget) | **GET** /api/Contact | |
|[**apiContactIdGet**](#apicontactidget) | **GET** /api/Contact/{id} | |
|[**apiContactPost**](#apicontactpost) | **POST** /api/Contact | |

# **apiContactGet**
> Array<ContactDto> apiContactGet()


### Example

```typescript
import {
    ContactApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactApi(configuration);

const { status, data } = await apiInstance.apiContactGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ContactDto>**

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

# **apiContactIdGet**
> ContactDto apiContactIdGet()


### Example

```typescript
import {
    ContactApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiContactIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ContactDto**

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

# **apiContactPost**
> ContactDto apiContactPost()


### Example

```typescript
import {
    ContactApi,
    Configuration,
    CreateContactDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactApi(configuration);

let createContactDto: CreateContactDto; // (optional)

const { status, data } = await apiInstance.apiContactPost(
    createContactDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createContactDto** | **CreateContactDto**|  | |


### Return type

**ContactDto**

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

