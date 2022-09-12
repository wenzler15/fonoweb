import { z } from 'zod'
import { AnamnesisCreateManyInputObjectSchema } from './objects/AnamnesisCreateManyInput.schema'

export const AnamnesisCreateManySchema = z.object({
	data: AnamnesisCreateManyInputObjectSchema,
})
