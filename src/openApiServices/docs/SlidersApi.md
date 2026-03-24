# SlidersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiSlidersByTypeSliderTypeGet**](#apislidersbytypeslidertypeget) | **GET** /api/Sliders/by-type/{sliderType} | |
|[**apiSlidersGet**](#apislidersget) | **GET** /api/Sliders | |
|[**apiSlidersIdGet**](#apislidersidget) | **GET** /api/Sliders/{id} | |
|[**apiSlidersIdWithImagePut**](#apislidersidwithimageput) | **PUT** /api/Sliders/{id}/with-image | |
|[**apiSlidersPost**](#apisliderspost) | **POST** /api/Sliders | |
|[**apiSlidersWithImagePost**](#apisliderswithimagepost) | **POST** /api/Sliders/with-image | |

# **apiSlidersByTypeSliderTypeGet**
> Array<SliderDto> apiSlidersByTypeSliderTypeGet()


### Example

```typescript
import {
    SlidersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlidersApi(configuration);

let sliderType: SliderType; // (default to undefined)
let activeOnly: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.apiSlidersByTypeSliderTypeGet(
    sliderType,
    activeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sliderType** | **SliderType** |  | defaults to undefined|
| **activeOnly** | [**boolean**] |  | (optional) defaults to true|


### Return type

**Array<SliderDto>**

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

# **apiSlidersGet**
> Array<SliderDto> apiSlidersGet()


### Example

```typescript
import {
    SlidersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlidersApi(configuration);

let sliderType: SliderType; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let targetLocation: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiSlidersGet(
    sliderType,
    isActive,
    targetLocation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sliderType** | **SliderType** |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **targetLocation** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<SliderDto>**

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

# **apiSlidersIdGet**
> SliderDto apiSlidersIdGet()


### Example

```typescript
import {
    SlidersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlidersApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiSlidersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**SliderDto**

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

# **apiSlidersIdWithImagePut**
> SliderDto apiSlidersIdWithImagePut()


### Example

```typescript
import {
    SlidersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlidersApi(configuration);

let id: number; // (default to undefined)
let title: string; // (optional) (default to undefined)
let subtitle: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let imageFile: File; // (optional) (default to undefined)
let mobileImageFile: File; // (optional) (default to undefined)
let linkUrl: string; // (optional) (default to undefined)
let buttonText: string; // (optional) (default to undefined)
let order: number; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let sliderType: SliderType; // (optional) (default to undefined)
let linkType: SliderLinkType; // (optional) (default to undefined)
let openInNewTab: boolean; // (optional) (default to undefined)
let targetLocation: string; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiSlidersIdWithImagePut(
    id,
    title,
    subtitle,
    description,
    imageFile,
    mobileImageFile,
    linkUrl,
    buttonText,
    order,
    isActive,
    sliderType,
    linkType,
    openInNewTab,
    targetLocation,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **subtitle** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **imageFile** | [**File**] |  | (optional) defaults to undefined|
| **mobileImageFile** | [**File**] |  | (optional) defaults to undefined|
| **linkUrl** | [**string**] |  | (optional) defaults to undefined|
| **buttonText** | [**string**] |  | (optional) defaults to undefined|
| **order** | [**number**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **sliderType** | **SliderType** |  | (optional) defaults to undefined|
| **linkType** | **SliderLinkType** |  | (optional) defaults to undefined|
| **openInNewTab** | [**boolean**] |  | (optional) defaults to undefined|
| **targetLocation** | [**string**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SliderDto**

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

# **apiSlidersPost**
> SliderDto apiSlidersPost()


### Example

```typescript
import {
    SlidersApi,
    Configuration,
    CreateSliderDto
} from './api';

const configuration = new Configuration();
const apiInstance = new SlidersApi(configuration);

let createSliderDto: CreateSliderDto; // (optional)

const { status, data } = await apiInstance.apiSlidersPost(
    createSliderDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSliderDto** | **CreateSliderDto**|  | |


### Return type

**SliderDto**

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

# **apiSlidersWithImagePost**
> SliderDto apiSlidersWithImagePost()


### Example

```typescript
import {
    SlidersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SlidersApi(configuration);

let title: string; // (optional) (default to undefined)
let subtitle: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let imageFile: File; // (optional) (default to undefined)
let imageUrl: string; // (optional) (default to undefined)
let mobileImageFile: File; // (optional) (default to undefined)
let mobileImageUrl: string; // (optional) (default to undefined)
let linkUrl: string; // (optional) (default to undefined)
let buttonText: string; // (optional) (default to undefined)
let order: number; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let sliderType: SliderType; // (optional) (default to undefined)
let linkType: SliderLinkType; // (optional) (default to undefined)
let openInNewTab: boolean; // (optional) (default to undefined)
let targetLocation: string; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiSlidersWithImagePost(
    title,
    subtitle,
    description,
    imageFile,
    imageUrl,
    mobileImageFile,
    mobileImageUrl,
    linkUrl,
    buttonText,
    order,
    isActive,
    sliderType,
    linkType,
    openInNewTab,
    targetLocation,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **subtitle** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **imageFile** | [**File**] |  | (optional) defaults to undefined|
| **imageUrl** | [**string**] |  | (optional) defaults to undefined|
| **mobileImageFile** | [**File**] |  | (optional) defaults to undefined|
| **mobileImageUrl** | [**string**] |  | (optional) defaults to undefined|
| **linkUrl** | [**string**] |  | (optional) defaults to undefined|
| **buttonText** | [**string**] |  | (optional) defaults to undefined|
| **order** | [**number**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **sliderType** | **SliderType** |  | (optional) defaults to undefined|
| **linkType** | **SliderLinkType** |  | (optional) defaults to undefined|
| **openInNewTab** | [**boolean**] |  | (optional) defaults to undefined|
| **targetLocation** | [**string**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SliderDto**

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

