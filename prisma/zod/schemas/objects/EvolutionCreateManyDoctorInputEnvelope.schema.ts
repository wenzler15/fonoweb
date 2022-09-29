import { z } from 'zod'
import { EvolutionCreateManyDoctorInputObjectSchema } from './EvolutionCreateManyDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.lazy(() => EvolutionCreateManyDoctorInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const EvolutionCreateManyDoctorInputEnvelopeObjectSchema = Schema
