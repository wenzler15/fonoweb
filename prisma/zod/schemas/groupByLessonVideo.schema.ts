import { z } from 'zod'
import { LessonVideoWhereInputObjectSchema } from './objects/LessonVideoWhereInput.schema'
import { LessonVideoOrderByWithAggregationInputObjectSchema } from './objects/LessonVideoOrderByWithAggregationInput.schema'
import { LessonVideoScalarWhereWithAggregatesInputObjectSchema } from './objects/LessonVideoScalarWhereWithAggregatesInput.schema'
import { LessonVideoScalarFieldEnumSchema } from './enums/LessonVideoScalarFieldEnum.schema'

export const LessonVideoGroupBySchema = z.object({
	where: LessonVideoWhereInputObjectSchema.optional(),
	orderBy: LessonVideoOrderByWithAggregationInputObjectSchema,
	having: LessonVideoScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(LessonVideoScalarFieldEnumSchema),
})
