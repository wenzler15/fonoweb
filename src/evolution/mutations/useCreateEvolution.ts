import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import {
	createEvolution,
	CreateEvolutionRequestData,
} from 'evolution/requests'
import { Evolution } from 'evolution/types'

export function useCreateEvolution(
	options?: UseMutationOptions<
		Response<Evolution>,
		HTTPError,
		CreateEvolutionRequestData
	>,
): UseMutationResult<
	Response<Evolution>,
	HTTPError,
	CreateEvolutionRequestData
> {
	const client = useQueryClient()
	return useMutation(createEvolution, {
		...options,
		onSuccess: (...args) => {
			options?.onSuccess?.(...args)
			client.invalidateQueries(['fetchEvolutions'])
		},
	})
}
