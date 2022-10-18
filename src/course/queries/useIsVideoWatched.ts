import { Prisma, WatchedVideo } from '@prisma/client'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useAuthStore } from 'auth/providers'
import { client } from 'common/client'

export function useIsVideoWatched(data: {
	videoId?: string
}): UseQueryResult<boolean> {
	const { user } = useAuthStore()
	const query: Prisma.WatchedVideoFindFirstArgs = {
		where: {
			userId: user!.id,
			videoId: data.videoId,
		},
	}

	return useQuery(
		['useIsVideoWatched', data],
		() =>
			client('watched-videos/one', {
				method: 'POST',
				json: query,
			})
				.json<{ result: WatchedVideo | null }>()
				.then(r => !!r.result),
		{ enabled: !!data.videoId },
	)
}
