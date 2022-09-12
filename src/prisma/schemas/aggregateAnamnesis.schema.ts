import { z } from 'zod'
import { AnamnesisWhereInputObjectSchema } from './objects/AnamnesisWhereInput.schema'
import { AnamnesisOrderByWithRelationInputObjectSchema } from './objects/AnamnesisOrderByWithRelationInput.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'

export const AnamnesisAggregateSchema = z.object({
	where: AnamnesisWhereInputObjectSchema.optional(),
	orderBy: AnamnesisOrderByWithRelationInputObjectSchema.optional(),
	cursor: AnamnesisWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
