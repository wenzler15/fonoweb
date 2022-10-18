import { Prisma } from '@prisma/client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useAuthStore } from 'auth/providers'
import { client } from 'common/client'
import { HTTPError } from 'ky'
import { Simplify } from 'type-fest'

export function useSetVideoAsNotWatched(
	options?: UseMutationOptions<
		HTTPError,
		unknown,
		{
			videoId: string
		}
	>,
) {
	const { user } = useAuthStore()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return useMutation<any, HTTPError, { videoId: string }>(({ videoId }) => {
		const data: Simplify<Prisma.WatchedVideoWhereInput> = {
			videoId,
			userId: user!.id,
		}

		return client('watched-videos', {
			method: 'DELETE',
			json: data,
		}).json()
	}, options)
}
