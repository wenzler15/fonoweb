import { z } from 'zod'
import { ExerciseWhereUniqueInputObjectSchema } from './objects/ExerciseWhereUniqueInput.schema'
import { ExerciseCreateInputObjectSchema } from './objects/ExerciseCreateInput.schema'
import { ExerciseUpdateInputObjectSchema } from './objects/ExerciseUpdateInput.schema'

export const ExerciseUpsertSchema = z.object({
	where: ExerciseWhereUniqueInputObjectSchema,
	create: ExerciseCreateInputObjectSchema,
	update: ExerciseUpdateInputObjectSchema,
})
