import { Exercise } from '@prisma/client'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { findOneExercise } from 'exercise/requests'
import { ExerciseFindFirstSchema } from 'prisma/schemas/findFirstExercise.schema'
import { z } from 'zod'

export function useFindOneExercise(
	query: z.infer<typeof ExerciseFindFirstSchema>,
): UseQueryResult<{ result: Exercise }> {
	return useQuery(['findOneExercise', query], () => findOneExercise(query), {
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	})
}
