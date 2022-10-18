import { z } from 'zod'
import { LessonVideoUpdateInputObjectSchema } from './objects/LessonVideoUpdateInput.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './objects/LessonVideoWhereUniqueInput.schema'

export const LessonVideoUpdateOneSchema = z.object({
	data: LessonVideoUpdateInputObjectSchema,
	where: LessonVideoWhereUniqueInputObjectSchema,
})
