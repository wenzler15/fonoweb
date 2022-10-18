import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './objects/LessonWhereUniqueInput.schema'

export const LessonDeleteOneSchema = z.object({
	where: LessonWhereUniqueInputObjectSchema,
})
