import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'

export const AnamnesisDeleteOneSchema = z.object({
	where: AnamnesisWhereUniqueInputObjectSchema,
})
