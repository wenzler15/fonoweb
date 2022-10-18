import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './objects/LessonVideoWhereUniqueInput.schema'

export const LessonVideoFindUniqueSchema = z.object({
	where: LessonVideoWhereUniqueInputObjectSchema,
})
