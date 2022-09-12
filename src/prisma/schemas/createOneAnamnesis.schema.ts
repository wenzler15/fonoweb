import { z } from 'zod'
import { AnamnesisCreateInputObjectSchema } from './objects/AnamnesisCreateInput.schema'

export const AnamnesisCreateOneSchema = z.object({
	data: AnamnesisCreateInputObjectSchema,
})
