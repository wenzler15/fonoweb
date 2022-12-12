import { z } from 'zod'
import { UserContactWhereInputObjectSchema } from './objects/UserContactWhereInput.schema'
import { UserContactOrderByWithRelationInputObjectSchema } from './objects/UserContactOrderByWithRelationInput.schema'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'
import { UserContactCountAggregateInputObjectSchema } from './objects/UserContactCountAggregateInput.schema'
import { UserContactMinAggregateInputObjectSchema } from './objects/UserContactMinAggregateInput.schema'
import { UserContactMaxAggregateInputObjectSchema } from './objects/UserContactMaxAggregateInput.schema'
import { UserContactAvgAggregateInputObjectSchema } from './objects/UserContactAvgAggregateInput.schema'
import { UserContactSumAggregateInputObjectSchema } from './objects/UserContactSumAggregateInput.schema'

export const UserContactAggregateSchema = z.object({
	where: UserContactWhereInputObjectSchema.optional(),
	orderBy: UserContactOrderByWithRelationInputObjectSchema.optional(),
	cursor: UserContactWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), UserContactCountAggregateInputObjectSchema])
		.optional(),
	_min: UserContactMinAggregateInputObjectSchema.optional(),
	_max: UserContactMaxAggregateInputObjectSchema.optional(),
	_avg: UserContactAvgAggregateInputObjectSchema.optional(),
	_sum: UserContactSumAggregateInputObjectSchema.optional(),
})
