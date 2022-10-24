import { Prisma } from '@prisma/client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useAuthStore } from 'auth/providers'
import { client } from 'common/client'
import { HTTPError } from 'ky'
import { Merge } from 'type-fest'

type Input = Merge<Prisma.CourseUpdateInput, { id: string }>

export function useUpdateCourse(
	options?: UseMutationOptions<HTTPError, unknown, Input>,
) {
	const { user } = useAuthStore()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return useMutation<any, HTTPError, Input>(({ id }) => {
		const json: Omit<Input, 'id'> = {
			lessons: {
				deleteMany: {},
			},
		}

		return client(`courses/${id}`, {
			method: 'PATCH',
			json,
		}).json()
	}, options)
}
