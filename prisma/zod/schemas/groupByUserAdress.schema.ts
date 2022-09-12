import { z } from 'zod'
import { UserAdressWhereInputObjectSchema } from './objects/UserAdressWhereInput.schema'
import { UserAdressOrderByWithAggregationInputObjectSchema } from './objects/UserAdressOrderByWithAggregationInput.schema'
import { UserAdressScalarWhereWithAggregatesInputObjectSchema } from './objects/UserAdressScalarWhereWithAggregatesInput.schema'
import { UserAdressScalarFieldEnumSchema } from './enums/UserAdressScalarFieldEnum.schema'

export const UserAdressGroupBySchema = z.object({
	where: UserAdressWhereInputObjectSchema.optional(),
	orderBy: UserAdressOrderByWithAggregationInputObjectSchema,
	having: UserAdressScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(UserAdressScalarFieldEnumSchema),
})
