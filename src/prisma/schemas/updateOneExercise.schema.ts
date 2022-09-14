import { z } from 'zod'
import { ExerciseUpdateInputObjectSchema } from './objects/ExerciseUpdateInput.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './objects/ExerciseWhereUniqueInput.schema'

export const ExerciseUpdateOneSchema = z.object({
	data: ExerciseUpdateInputObjectSchema,
	where: ExerciseWhereUniqueInputObjectSchema,
})
