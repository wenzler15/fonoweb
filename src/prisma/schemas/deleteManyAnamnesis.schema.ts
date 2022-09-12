import { z } from 'zod'
import { AnamnesisWhereInputObjectSchema } from './objects/AnamnesisWhereInput.schema'

export const AnamnesisDeleteManySchema = z.object({
	where: AnamnesisWhereInputObjectSchema.optional(),
})
