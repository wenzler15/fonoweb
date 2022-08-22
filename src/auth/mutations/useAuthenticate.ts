import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { Response } from 'common/types'
import {
	authenticate,
	AuthenticateRequestParams,
	AuthenticateResponse,
} from 'auth/requests'
import { HTTPError } from 'ky'

export function useAuthenticate(
	options?: UseMutationOptions<
		Response<AuthenticateResponse>,
		HTTPError,
		AuthenticateRequestParams
	>,
) {
	return useMutation<
		Response<AuthenticateResponse>,
		HTTPError,
		AuthenticateRequestParams
	>(authenticate, options)
}
