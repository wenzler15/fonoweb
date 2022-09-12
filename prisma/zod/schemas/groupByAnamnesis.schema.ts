import { z } from 'zod'
import { AnamnesisWhereInputObjectSchema } from './objects/AnamnesisWhereInput.schema'
import { AnamnesisOrderByWithAggregationInputObjectSchema } from './objects/AnamnesisOrderByWithAggregationInput.schema'
import { AnamnesisScalarWhereWithAggregatesInputObjectSchema } from './objects/AnamnesisScalarWhereWithAggregatesInput.schema'
import { AnamnesisScalarFieldEnumSchema } from './enums/AnamnesisScalarFieldEnum.schema'

export const AnamnesisGroupBySchema = z.object({
	where: AnamnesisWhereInputObjectSchema.optional(),
	orderBy: AnamnesisOrderByWithAggregationInputObjectSchema,
	having: AnamnesisScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(AnamnesisScalarFieldEnumSchema),
})
