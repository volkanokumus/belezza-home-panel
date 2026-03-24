# MenusApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiMenusGet**](#apimenusget) | **GET** /api/Menus | |
|[**apiMenusIdDelete**](#apimenusiddelete) | **DELETE** /api/Menus/{id} | |
|[**apiMenusIdGet**](#apimenusidget) | **GET** /api/Menus/{id} | |
|[**apiMenusIdPut**](#apimenusidput) | **PUT** /api/Menus/{id} | |
|[**apiMenusPost**](#apimenuspost) | **POST** /api/Menus | |
|[**apiMenusTreeMenuTypeGet**](#apimenustreemenutypeget) | **GET** /api/Menus/tree/{menuType} | |

# **apiMenusGet**
> Array<MenuDto> apiMenusGet()


### Example

```typescript
import {
    MenusApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MenusApi(configuration);

let menuType: MenuType; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiMenusGet(
    menuType,
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **menuType** | **MenuType** |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<MenuDto>**

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

# **apiMenusIdDelete**
> apiMenusIdDelete()


### Example

```typescript
import {
    MenusApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MenusApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiMenusIdDelete(
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

# **apiMenusIdGet**
> MenuDto apiMenusIdGet()


### Example

```typescript
import {
    MenusApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MenusApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiMenusIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**MenuDto**

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

# **apiMenusIdPut**
> MenuDto apiMenusIdPut()


### Example

```typescript
import {
    MenusApi,
    Configuration,
    UpdateMenuDto
} from './api';

const configuration = new Configuration();
const apiInstance = new MenusApi(configuration);

let id: number; // (default to undefined)
let updateMenuDto: UpdateMenuDto; // (optional)

const { status, data } = await apiInstance.apiMenusIdPut(
    id,
    updateMenuDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMenuDto** | **UpdateMenuDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**MenuDto**

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

# **apiMenusPost**
> MenuDto apiMenusPost()


### Example

```typescript
import {
    MenusApi,
    Configuration,
    CreateMenuDto
} from './api';

const configuration = new Configuration();
const apiInstance = new MenusApi(configuration);

let createMenuDto: CreateMenuDto; // (optional)

const { status, data } = await apiInstance.apiMenusPost(
    createMenuDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMenuDto** | **CreateMenuDto**|  | |


### Return type

**MenuDto**

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

# **apiMenusTreeMenuTypeGet**
> MenuTreeDto apiMenusTreeMenuTypeGet()


### Example

```typescript
import {
    MenusApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MenusApi(configuration);

let menuType: MenuType; // (default to undefined)
let activeOnly: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.apiMenusTreeMenuTypeGet(
    menuType,
    activeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **menuType** | **MenuType** |  | defaults to undefined|
| **activeOnly** | [**boolean**] |  | (optional) defaults to true|


### Return type

**MenuTreeDto**

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

