import { z } from 'zod'
import { ExerciseWhereInputObjectSchema } from './objects/ExerciseWhereInput.schema'
import { ExerciseOrderByWithRelationInputObjectSchema } from './objects/ExerciseOrderByWithRelationInput.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './objects/ExerciseWhereUniqueInput.schema'
import { ExerciseCountAggregateInputObjectSchema } from './objects/ExerciseCountAggregateInput.schema'
import { ExerciseMinAggregateInputObjectSchema } from './objects/ExerciseMinAggregateInput.schema'
import { ExerciseMaxAggregateInputObjectSchema } from './objects/ExerciseMaxAggregateInput.schema'
import { ExerciseAvgAggregateInputObjectSchema } from './objects/ExerciseAvgAggregateInput.schema'
import { ExerciseSumAggregateInputObjectSchema } from './objects/ExerciseSumAggregateInput.schema'

export const ExerciseAggregateSchema = z.object({
	where: ExerciseWhereInputObjectSchema.optional(),
	orderBy: ExerciseOrderByWithRelationInputObjectSchema.optional(),
	cursor: ExerciseWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), ExerciseCountAggregateInputObjectSchema])
		.optional(),
	_min: ExerciseMinAggregateInputObjectSchema.optional(),
	_max: ExerciseMaxAggregateInputObjectSchema.optional(),
	_avg: ExerciseAvgAggregateInputObjectSchema.optional(),
	_sum: ExerciseSumAggregateInputObjectSchema.optional(),
})
