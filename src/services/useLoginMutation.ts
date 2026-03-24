import { authApi } from '@/utils/factories';
import { useMutation } from 'react-query';

export function useLoginMutation() {
    return useMutation((data: { username: string; password: string }) =>
        authApi.apiAuthLoginPost(data),
    )
}
