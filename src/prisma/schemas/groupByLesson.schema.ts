import { z } from 'zod'
import { LessonWhereInputObjectSchema } from './objects/LessonWhereInput.schema'
import { LessonOrderByWithAggregationInputObjectSchema } from './objects/LessonOrderByWithAggregationInput.schema'
import { LessonScalarWhereWithAggregatesInputObjectSchema } from './objects/LessonScalarWhereWithAggregatesInput.schema'
import { LessonScalarFieldEnumSchema } from './enums/LessonScalarFieldEnum.schema'

export const LessonGroupBySchema = z.object({
	where: LessonWhereInputObjectSchema.optional(),
	orderBy: LessonOrderByWithAggregationInputObjectSchema,
	having: LessonScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(LessonScalarFieldEnumSchema),
})
