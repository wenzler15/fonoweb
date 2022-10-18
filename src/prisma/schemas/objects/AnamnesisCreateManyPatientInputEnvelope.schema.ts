import { z } from 'zod'
import { AnamnesisCreateManyPatientInputObjectSchema } from './AnamnesisCreateManyPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateManyPatientInputEnvelope> = z
	.object({
		data: z.lazy(() => AnamnesisCreateManyPatientInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const AnamnesisCreateManyPatientInputEnvelopeObjectSchema = Schema
