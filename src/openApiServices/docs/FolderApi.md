# FolderApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiFolderActiveFoldersGet**](#apifolderactivefoldersget) | **GET** /api/Folder/ActiveFolders | |
|[**apiFolderCreatePost**](#apifoldercreatepost) | **POST** /api/Folder/Create | |
|[**apiFolderDeleteDelete**](#apifolderdeletedelete) | **DELETE** /api/Folder/Delete | |
|[**apiFolderFolderGridListPost**](#apifolderfoldergridlistpost) | **POST** /api/Folder/FolderGridList | |
|[**apiFolderIdGet**](#apifolderidget) | **GET** /api/Folder/{Id} | |
|[**apiFolderTreeListGet**](#apifoldertreelistget) | **GET** /api/Folder/TreeList | |
|[**apiFolderUpdatePut**](#apifolderupdateput) | **PUT** /api/Folder/Update | |

# **apiFolderActiveFoldersGet**
> Array<FolderDetailResponseDto> apiFolderActiveFoldersGet()


### Example

```typescript
import {
    FolderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

const { status, data } = await apiInstance.apiFolderActiveFoldersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FolderDetailResponseDto>**

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

# **apiFolderCreatePost**
> FolderDetailResponseDto apiFolderCreatePost()


### Example

```typescript
import {
    FolderApi,
    Configuration,
    FolderCreateCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

let folderCreateCommand: FolderCreateCommand; // (optional)

const { status, data } = await apiInstance.apiFolderCreatePost(
    folderCreateCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderCreateCommand** | **FolderCreateCommand**|  | |


### Return type

**FolderDetailResponseDto**

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

# **apiFolderDeleteDelete**
> apiFolderDeleteDelete()


### Example

```typescript
import {
    FolderApi,
    Configuration,
    FolderDeleteCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

let folderDeleteCommand: FolderDeleteCommand; // (optional)

const { status, data } = await apiInstance.apiFolderDeleteDelete(
    folderDeleteCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderDeleteCommand** | **FolderDeleteCommand**|  | |


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

# **apiFolderFolderGridListPost**
> FolderGridListResponseDto apiFolderFolderGridListPost()


### Example

```typescript
import {
    FolderApi,
    Configuration,
    DataTablesPaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

let dataTablesPaginationRequestDto: DataTablesPaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiFolderFolderGridListPost(
    dataTablesPaginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataTablesPaginationRequestDto** | **DataTablesPaginationRequestDto**|  | |


### Return type

**FolderGridListResponseDto**

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

# **apiFolderIdGet**
> FolderDetailResponseDto apiFolderIdGet()


### Example

```typescript
import {
    FolderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiFolderIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**FolderDetailResponseDto**

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

# **apiFolderTreeListGet**
> Array<FolderTreeDto> apiFolderTreeListGet()


### Example

```typescript
import {
    FolderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

let rootFolderId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFolderTreeListGet(
    rootFolderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rootFolderId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<FolderTreeDto>**

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

# **apiFolderUpdatePut**
> FolderDetailResponseDto apiFolderUpdatePut()


### Example

```typescript
import {
    FolderApi,
    Configuration,
    FolderUpdateCommand
} from './api';

const configuration = new Configuration();
const apiInstance = new FolderApi(configuration);

let folderUpdateCommand: FolderUpdateCommand; // (optional)

const { status, data } = await apiInstance.apiFolderUpdatePut(
    folderUpdateCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderUpdateCommand** | **FolderUpdateCommand**|  | |


### Return type

**FolderDetailResponseDto**

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

