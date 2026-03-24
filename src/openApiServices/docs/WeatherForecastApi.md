# WeatherForecastApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getWeatherForecast**](#getweatherforecast) | **GET** /WeatherForecast | |

# **getWeatherForecast**
> Array<WeatherForecast> getWeatherForecast()


### Example

```typescript
import {
    WeatherForecastApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WeatherForecastApi(configuration);

const { status, data } = await apiInstance.getWeatherForecast();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<WeatherForecast>**

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

