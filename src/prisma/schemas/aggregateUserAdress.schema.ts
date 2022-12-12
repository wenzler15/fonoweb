import { z } from 'zod'
import { UserAdressWhereInputObjectSchema } from './objects/UserAdressWhereInput.schema'
import { UserAdressOrderByWithRelationInputObjectSchema } from './objects/UserAdressOrderByWithRelationInput.schema'
import { UserAdressWhereUniqueInputObjectSchema } from './objects/UserAdressWhereUniqueInput.schema'
import { UserAdressCountAggregateInputObjectSchema } from './objects/UserAdressCountAggregateInput.schema'
import { UserAdressMinAggregateInputObjectSchema } from './objects/UserAdressMinAggregateInput.schema'
import { UserAdressMaxAggregateInputObjectSchema } from './objects/UserAdressMaxAggregateInput.schema'
import { UserAdressAvgAggregateInputObjectSchema } from './objects/UserAdressAvgAggregateInput.schema'
import { UserAdressSumAggregateInputObjectSchema } from './objects/UserAdressSumAggregateInput.schema'

export const UserAdressAggregateSchema = z.object({
	where: UserAdressWhereInputObjectSchema.optional(),
	orderBy: UserAdressOrderByWithRelationInputObjectSchema.optional(),
	cursor: UserAdressWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), UserAdressCountAggregateInputObjectSchema])
		.optional(),
	_min: UserAdressMinAggregateInputObjectSchema.optional(),
	_max: UserAdressMaxAggregateInputObjectSchema.optional(),
	_avg: UserAdressAvgAggregateInputObjectSchema.optional(),
	_sum: UserAdressSumAggregateInputObjectSchema.optional(),
})
