import { z } from 'zod'
import { AnamnesisCreateManyDoctorInputObjectSchema } from './AnamnesisCreateManyDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.lazy(() => AnamnesisCreateManyDoctorInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const AnamnesisCreateManyDoctorInputEnvelopeObjectSchema = Schema
