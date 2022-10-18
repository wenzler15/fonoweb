import { z } from 'zod'
import { LessonCreateInputObjectSchema } from './objects/LessonCreateInput.schema'

export const LessonCreateOneSchema = z.object({
	data: LessonCreateInputObjectSchema,
})
