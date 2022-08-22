import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
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
	return useMutation(createEvaluation, options)
}
