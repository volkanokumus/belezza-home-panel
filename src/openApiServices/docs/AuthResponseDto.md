# AuthResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**user** | [**UserDto**](UserDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthResponseDto } from './api';

const instance: AuthResponseDto = {
    token,
    refreshToken,
    expiresAt,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
