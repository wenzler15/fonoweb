import { Prisma } from '@prisma/client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useAuthStore } from 'auth/providers'
import { client } from 'common/client'
import { HTTPError } from 'ky'

type Input = Prisma.CourseCreateInput

export function useCreateCourse(
	options?: UseMutationOptions<HTTPError, unknown, Input>,
) {
	const { user } = useAuthStore()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return useMutation<any, HTTPError, Input>(data => {
		const json: Input = {
			...data,
			creator: {
				connect: {
					id: user!.id,
				},
			},
		}

		return client('courses/create', {
			method: 'POST',
			json,
		}).json()
	}, options)
}
