import { z } from 'zod'
import { EvolutionCreateManyPatientInputObjectSchema } from './EvolutionCreateManyPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateManyPatientInputEnvelope> = z
	.object({
		data: z.lazy(() => EvolutionCreateManyPatientInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const EvolutionCreateManyPatientInputEnvelopeObjectSchema = Schema
