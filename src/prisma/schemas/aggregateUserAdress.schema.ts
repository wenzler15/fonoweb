import { z } from 'zod'
import { UserAdressWhereInputObjectSchema } from './objects/UserAdressWhereInput.schema'
import { UserAdressOrderByWithRelationInputObjectSchema } from './objects/UserAdressOrderByWithRelationInput.schema'
import { UserAdressWhereUniqueInputObjectSchema } from './objects/UserAdressWhereUniqueInput.schema'

export const UserAdressAggregateSchema = z.object({
	where: UserAdressWhereInputObjectSchema.optional(),
	orderBy: UserAdressOrderByWithRelationInputObjectSchema.optional(),
	cursor: UserAdressWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
