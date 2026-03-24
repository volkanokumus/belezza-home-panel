# AuthorizationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAuthorizationAzureAdAuthorizeRequestGet**](#apiauthorizationazureadauthorizerequestget) | **GET** /api/Authorization/AzureAdAuthorizeRequest | |
|[**apiAuthorizationLoginAzureLoginPost**](#apiauthorizationloginazureloginpost) | **POST** /api/Authorization/Login/AzureLogin | |
|[**apiAuthorizationLoginPost**](#apiauthorizationloginpost) | **POST** /api/Authorization/Login | |
|[**apiAuthorizationLogoutPost**](#apiauthorizationlogoutpost) | **POST** /api/Authorization/Logout | |

# **apiAuthorizationAzureAdAuthorizeRequestGet**
> apiAuthorizationAzureAdAuthorizeRequestGet()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

const { status, data } = await apiInstance.apiAuthorizationAzureAdAuthorizeRequestGet();
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

# **apiAuthorizationLoginAzureLoginPost**
> AuthResponseDto apiAuthorizationLoginAzureLoginPost()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration,
    AzureCodeRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let azureCodeRequestDto: AzureCodeRequestDto; // (optional)

const { status, data } = await apiInstance.apiAuthorizationLoginAzureLoginPost(
    azureCodeRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **azureCodeRequestDto** | **AzureCodeRequestDto**|  | |


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

# **apiAuthorizationLoginPost**
> AuthResponseDto apiAuthorizationLoginPost()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration,
    AuthRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let authRequestDto: AuthRequestDto; // (optional)

const { status, data } = await apiInstance.apiAuthorizationLoginPost(
    authRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequestDto** | **AuthRequestDto**|  | |


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

# **apiAuthorizationLogoutPost**
> apiAuthorizationLogoutPost()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

const { status, data } = await apiInstance.apiAuthorizationLogoutPost();
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

