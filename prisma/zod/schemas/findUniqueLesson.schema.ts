import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './objects/LessonWhereUniqueInput.schema'

export const LessonFindUniqueSchema = z.object({
	where: LessonWhereUniqueInputObjectSchema,
})
