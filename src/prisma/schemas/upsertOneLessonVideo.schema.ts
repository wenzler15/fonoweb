import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './objects/LessonVideoWhereUniqueInput.schema'
import { LessonVideoCreateInputObjectSchema } from './objects/LessonVideoCreateInput.schema'
import { LessonVideoUpdateInputObjectSchema } from './objects/LessonVideoUpdateInput.schema'

export const LessonVideoUpsertSchema = z.object({
	where: LessonVideoWhereUniqueInputObjectSchema,
	create: LessonVideoCreateInputObjectSchema,
	update: LessonVideoUpdateInputObjectSchema,
})
