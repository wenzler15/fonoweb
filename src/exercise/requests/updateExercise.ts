import { Exercise } from '@prisma/client'
import { client } from 'common/client'
import { Response } from 'common/types'
import { ExerciseUpdateInputObjectSchema } from 'prisma/schemas/objects/ExerciseUpdateInput.schema'
import { Merge } from 'type-fest'
import { z } from 'zod'

export type UpdateExerciseRequestData = Merge<
	z.infer<typeof ExerciseUpdateInputObjectSchema>,
	{ id: string }
>

export function updateExercise({
	id,
	...data
}: UpdateExerciseRequestData): Promise<Response<Exercise>> {
	return client(`exercises/${id}`, {
		method: 'patch',
		json: data,
	}).json()
}
