import { z } from 'zod'
import { LessonVideoWhereInputObjectSchema } from './objects/LessonVideoWhereInput.schema'

export const LessonVideoDeleteManySchema = z.object({
	where: LessonVideoWhereInputObjectSchema.optional(),
})
