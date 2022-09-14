import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { createExercise, CreateExerciseRequestData } from 'exercise/requests'
import { Exercise } from '@prisma/client'

export function useCreateExercise(
	options?: UseMutationOptions<
		Response<Exercise>,
		HTTPError,
		CreateExerciseRequestData
	>,
): UseMutationResult<Response<Exercise>, HTTPError, CreateExerciseRequestData> {
	const client = useQueryClient()
	return useMutation(createExercise, {
		...options,
		onSuccess: (...args) => {
			options?.onSuccess?.(...args)
			client.invalidateQueries(['fetchExercises'])
		},
	})
}
