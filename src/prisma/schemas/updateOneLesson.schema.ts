import { z } from 'zod'
import { LessonUpdateInputObjectSchema } from './objects/LessonUpdateInput.schema'
import { LessonWhereUniqueInputObjectSchema } from './objects/LessonWhereUniqueInput.schema'

export const LessonUpdateOneSchema = z.object({
	data: LessonUpdateInputObjectSchema,
	where: LessonWhereUniqueInputObjectSchema,
})
