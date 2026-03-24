# FileApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiFileDeleteFileDelete**](#apifiledeletefiledelete) | **DELETE** /api/File/DeleteFile | |
|[**apiFileGetAllPost**](#apifilegetallpost) | **POST** /api/File/GetAll | |
|[**apiFileGetFileFileIdGet**](#apifilegetfilefileidget) | **GET** /api/File/GetFile/{FileId} | |
|[**apiFileSearchPost**](#apifilesearchpost) | **POST** /api/File/search | |
|[**apiFileStreamFilePost**](#apifilestreamfilepost) | **POST** /api/File/StreamFile | |
|[**apiFileUpdateFileInfoPut**](#apifileupdatefileinfoput) | **PUT** /api/File/UpdateFileInfo | |
|[**apiFileUpdateFilePut**](#apifileupdatefileput) | **PUT** /api/File/UpdateFile | |
|[**apiFileUploadFileFromTreeNodePost**](#apifileuploadfilefromtreenodepost) | **POST** /api/File/UploadFileFromTreeNode | |
|[**apiFileUploadFilePost**](#apifileuploadfilepost) | **POST** /api/File/UploadFile | |
|[**apiFileUploadFileToFolderPost**](#apifileuploadfiletofolderpost) | **POST** /api/File/UploadFileToFolder | |

# **apiFileDeleteFileDelete**
> apiFileDeleteFileDelete()


### Example

```typescript
import {
    FileApi,
    Configuration,
    DeleteFileDto
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let deleteFileDto: DeleteFileDto; // (optional)

const { status, data } = await apiInstance.apiFileDeleteFileDelete(
    deleteFileDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteFileDto** | **DeleteFileDto**|  | |


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

# **apiFileGetAllPost**
> FileGridListResponseDto apiFileGetAllPost()


### Example

```typescript
import {
    FileApi,
    Configuration,
    DataTablesPaginationRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let dataTablesPaginationRequestDto: DataTablesPaginationRequestDto; // (optional)

const { status, data } = await apiInstance.apiFileGetAllPost(
    dataTablesPaginationRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataTablesPaginationRequestDto** | **DataTablesPaginationRequestDto**|  | |


### Return type

**FileGridListResponseDto**

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

# **apiFileGetFileFileIdGet**
> GetFileResponseDto apiFileGetFileFileIdGet()


### Example

```typescript
import {
    FileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let fileId: number; // (default to undefined)

const { status, data } = await apiInstance.apiFileGetFileFileIdGet(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] |  | defaults to undefined|


### Return type

**GetFileResponseDto**

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

# **apiFileSearchPost**
> FileGridListResponseDto apiFileSearchPost()


### Example

```typescript
import {
    FileApi,
    Configuration,
    FileSearchRequestDto
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let fileSearchRequestDto: FileSearchRequestDto; // (optional)

const { status, data } = await apiInstance.apiFileSearchPost(
    fileSearchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileSearchRequestDto** | **FileSearchRequestDto**|  | |


### Return type

**FileGridListResponseDto**

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

# **apiFileStreamFilePost**
> StreamFileResponseDto apiFileStreamFilePost()


### Example

```typescript
import {
    FileApi,
    Configuration,
    GetFileDto
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let getFileDto: GetFileDto; // (optional)

const { status, data } = await apiInstance.apiFileStreamFilePost(
    getFileDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getFileDto** | **GetFileDto**|  | |


### Return type

**StreamFileResponseDto**

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

# **apiFileUpdateFileInfoPut**
> UpdateFileResponseDto apiFileUpdateFileInfoPut()


### Example

```typescript
import {
    FileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let fileId: number; // (optional) (default to undefined)
let fileName: string; // (optional) (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUpdateFileInfoPut(
    fileId,
    fileName,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] |  | (optional) defaults to undefined|
| **fileName** | [**string**] |  | (optional) defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**UpdateFileResponseDto**

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

# **apiFileUpdateFilePut**
> UpdateFileResponseDto apiFileUpdateFilePut()


### Example

```typescript
import {
    FileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let fileId: number; // (optional) (default to undefined)
let fileName: string; // (optional) (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUpdateFilePut(
    fileId,
    fileName,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] |  | (optional) defaults to undefined|
| **fileName** | [**string**] |  | (optional) defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**UpdateFileResponseDto**

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

# **apiFileUploadFileFromTreeNodePost**
> FileUploadResponseDto apiFileUploadFileFromTreeNodePost()


### Example

```typescript
import {
    FileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let mainAttributeId: MainAttributeEnum; //Attribute ozellik degerleri:    1 -> Musteri    2 -> Taseron    3 -> Grup Ici Evraklar    4 -> Resmi, Dernek, Diger    5 -> Diger (optional) (default to undefined)
let kunnCustomerPairedValue: number; // (optional) (default to undefined)
let fileName: string; // (optional) (default to undefined)
let nodeId: DocumentNode; //Kirilim ozellik degerleri:    6 -> Gas Engineering Dokumanlar    7 -> Lojistik Dokumanlar    8 -> Yazismalar    9 -> Sozlesme ve Ekleri    10 -> Diger    26 -> Finans    27 -> IT    28 -> Resmi    29 -> Dernek (optional) (default to undefined)
let subNodeId: DocumentSubNode; //Alt kirilim ozellik degerleri:    11 -> Ani Mudahale Formu    12 -> Ic Tesisat Periyodik Bakimlari    13 -> Koku Servis Formlari    14 -> Montaj ve Demontaj    15 -> Tank Periyodik Bakimlari    16 -> Teslim Tutanaklari    17 -> Irsaliye    18 -> Kantar Fisleri    19 -> Mail Yazisma    20 -> Gelen Evrak    21 -> Giden Evrak    22 -> Sozlesme ve Ekleri    23 -> Protokol Zeyilname    24 -> BTM    25 -> Diger    30 -> Evrak (optional) (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadFileFromTreeNodePost(
    mainAttributeId,
    kunnCustomerPairedValue,
    fileName,
    nodeId,
    subNodeId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mainAttributeId** | **MainAttributeEnum** | Attribute ozellik degerleri:    1 -&gt; Musteri    2 -&gt; Taseron    3 -&gt; Grup Ici Evraklar    4 -&gt; Resmi, Dernek, Diger    5 -&gt; Diger | (optional) defaults to undefined|
| **kunnCustomerPairedValue** | [**number**] |  | (optional) defaults to undefined|
| **fileName** | [**string**] |  | (optional) defaults to undefined|
| **nodeId** | **DocumentNode** | Kirilim ozellik degerleri:    6 -&gt; Gas Engineering Dokumanlar    7 -&gt; Lojistik Dokumanlar    8 -&gt; Yazismalar    9 -&gt; Sozlesme ve Ekleri    10 -&gt; Diger    26 -&gt; Finans    27 -&gt; IT    28 -&gt; Resmi    29 -&gt; Dernek | (optional) defaults to undefined|
| **subNodeId** | **DocumentSubNode** | Alt kirilim ozellik degerleri:    11 -&gt; Ani Mudahale Formu    12 -&gt; Ic Tesisat Periyodik Bakimlari    13 -&gt; Koku Servis Formlari    14 -&gt; Montaj ve Demontaj    15 -&gt; Tank Periyodik Bakimlari    16 -&gt; Teslim Tutanaklari    17 -&gt; Irsaliye    18 -&gt; Kantar Fisleri    19 -&gt; Mail Yazisma    20 -&gt; Gelen Evrak    21 -&gt; Giden Evrak    22 -&gt; Sozlesme ve Ekleri    23 -&gt; Protokol Zeyilname    24 -&gt; BTM    25 -&gt; Diger    30 -&gt; Evrak | (optional) defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**FileUploadResponseDto**

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

# **apiFileUploadFilePost**
> FileUploadResponseDto apiFileUploadFilePost()


### Example

```typescript
import {
    FileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let mainAttributeId: MainAttributeEnum; //Attribute ozellik degerleri:    1 -> Musteri    2 -> Taseron    3 -> Grup Ici Evraklar    4 -> Resmi, Dernek, Diger    5 -> Diger (optional) (default to undefined)
let kunnCustomerPairedValue: string; // (optional) (default to undefined)
let fileName: string; // (optional) (default to undefined)
let nodeId: DocumentNode; //Kirilim ozellik degerleri:    6 -> Gas Engineering Dokumanlar    7 -> Lojistik Dokumanlar    8 -> Yazismalar    9 -> Sozlesme ve Ekleri    10 -> Diger    26 -> Finans    27 -> IT    28 -> Resmi    29 -> Dernek (optional) (default to undefined)
let subNodeId: DocumentSubNode; //Alt kirilim ozellik degerleri:    11 -> Ani Mudahale Formu    12 -> Ic Tesisat Periyodik Bakimlari    13 -> Koku Servis Formlari    14 -> Montaj ve Demontaj    15 -> Tank Periyodik Bakimlari    16 -> Teslim Tutanaklari    17 -> Irsaliye    18 -> Kantar Fisleri    19 -> Mail Yazisma    20 -> Gelen Evrak    21 -> Giden Evrak    22 -> Sozlesme ve Ekleri    23 -> Protokol Zeyilname    24 -> BTM    25 -> Diger    30 -> Evrak (optional) (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadFilePost(
    mainAttributeId,
    kunnCustomerPairedValue,
    fileName,
    nodeId,
    subNodeId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mainAttributeId** | **MainAttributeEnum** | Attribute ozellik degerleri:    1 -&gt; Musteri    2 -&gt; Taseron    3 -&gt; Grup Ici Evraklar    4 -&gt; Resmi, Dernek, Diger    5 -&gt; Diger | (optional) defaults to undefined|
| **kunnCustomerPairedValue** | [**string**] |  | (optional) defaults to undefined|
| **fileName** | [**string**] |  | (optional) defaults to undefined|
| **nodeId** | **DocumentNode** | Kirilim ozellik degerleri:    6 -&gt; Gas Engineering Dokumanlar    7 -&gt; Lojistik Dokumanlar    8 -&gt; Yazismalar    9 -&gt; Sozlesme ve Ekleri    10 -&gt; Diger    26 -&gt; Finans    27 -&gt; IT    28 -&gt; Resmi    29 -&gt; Dernek | (optional) defaults to undefined|
| **subNodeId** | **DocumentSubNode** | Alt kirilim ozellik degerleri:    11 -&gt; Ani Mudahale Formu    12 -&gt; Ic Tesisat Periyodik Bakimlari    13 -&gt; Koku Servis Formlari    14 -&gt; Montaj ve Demontaj    15 -&gt; Tank Periyodik Bakimlari    16 -&gt; Teslim Tutanaklari    17 -&gt; Irsaliye    18 -&gt; Kantar Fisleri    19 -&gt; Mail Yazisma    20 -&gt; Gelen Evrak    21 -&gt; Giden Evrak    22 -&gt; Sozlesme ve Ekleri    23 -&gt; Protokol Zeyilname    24 -&gt; BTM    25 -&gt; Diger    30 -&gt; Evrak | (optional) defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**FileUploadResponseDto**

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

# **apiFileUploadFileToFolderPost**
> FolderFileUploadResponseDto apiFileUploadFileToFolderPost()


### Example

```typescript
import {
    FileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileApi(configuration);

let file: File; // (optional) (default to undefined)
let folderId: number; // (optional) (default to undefined)
let fileDisplayName: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiFileUploadFileToFolderPost(
    file,
    folderId,
    fileDisplayName,
    description
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|
| **folderId** | [**number**] |  | (optional) defaults to undefined|
| **fileDisplayName** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FolderFileUploadResponseDto**

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

