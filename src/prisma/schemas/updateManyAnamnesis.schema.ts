import { z } from 'zod'
import { AnamnesisUpdateManyMutationInputObjectSchema } from './objects/AnamnesisUpdateManyMutationInput.schema'
import { AnamnesisWhereInputObjectSchema } from './objects/AnamnesisWhereInput.schema'

export const AnamnesisUpdateManySchema = z.object({
	data: AnamnesisUpdateManyMutationInputObjectSchema,
	where: AnamnesisWhereInputObjectSchema.optional(),
})
