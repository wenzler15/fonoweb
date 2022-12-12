import { z } from 'zod'
import { EvaluationWhereInputObjectSchema } from './objects/EvaluationWhereInput.schema'
import { EvaluationOrderByWithRelationInputObjectSchema } from './objects/EvaluationOrderByWithRelationInput.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './objects/EvaluationWhereUniqueInput.schema'
import { EvaluationCountAggregateInputObjectSchema } from './objects/EvaluationCountAggregateInput.schema'
import { EvaluationMinAggregateInputObjectSchema } from './objects/EvaluationMinAggregateInput.schema'
import { EvaluationMaxAggregateInputObjectSchema } from './objects/EvaluationMaxAggregateInput.schema'
import { EvaluationAvgAggregateInputObjectSchema } from './objects/EvaluationAvgAggregateInput.schema'
import { EvaluationSumAggregateInputObjectSchema } from './objects/EvaluationSumAggregateInput.schema'

export const EvaluationAggregateSchema = z.object({
	where: EvaluationWhereInputObjectSchema.optional(),
	orderBy: EvaluationOrderByWithRelationInputObjectSchema.optional(),
	cursor: EvaluationWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), EvaluationCountAggregateInputObjectSchema])
		.optional(),
	_min: EvaluationMinAggregateInputObjectSchema.optional(),
	_max: EvaluationMaxAggregateInputObjectSchema.optional(),
	_avg: EvaluationAvgAggregateInputObjectSchema.optional(),
	_sum: EvaluationSumAggregateInputObjectSchema.optional(),
})
