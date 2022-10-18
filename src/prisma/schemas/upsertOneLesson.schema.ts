import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './objects/LessonWhereUniqueInput.schema'
import { LessonCreateInputObjectSchema } from './objects/LessonCreateInput.schema'
import { LessonUpdateInputObjectSchema } from './objects/LessonUpdateInput.schema'

export const LessonUpsertSchema = z.object({
	where: LessonWhereUniqueInputObjectSchema,
	create: LessonCreateInputObjectSchema,
	update: LessonUpdateInputObjectSchema,
})
