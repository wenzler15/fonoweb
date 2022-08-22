import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { createAnamnesis, CreateAnamnesisRequestData } from 'anamnesis/requests'
import { Anamnesis } from 'anamnesis/types'

export function useCreateAnamnesis(
	options?: UseMutationOptions<
		Response<Anamnesis>,
		HTTPError,
		CreateAnamnesisRequestData
	>,
): UseMutationResult<
	Response<Anamnesis>,
	HTTPError,
	CreateAnamnesisRequestData
> {
	return useMutation(createAnamnesis, options)
}
