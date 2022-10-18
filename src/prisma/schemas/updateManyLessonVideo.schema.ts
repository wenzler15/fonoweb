import { z } from 'zod'
import { LessonVideoUpdateManyMutationInputObjectSchema } from './objects/LessonVideoUpdateManyMutationInput.schema'
import { LessonVideoWhereInputObjectSchema } from './objects/LessonVideoWhereInput.schema'

export const LessonVideoUpdateManySchema = z.object({
	data: LessonVideoUpdateManyMutationInputObjectSchema,
	where: LessonVideoWhereInputObjectSchema.optional(),
})
