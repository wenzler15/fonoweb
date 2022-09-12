import { z } from 'zod'
import { UserContactWhereInputObjectSchema } from './objects/UserContactWhereInput.schema'
import { UserContactOrderByWithAggregationInputObjectSchema } from './objects/UserContactOrderByWithAggregationInput.schema'
import { UserContactScalarWhereWithAggregatesInputObjectSchema } from './objects/UserContactScalarWhereWithAggregatesInput.schema'
import { UserContactScalarFieldEnumSchema } from './enums/UserContactScalarFieldEnum.schema'

export const UserContactGroupBySchema = z.object({
	where: UserContactWhereInputObjectSchema.optional(),
	orderBy: UserContactOrderByWithAggregationInputObjectSchema,
	having: UserContactScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(UserContactScalarFieldEnumSchema),
})
