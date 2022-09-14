import { Exercise } from '@prisma/client'
import { client } from 'common/client'
import { Response } from 'common/types'
import { ExerciseFindFirstSchema } from 'prisma/schemas/findFirstExercise.schema'
import { z } from 'zod'

export const findOneExercise = (
	query: z.infer<typeof ExerciseFindFirstSchema>,
): Promise<Response<Exercise>> =>
	client('exercises/one', {
		method: 'post',
		json: query,
	}).json()
