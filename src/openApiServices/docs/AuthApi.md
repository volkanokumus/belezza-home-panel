# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAuthLoginPost**](#apiauthloginpost) | **POST** /api/Auth/login | |
|[**apiAuthLogoutAllPost**](#apiauthlogoutallpost) | **POST** /api/Auth/logout-all | |
|[**apiAuthLogoutPost**](#apiauthlogoutpost) | **POST** /api/Auth/logout | |
|[**apiAuthRegisterPost**](#apiauthregisterpost) | **POST** /api/Auth/register | |

# **apiAuthLoginPost**
> AuthResponseDto apiAuthLoginPost()


### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginRequestDto: LoginRequestDto; // (optional)

const { status, data } = await apiInstance.apiAuthLoginPost(
    loginRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequestDto** | **LoginRequestDto**|  | |


### Return type

**AuthResponseDto**

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

# **apiAuthLogoutAllPost**
> apiAuthLogoutAllPost()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.apiAuthLogoutAllPost();
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

# **apiAuthLogoutPost**
> apiAuthLogoutPost()


### Example

```typescript
import {
    AuthApi,
    Configuration,
    LogoutRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let logoutRequestDto: LogoutRequestDto; // (optional)

const { status, data } = await apiInstance.apiAuthLogoutPost(
    logoutRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logoutRequestDto** | **LogoutRequestDto**|  | |


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

# **apiAuthRegisterPost**
> AuthResponseDto apiAuthRegisterPost()


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerRequestDto: RegisterRequestDto; // (optional)

const { status, data } = await apiInstance.apiAuthRegisterPost(
    registerRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerRequestDto** | **RegisterRequestDto**|  | |


### Return type

**AuthResponseDto**

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

