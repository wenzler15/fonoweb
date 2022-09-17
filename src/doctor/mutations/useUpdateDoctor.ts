import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { updateDoctor, UpdateDoctorRequestData } from 'doctor/requests'
import { User } from '@prisma/client'

export function useUpdateDoctor(
	options?: UseMutationOptions<
		Response<User>,
		HTTPError,
		UpdateDoctorRequestData
	>,
): UseMutationResult<Response<User>, HTTPError, UpdateDoctorRequestData> {
	const client = useQueryClient()
	return useMutation(updateDoctor, {
		...options,
		onSuccess: (...args) => {
			options?.onSuccess?.(...args)
			client.invalidateQueries(['fetchExercises'])
		},
	})
}
