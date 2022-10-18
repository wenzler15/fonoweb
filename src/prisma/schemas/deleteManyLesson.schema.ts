import { z } from 'zod'
import { LessonWhereInputObjectSchema } from './objects/LessonWhereInput.schema'

export const LessonDeleteManySchema = z.object({
	where: LessonWhereInputObjectSchema.optional(),
})
