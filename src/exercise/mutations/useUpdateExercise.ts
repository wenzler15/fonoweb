import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { updateExercise, UpdateExerciseRequestData } from 'exercise/requests'
import { Exercise } from '@prisma/client'

export function useUpdateExercise(
	options?: UseMutationOptions<
		Response<Exercise>,
		HTTPError,
		UpdateExerciseRequestData
	>,
): UseMutationResult<Response<Exercise>, HTTPError, UpdateExerciseRequestData> {
	const client = useQueryClient()
	return useMutation(updateExercise, {
		...options,
		onSuccess: (...args) => {
			options?.onSuccess?.(...args)
			client.invalidateQueries(['fetchExercises'])
		},
	})
}
