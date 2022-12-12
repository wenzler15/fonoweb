import { z } from 'zod'
import { EvolutionWhereInputObjectSchema } from './objects/EvolutionWhereInput.schema'
import { EvolutionOrderByWithRelationInputObjectSchema } from './objects/EvolutionOrderByWithRelationInput.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './objects/EvolutionWhereUniqueInput.schema'
import { EvolutionCountAggregateInputObjectSchema } from './objects/EvolutionCountAggregateInput.schema'
import { EvolutionMinAggregateInputObjectSchema } from './objects/EvolutionMinAggregateInput.schema'
import { EvolutionMaxAggregateInputObjectSchema } from './objects/EvolutionMaxAggregateInput.schema'
import { EvolutionAvgAggregateInputObjectSchema } from './objects/EvolutionAvgAggregateInput.schema'
import { EvolutionSumAggregateInputObjectSchema } from './objects/EvolutionSumAggregateInput.schema'

export const EvolutionAggregateSchema = z.object({
	where: EvolutionWhereInputObjectSchema.optional(),
	orderBy: EvolutionOrderByWithRelationInputObjectSchema.optional(),
	cursor: EvolutionWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), EvolutionCountAggregateInputObjectSchema])
		.optional(),
	_min: EvolutionMinAggregateInputObjectSchema.optional(),
	_max: EvolutionMaxAggregateInputObjectSchema.optional(),
	_avg: EvolutionAvgAggregateInputObjectSchema.optional(),
	_sum: EvolutionSumAggregateInputObjectSchema.optional(),
})
