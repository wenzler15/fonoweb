import { z } from 'zod'
import { AnamnesisWhereUniqueInputObjectSchema } from './objects/AnamnesisWhereUniqueInput.schema'

export const AnamnesisFindUniqueSchema = z.object({
	where: AnamnesisWhereUniqueInputObjectSchema,
})
