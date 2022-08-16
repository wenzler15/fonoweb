import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response, ErrorResponse } from 'anamnesis/types'
import { activateDoctor } from 'doctor/requests/activateDoctor'

export function useActivateDoctor(
	options?: UseMutationOptions<
		Response<{ doctorId: number }>,
		ErrorResponse,
		number
	>,
): UseMutationResult<Response<{ doctorId: number }>, ErrorResponse, number> {
	return useMutation(activateDoctor, options)
}
