# AzureAdApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**azureAdAzureAdGetTokenGet**](#azureadazureadgettokenget) | **GET** /AzureAd/AzureAdGetToken | |

# **azureAdAzureAdGetTokenGet**
> AuthResponseDto azureAdAzureAdGetTokenGet()


### Example

```typescript
import {
    AzureAdApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AzureAdApi(configuration);

let code: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.azureAdAzureAdGetTokenGet(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AuthResponseDto**

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

