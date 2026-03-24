# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiUserCreateUserPost**](#apiusercreateuserpost) | **POST** /api/User/CreateUser | |
|[**apiUserDeleteUserDelete**](#apiuserdeleteuserdelete) | **DELETE** /api/User/DeleteUser | |
|[**apiUserGetActiveUserInfoGet**](#apiusergetactiveuserinfoget) | **GET** /api/User/GetActiveUserInfo | |
|[**apiUserGetUserListPost**](#apiusergetuserlistpost) | **POST** /api/User/GetUserList | |
|[**apiUserGetUserPost**](#apiusergetuserpost) | **POST** /api/User/GetUser | |
|[**apiUserUpdateUserPasswordPost**](#apiuserupdateuserpasswordpost) | **POST** /api/User/UpdateUserPassword | |
|[**apiUserUpdateUserPost**](#apiuserupdateuserpost) | **POST** /api/User/UpdateUser | |

# **apiUserCreateUserPost**
> UserDto apiUserCreateUserPost()


### Example

```typescript
import {
    UserApi,
    Configuration,
    CreateUserRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let createUserRequestDto: CreateUserRequestDto; // (optional)

const { status, data } = await apiInstance.apiUserCreateUserPost(
    createUserRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserRequestDto** | **CreateUserRequestDto**|  | |


### Return type

**UserDto**

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

# **apiUserDeleteUserDelete**
> boolean apiUserDeleteUserDelete()


### Example

```typescript
import {
    UserApi,
    Configuration,
    IdentityIdRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let identityIdRequestDto: IdentityIdRequestDto; // (optional)

const { status, data } = await apiInstance.apiUserDeleteUserDelete(
    identityIdRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityIdRequestDto** | **IdentityIdRequestDto**|  | |


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

# **apiUserGetActiveUserInfoGet**
> UserDto apiUserGetActiveUserInfoGet()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.apiUserGetActiveUserInfoGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserDto**

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

# **apiUserGetUserListPost**
> UserGridListDto apiUserGetUserListPost()


### Example

```typescript
import {
    UserApi,
    Configuration,
    PaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let paginationRequestDto: PaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiUserGetUserListPost(
    paginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequestDto** | **PaginationRequestDto**|  | |


### Return type

**UserGridListDto**

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

# **apiUserGetUserPost**
> UserDto apiUserGetUserPost()


### Example

```typescript
import {
    UserApi,
    Configuration,
    IdentityIdRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let identityIdRequestDto: IdentityIdRequestDto; // (optional)

const { status, data } = await apiInstance.apiUserGetUserPost(
    identityIdRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identityIdRequestDto** | **IdentityIdRequestDto**|  | |


### Return type

**UserDto**

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

# **apiUserUpdateUserPasswordPost**
> boolean apiUserUpdateUserPasswordPost()


### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserPasswordDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let updateUserPasswordDto: UpdateUserPasswordDto; // (optional)

const { status, data } = await apiInstance.apiUserUpdateUserPasswordPost(
    updateUserPasswordDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserPasswordDto** | **UpdateUserPasswordDto**|  | |


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

# **apiUserUpdateUserPost**
> boolean apiUserUpdateUserPost()


### Example

```typescript
import {
    UserApi,
    Configuration,
    CreateUserRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let createUserRequestDto: CreateUserRequestDto; // (optional)

const { status, data } = await apiInstance.apiUserUpdateUserPost(
    createUserRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserRequestDto** | **CreateUserRequestDto**|  | |


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

