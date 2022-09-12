import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'
import { AnamnesisCreateInputObjectSchema } from './objects/AnamnesisCreateInput.schema'
import { AnamnesisUpdateInputObjectSchema } from './objects/AnamnesisUpdateInput.schema'

export const AnamnesisUpsertSchema = z.object({
	where: AnamnesisWhereUniqueInputObjectSchema,
	create: AnamnesisCreateInputObjectSchema,
	update: AnamnesisUpdateInputObjectSchema,
})
