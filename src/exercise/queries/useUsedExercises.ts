import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { client } from 'common/client'
import { HTTPError } from 'ky'

export type UsedExercise = {
	id: string
	description: string
	title: string
	cuid: string
	links: string[]
	evolutionId: string
	specialty: string
}

export function useUsedExercises(data: {
	take: number
	skip: number
}): UseQueryResult<UsedExercise[], HTTPError> {
	return useQuery(
		['useUsedExercises'],
		() =>
			client('exercises/used', {
				method: 'POST',
				json: data,
			}).json(),
		{
			keepPreviousData: true,
		},
	)
}
