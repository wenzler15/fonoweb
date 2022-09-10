import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import {
	createEvaluation,
	CreateEvaluationRequestData,
} from 'evaluation/requests'
import { Evaluation } from 'evaluation/types'

export function useCreateEvaluation(
	options?: UseMutationOptions<
		Response<Evaluation>,
		HTTPError,
		CreateEvaluationRequestData
	>,
): UseMutationResult<
	Response<Evaluation>,
	HTTPError,
	CreateEvaluationRequestData
> {
	const client = useQueryClient()
	return useMutation(createEvaluation, {
		...options,
		onSuccess: (...args) => {
			options?.onSuccess?.(...args)
			client.invalidateQueries(['fetchEvaluations'])
		},
	})
}
