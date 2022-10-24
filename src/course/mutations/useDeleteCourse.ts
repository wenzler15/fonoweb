import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { client } from 'common/client'
import { HTTPError } from 'ky'

type Input = { id: string }

export function useDeleteCourse(
	options?: UseMutationOptions<HTTPError, unknown, Input>,
) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return useMutation<any, HTTPError, Input>(
		({ id }) =>
			client(`courses/${id}`, {
				method: 'DELETE',
			}).json(),
		options,
	)
}
