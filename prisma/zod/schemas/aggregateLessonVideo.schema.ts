import { z } from 'zod'
import { LessonVideoWhereInputObjectSchema } from './objects/LessonVideoWhereInput.schema'
import { LessonVideoOrderByWithRelationInputObjectSchema } from './objects/LessonVideoOrderByWithRelationInput.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './objects/LessonVideoWhereUniqueInput.schema'
import { LessonVideoCountAggregateInputObjectSchema } from './objects/LessonVideoCountAggregateInput.schema'
import { LessonVideoMinAggregateInputObjectSchema } from './objects/LessonVideoMinAggregateInput.schema'
import { LessonVideoMaxAggregateInputObjectSchema } from './objects/LessonVideoMaxAggregateInput.schema'
import { LessonVideoAvgAggregateInputObjectSchema } from './objects/LessonVideoAvgAggregateInput.schema'
import { LessonVideoSumAggregateInputObjectSchema } from './objects/LessonVideoSumAggregateInput.schema'

export const LessonVideoAggregateSchema = z.object({
	where: LessonVideoWhereInputObjectSchema.optional(),
	orderBy: LessonVideoOrderByWithRelationInputObjectSchema.optional(),
	cursor: LessonVideoWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), LessonVideoCountAggregateInputObjectSchema])
		.optional(),
	_min: LessonVideoMinAggregateInputObjectSchema.optional(),
	_max: LessonVideoMaxAggregateInputObjectSchema.optional(),
	_avg: LessonVideoAvgAggregateInputObjectSchema.optional(),
	_sum: LessonVideoSumAggregateInputObjectSchema.optional(),
})
