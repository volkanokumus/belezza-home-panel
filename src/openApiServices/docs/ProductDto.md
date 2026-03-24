# ProductDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**shortDescription** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**productCode** | **string** |  | [optional] [default to undefined]
**category** | [**ProductCategory**](ProductCategory.md) |  | [optional] [default to undefined]
**categoryName** | **string** |  | [optional] [default to undefined]
**mainImageUrl** | **string** |  | [optional] [default to undefined]
**imageUrls** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**price** | **number** |  | [optional] [default to undefined]
**discountPrice** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**showPrice** | **boolean** |  | [optional] [default to undefined]
**dimensions** | **string** |  | [optional] [default to undefined]
**material** | **string** |  | [optional] [default to undefined]
**colors** | **string** |  | [optional] [default to undefined]
**features** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**metaTitle** | **string** |  | [optional] [default to undefined]
**metaDescription** | **string** |  | [optional] [default to undefined]
**keywords** | **string** |  | [optional] [default to undefined]
**status** | [**ProductStatus**](ProductStatus.md) |  | [optional] [default to undefined]
**statusName** | **string** |  | [optional] [default to undefined]
**isFeatured** | **boolean** |  | [optional] [default to undefined]
**isNewProduct** | **boolean** |  | [optional] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**viewCount** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**creatorName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProductDto } from './api';

const instance: ProductDto = {
    id,
    name,
    slug,
    shortDescription,
    description,
    productCode,
    category,
    categoryName,
    mainImageUrl,
    imageUrls,
    price,
    discountPrice,
    currency,
    showPrice,
    dimensions,
    material,
    colors,
    features,
    metaTitle,
    metaDescription,
    keywords,
    status,
    statusName,
    isFeatured,
    isNewProduct,
    order,
    viewCount,
    createdAt,
    updatedAt,
    creatorName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
