import { z } from 'zod'
import { LessonCreateManyInputObjectSchema } from './objects/LessonCreateManyInput.schema'

export const LessonCreateManySchema = z.object({
	data: LessonCreateManyInputObjectSchema,
})
