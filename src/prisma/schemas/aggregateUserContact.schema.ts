import { z } from 'zod'
import { UserContactWhereInputObjectSchema } from './objects/UserContactWhereInput.schema'
import { UserContactOrderByWithRelationInputObjectSchema } from './objects/UserContactOrderByWithRelationInput.schema'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'

export const UserContactAggregateSchema = z.object({
	where: UserContactWhereInputObjectSchema.optional(),
	orderBy: UserContactOrderByWithRelationInputObjectSchema.optional(),
	cursor: UserContactWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
