import { z } from 'zod'
import { LessonUpdateManyMutationInputObjectSchema } from './objects/LessonUpdateManyMutationInput.schema'
import { LessonWhereInputObjectSchema } from './objects/LessonWhereInput.schema'

export const LessonUpdateManySchema = z.object({
	data: LessonUpdateManyMutationInputObjectSchema,
	where: LessonWhereInputObjectSchema.optional(),
})
