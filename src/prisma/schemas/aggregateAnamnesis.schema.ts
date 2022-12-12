import { z } from 'zod'
import { AnamnesisWhereInputObjectSchema } from './objects/AnamnesisWhereInput.schema'
import { AnamnesisOrderByWithRelationInputObjectSchema } from './objects/AnamnesisOrderByWithRelationInput.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'
import { AnamnesisCountAggregateInputObjectSchema } from './objects/AnamnesisCountAggregateInput.schema'
import { AnamnesisMinAggregateInputObjectSchema } from './objects/AnamnesisMinAggregateInput.schema'
import { AnamnesisMaxAggregateInputObjectSchema } from './objects/AnamnesisMaxAggregateInput.schema'
import { AnamnesisAvgAggregateInputObjectSchema } from './objects/AnamnesisAvgAggregateInput.schema'
import { AnamnesisSumAggregateInputObjectSchema } from './objects/AnamnesisSumAggregateInput.schema'

export const AnamnesisAggregateSchema = z.object({
	where: AnamnesisWhereInputObjectSchema.optional(),
	orderBy: AnamnesisOrderByWithRelationInputObjectSchema.optional(),
	cursor: AnamnesisWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), AnamnesisCountAggregateInputObjectSchema])
		.optional(),
	_min: AnamnesisMinAggregateInputObjectSchema.optional(),
	_max: AnamnesisMaxAggregateInputObjectSchema.optional(),
	_avg: AnamnesisAvgAggregateInputObjectSchema.optional(),
	_sum: AnamnesisSumAggregateInputObjectSchema.optional(),
})
