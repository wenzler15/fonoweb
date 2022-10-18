import { z } from 'zod'
import { LessonVideoCreateManyInputObjectSchema } from './objects/LessonVideoCreateManyInput.schema'

export const LessonVideoCreateManySchema = z.object({
	data: LessonVideoCreateManyInputObjectSchema,
})
