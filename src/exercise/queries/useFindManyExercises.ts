import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { findManyExercises } from 'exercise/requests'
import { Exercise } from 'exercise/types'
import { ExerciseFindManySchema } from 'prisma/schemas/findManyExercise.schema'
import { z } from 'zod'

export function useFindManyExercises(
	query: z.infer<typeof ExerciseFindManySchema>,
): UseQueryResult<{ result: Exercise[]; count: number }> {
	return useQuery(
		['findManyExercises', query],
		() => findManyExercises(query),
		{
			keepPreviousData: true,
		},
	)
}
