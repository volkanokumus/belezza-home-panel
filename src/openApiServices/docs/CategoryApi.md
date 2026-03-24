# CategoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiCategoryCreateCategoryPost**](#apicategorycreatecategorypost) | **POST** /api/Category/CreateCategory | |
|[**apiCategoryDeleteCategoryDelete**](#apicategorydeletecategorydelete) | **DELETE** /api/Category/DeleteCategory | |
|[**apiCategoryGetActiveCategoriesListGet**](#apicategorygetactivecategorieslistget) | **GET** /api/Category/GetActiveCategoriesList | |
|[**apiCategoryGetCategoriesPost**](#apicategorygetcategoriespost) | **POST** /api/Category/GetCategories | |
|[**apiCategoryGetCategoryByIdPost**](#apicategorygetcategorybyidpost) | **POST** /api/Category/GetCategoryById | |
|[**apiCategoryUpdateCategoryPut**](#apicategoryupdatecategoryput) | **PUT** /api/Category/UpdateCategory | |

# **apiCategoryCreateCategoryPost**
> CategoryDto apiCategoryCreateCategoryPost()


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CategoryCreateRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let categoryCreateRequestDto: CategoryCreateRequestDto; // (optional)

const { status, data } = await apiInstance.apiCategoryCreateCategoryPost(
    categoryCreateRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryCreateRequestDto** | **CategoryCreateRequestDto**|  | |


### Return type

**CategoryDto**

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

# **apiCategoryDeleteCategoryDelete**
> boolean apiCategoryDeleteCategoryDelete()


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CategoryDeleteRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let categoryDeleteRequestDto: CategoryDeleteRequestDto; // (optional)

const { status, data } = await apiInstance.apiCategoryDeleteCategoryDelete(
    categoryDeleteRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryDeleteRequestDto** | **CategoryDeleteRequestDto**|  | |


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

# **apiCategoryGetActiveCategoriesListGet**
> Array<CategoryDto> apiCategoryGetActiveCategoriesListGet()


### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

const { status, data } = await apiInstance.apiCategoryGetActiveCategoriesListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CategoryDto>**

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

# **apiCategoryGetCategoriesPost**
> CategoryGridListResponseDto apiCategoryGetCategoriesPost()


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    DataTablesPaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let dataTablesPaginationRequestDto: DataTablesPaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiCategoryGetCategoriesPost(
    dataTablesPaginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataTablesPaginationRequestDto** | **DataTablesPaginationRequestDto**|  | |


### Return type

**CategoryGridListResponseDto**

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

# **apiCategoryGetCategoryByIdPost**
> CategoryDto apiCategoryGetCategoryByIdPost()


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CategoryGetByIdRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let categoryGetByIdRequestDto: CategoryGetByIdRequestDto; // (optional)

const { status, data } = await apiInstance.apiCategoryGetCategoryByIdPost(
    categoryGetByIdRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryGetByIdRequestDto** | **CategoryGetByIdRequestDto**|  | |


### Return type

**CategoryDto**

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

# **apiCategoryUpdateCategoryPut**
> CategoryDto apiCategoryUpdateCategoryPut()


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CategoryUpdateRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let categoryUpdateRequestDto: CategoryUpdateRequestDto; // (optional)

const { status, data } = await apiInstance.apiCategoryUpdateCategoryPut(
    categoryUpdateRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryUpdateRequestDto** | **CategoryUpdateRequestDto**|  | |


### Return type

**CategoryDto**

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

