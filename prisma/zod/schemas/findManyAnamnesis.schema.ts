import { z } from 'zod'
import { AnamnesisWhereInputObjectSchema } from './objects/AnamnesisWhereInput.schema'
import { AnamnesisOrderByWithRelationInputObjectSchema } from './objects/AnamnesisOrderByWithRelationInput.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'
import { AnamnesisScalarFieldEnumSchema } from './enums/AnamnesisScalarFieldEnum.schema'

export const AnamnesisFindManySchema = z.object({
	where: AnamnesisWhereInputObjectSchema.optional(),
	orderBy: AnamnesisOrderByWithRelationInputObjectSchema.optional(),
	cursor: AnamnesisWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(AnamnesisScalarFieldEnumSchema).optional(),
})
