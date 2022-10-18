import { z } from 'zod'
import { LessonWhereInputObjectSchema } from './objects/LessonWhereInput.schema'
import { LessonOrderByWithRelationInputObjectSchema } from './objects/LessonOrderByWithRelationInput.schema'
import { LessonWhereUniqueInputObjectSchema } from './objects/LessonWhereUniqueInput.schema'
import { LessonScalarFieldEnumSchema } from './enums/LessonScalarFieldEnum.schema'

export const LessonFindFirstSchema = z.object({
	where: LessonWhereInputObjectSchema.optional(),
	orderBy: LessonOrderByWithRelationInputObjectSchema.optional(),
	cursor: LessonWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(LessonScalarFieldEnumSchema).optional(),
})
