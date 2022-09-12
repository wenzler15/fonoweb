import { z } from 'zod'
import { UserContactWhereInputObjectSchema } from './objects/UserContactWhereInput.schema'
import { UserContactOrderByWithRelationInputObjectSchema } from './objects/UserContactOrderByWithRelationInput.schema'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'
import { UserContactScalarFieldEnumSchema } from './enums/UserContactScalarFieldEnum.schema'

export const UserContactFindFirstSchema = z.object({
	where: UserContactWhereInputObjectSchema.optional(),
	orderBy: UserContactOrderByWithRelationInputObjectSchema.optional(),
	cursor: UserContactWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(UserContactScalarFieldEnumSchema).optional(),
})
