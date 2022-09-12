import { z } from 'zod'
import { AnamnesisCreateManySpecialtyInputObjectSchema } from './AnamnesisCreateManySpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.lazy(() => AnamnesisCreateManySpecialtyInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const AnamnesisCreateManySpecialtyInputEnvelopeObjectSchema = Schema
