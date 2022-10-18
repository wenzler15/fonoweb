import { z } from 'zod'
import { LessonVideoCreateInputObjectSchema } from './objects/LessonVideoCreateInput.schema'

export const LessonVideoCreateOneSchema = z.object({
	data: LessonVideoCreateInputObjectSchema,
})
