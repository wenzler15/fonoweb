import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { activateDoctor } from 'doctor/requests/activateDoctor'
import { HTTPError } from 'ky'
import { UserWithDoctor } from 'user/types'

export function useActivateDoctor(
	options?: UseMutationOptions<Response<UserWithDoctor>, HTTPError, string>,
): UseMutationResult<Response<UserWithDoctor>, HTTPError, string> {
	return useMutation(activateDoctor, options)
}
