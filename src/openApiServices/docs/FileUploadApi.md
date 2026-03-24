# FileUploadApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiFileUploadDeleteDelete**](#apifileuploaddeletedelete) | **DELETE** /api/FileUpload/delete | |
|[**apiFileUploadDownloadGet**](#apifileuploaddownloadget) | **GET** /api/FileUpload/download | |
|[**apiFileUploadFilePost**](#apifileuploadfilepost) | **POST** /api/FileUpload/file | |
|[**apiFileUploadImagePost**](#apifileuploadimagepost) | **POST** /api/FileUpload/image | |
|[**apiFileUploadImagesMultiplePost**](#apifileuploadimagesmultiplepost) | **POST** /api/FileUpload/images/multiple | |

# **apiFileUploadDeleteDelete**
> apiFileUploadDeleteDelete()


### Example

```typescript
import {
    FileUploadApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileUploadApi(configuration);

let filePath: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadDeleteDelete(
    filePath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filePath** | [**string**] |  | (optional) defaults to undefined|


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

# **apiFileUploadDownloadGet**
> apiFileUploadDownloadGet()


### Example

```typescript
import {
    FileUploadApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileUploadApi(configuration);

let filePath: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadDownloadGet(
    filePath
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filePath** | [**string**] |  | (optional) defaults to undefined|


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

# **apiFileUploadFilePost**
> FileUploadResult apiFileUploadFilePost()


### Example

```typescript
import {
    FileUploadApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileUploadApi(configuration);

let folder: string; // (optional) (default to 'documents')
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadFilePost(
    folder,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folder** | [**string**] |  | (optional) defaults to 'documents'|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**FileUploadResult**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiFileUploadImagePost**
> FileUploadResult apiFileUploadImagePost()


### Example

```typescript
import {
    FileUploadApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileUploadApi(configuration);

let folder: string; // (optional) (default to 'sliders')
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadImagePost(
    folder,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folder** | [**string**] |  | (optional) defaults to 'sliders'|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**FileUploadResult**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiFileUploadImagesMultiplePost**
> Array<FileUploadResult> apiFileUploadImagesMultiplePost()


### Example

```typescript
import {
    FileUploadApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileUploadApi(configuration);

let folder: string; // (optional) (default to 'sliders')
let files: Array<File>; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadImagesMultiplePost(
    folder,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folder** | [**string**] |  | (optional) defaults to 'sliders'|
| **files** | **Array&lt;File&gt;** |  | (optional) defaults to undefined|


### Return type

**Array<FileUploadResult>**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

