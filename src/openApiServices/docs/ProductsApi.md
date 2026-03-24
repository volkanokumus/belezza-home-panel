# ProductsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiProductsCategoryCategoryGet**](#apiproductscategorycategoryget) | **GET** /api/Products/category/{category} | |
|[**apiProductsGet**](#apiproductsget) | **GET** /api/Products | |
|[**apiProductsIdDelete**](#apiproductsiddelete) | **DELETE** /api/Products/{id} | |
|[**apiProductsIdGet**](#apiproductsidget) | **GET** /api/Products/{id} | |
|[**apiProductsIdPut**](#apiproductsidput) | **PUT** /api/Products/{id} | |
|[**apiProductsPost**](#apiproductspost) | **POST** /api/Products | |
|[**apiProductsSlugSlugGet**](#apiproductsslugslugget) | **GET** /api/Products/slug/{slug} | |
|[**apiProductsWithImagesPost**](#apiproductswithimagespost) | **POST** /api/Products/with-images | |

# **apiProductsCategoryCategoryGet**
> Array<ProductDto> apiProductsCategoryCategoryGet()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let category: ProductCategory; // (default to undefined)
let activeOnly: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.apiProductsCategoryCategoryGet(
    category,
    activeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | **ProductCategory** |  | defaults to undefined|
| **activeOnly** | [**boolean**] |  | (optional) defaults to true|


### Return type

**Array<ProductDto>**

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

# **apiProductsGet**
> Array<ProductDto> apiProductsGet()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let category: ProductCategory; // (optional) (default to undefined)
let status: ProductStatus; // (optional) (default to undefined)
let isFeatured: boolean; // (optional) (default to undefined)
let isNewProduct: boolean; // (optional) (default to undefined)
let minPrice: number; // (optional) (default to undefined)
let maxPrice: number; // (optional) (default to undefined)
let searchTerm: string; // (optional) (default to undefined)
let activeOnly: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.apiProductsGet(
    category,
    status,
    isFeatured,
    isNewProduct,
    minPrice,
    maxPrice,
    searchTerm,
    activeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | **ProductCategory** |  | (optional) defaults to undefined|
| **status** | **ProductStatus** |  | (optional) defaults to undefined|
| **isFeatured** | [**boolean**] |  | (optional) defaults to undefined|
| **isNewProduct** | [**boolean**] |  | (optional) defaults to undefined|
| **minPrice** | [**number**] |  | (optional) defaults to undefined|
| **maxPrice** | [**number**] |  | (optional) defaults to undefined|
| **searchTerm** | [**string**] |  | (optional) defaults to undefined|
| **activeOnly** | [**boolean**] |  | (optional) defaults to true|


### Return type

**Array<ProductDto>**

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

# **apiProductsIdDelete**
> apiProductsIdDelete()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiProductsIdDelete(
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

# **apiProductsIdGet**
> ProductDto apiProductsIdGet()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; // (default to undefined)
let incrementViewCount: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.apiProductsIdGet(
    id,
    incrementViewCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **incrementViewCount** | [**boolean**] |  | (optional) defaults to false|


### Return type

**ProductDto**

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

# **apiProductsIdPut**
> ProductDto apiProductsIdPut()


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    UpdateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: number; // (default to undefined)
let updateProductDto: UpdateProductDto; // (optional)

const { status, data } = await apiInstance.apiProductsIdPut(
    id,
    updateProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductDto** | **UpdateProductDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ProductDto**

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

# **apiProductsPost**
> ProductDto apiProductsPost()


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    CreateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let createProductDto: CreateProductDto; // (optional)

const { status, data } = await apiInstance.apiProductsPost(
    createProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductDto** | **CreateProductDto**|  | |


### Return type

**ProductDto**

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

# **apiProductsSlugSlugGet**
> ProductDto apiProductsSlugSlugGet()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let slug: string; // (default to undefined)
let incrementViewCount: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.apiProductsSlugSlugGet(
    slug,
    incrementViewCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] |  | defaults to undefined|
| **incrementViewCount** | [**boolean**] |  | (optional) defaults to false|


### Return type

**ProductDto**

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

# **apiProductsWithImagesPost**
> ProductDto apiProductsWithImagesPost()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let name: string; // (optional) (default to undefined)
let slug: string; // (optional) (default to undefined)
let shortDescription: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let productCode: string; // (optional) (default to undefined)
let category: ProductCategory; // (optional) (default to undefined)
let mainImageFile: File; // (optional) (default to undefined)
let mainImageUrl: string; // (optional) (default to undefined)
let imageFiles: Array<File>; // (optional) (default to undefined)
let imageUrls: Array<string>; // (optional) (default to undefined)
let price: number; // (optional) (default to undefined)
let discountPrice: number; // (optional) (default to undefined)
let currency: string; // (optional) (default to undefined)
let showPrice: boolean; // (optional) (default to undefined)
let dimensions: string; // (optional) (default to undefined)
let material: string; // (optional) (default to undefined)
let colors: string; // (optional) (default to undefined)
let featuresJson: string; // (optional) (default to undefined)
let metaTitle: string; // (optional) (default to undefined)
let metaDescription: string; // (optional) (default to undefined)
let keywords: string; // (optional) (default to undefined)
let status: ProductStatus; // (optional) (default to undefined)
let isFeatured: boolean; // (optional) (default to undefined)
let isNewProduct: boolean; // (optional) (default to undefined)
let order: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiProductsWithImagesPost(
    name,
    slug,
    shortDescription,
    description,
    productCode,
    category,
    mainImageFile,
    mainImageUrl,
    imageFiles,
    imageUrls,
    price,
    discountPrice,
    currency,
    showPrice,
    dimensions,
    material,
    colors,
    featuresJson,
    metaTitle,
    metaDescription,
    keywords,
    status,
    isFeatured,
    isNewProduct,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **slug** | [**string**] |  | (optional) defaults to undefined|
| **shortDescription** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **productCode** | [**string**] |  | (optional) defaults to undefined|
| **category** | **ProductCategory** |  | (optional) defaults to undefined|
| **mainImageFile** | [**File**] |  | (optional) defaults to undefined|
| **mainImageUrl** | [**string**] |  | (optional) defaults to undefined|
| **imageFiles** | **Array&lt;File&gt;** |  | (optional) defaults to undefined|
| **imageUrls** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **price** | [**number**] |  | (optional) defaults to undefined|
| **discountPrice** | [**number**] |  | (optional) defaults to undefined|
| **currency** | [**string**] |  | (optional) defaults to undefined|
| **showPrice** | [**boolean**] |  | (optional) defaults to undefined|
| **dimensions** | [**string**] |  | (optional) defaults to undefined|
| **material** | [**string**] |  | (optional) defaults to undefined|
| **colors** | [**string**] |  | (optional) defaults to undefined|
| **featuresJson** | [**string**] |  | (optional) defaults to undefined|
| **metaTitle** | [**string**] |  | (optional) defaults to undefined|
| **metaDescription** | [**string**] |  | (optional) defaults to undefined|
| **keywords** | [**string**] |  | (optional) defaults to undefined|
| **status** | **ProductStatus** |  | (optional) defaults to undefined|
| **isFeatured** | [**boolean**] |  | (optional) defaults to undefined|
| **isNewProduct** | [**boolean**] |  | (optional) defaults to undefined|
| **order** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ProductDto**

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

