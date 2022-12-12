import { z } from 'zod'
import { WatchedVideoWhereInputObjectSchema } from './objects/WatchedVideoWhereInput.schema'
import { WatchedVideoOrderByWithRelationInputObjectSchema } from './objects/WatchedVideoOrderByWithRelationInput.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './objects/WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoCountAggregateInputObjectSchema } from './objects/WatchedVideoCountAggregateInput.schema'
import { WatchedVideoMinAggregateInputObjectSchema } from './objects/WatchedVideoMinAggregateInput.schema'
import { WatchedVideoMaxAggregateInputObjectSchema } from './objects/WatchedVideoMaxAggregateInput.schema'
import { WatchedVideoAvgAggregateInputObjectSchema } from './objects/WatchedVideoAvgAggregateInput.schema'
import { WatchedVideoSumAggregateInputObjectSchema } from './objects/WatchedVideoSumAggregateInput.schema'

export const WatchedVideoAggregateSchema = z.object({
	where: WatchedVideoWhereInputObjectSchema.optional(),
	orderBy: WatchedVideoOrderByWithRelationInputObjectSchema.optional(),
	cursor: WatchedVideoWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), WatchedVideoCountAggregateInputObjectSchema])
		.optional(),
	_min: WatchedVideoMinAggregateInputObjectSchema.optional(),
	_max: WatchedVideoMaxAggregateInputObjectSchema.optional(),
	_avg: WatchedVideoAvgAggregateInputObjectSchema.optional(),
	_sum: WatchedVideoSumAggregateInputObjectSchema.optional(),
})
