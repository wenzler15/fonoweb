import { z } from 'zod'
import { LessonVideoWhereInputObjectSchema } from './objects/LessonVideoWhereInput.schema'
import { LessonVideoOrderByWithRelationInputObjectSchema } from './objects/LessonVideoOrderByWithRelationInput.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './objects/LessonVideoWhereUniqueInput.schema'
import { LessonVideoScalarFieldEnumSchema } from './enums/LessonVideoScalarFieldEnum.schema'

export const LessonVideoFindFirstSchema = z.object({
	where: LessonVideoWhereInputObjectSchema.optional(),
	orderBy: LessonVideoOrderByWithRelationInputObjectSchema.optional(),
	cursor: LessonVideoWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(LessonVideoScalarFieldEnumSchema).optional(),
})
