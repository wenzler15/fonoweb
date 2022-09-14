import { Exercise } from '@prisma/client'
import { client } from 'common/client'
import { ExerciseFindManySchema } from 'prisma/schemas/findManyExercise.schema'
import { z } from 'zod'

export const findManyExercises = (
	query: z.infer<typeof ExerciseFindManySchema>,
): Promise<{ result: Exercise[]; count: number }> =>
	client('exercises', {
		method: 'post',
		json: query,
	}).json()
