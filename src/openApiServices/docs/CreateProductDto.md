# CreateProductDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**shortDescription** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**productCode** | **string** |  | [optional] [default to undefined]
**category** | [**ProductCategory**](ProductCategory.md) |  | [optional] [default to undefined]
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
**isFeatured** | **boolean** |  | [optional] [default to undefined]
**isNewProduct** | **boolean** |  | [optional] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateProductDto } from './api';

const instance: CreateProductDto = {
    name,
    slug,
    shortDescription,
    description,
    productCode,
    category,
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
    isFeatured,
    isNewProduct,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
