import { z } from 'zod'
import { AnamnesisUpdateInputObjectSchema } from './objects/AnamnesisUpdateInput.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'

export const AnamnesisUpdateOneSchema = z.object({
	data: AnamnesisUpdateInputObjectSchema,
	where: AnamnesisWhereUniqueInputObjectSchema,
})
