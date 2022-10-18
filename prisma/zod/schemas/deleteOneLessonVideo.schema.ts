import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './objects/LessonVideoWhereUniqueInput.schema'

export const LessonVideoDeleteOneSchema = z.object({
	where: LessonVideoWhereUniqueInputObjectSchema,
})
