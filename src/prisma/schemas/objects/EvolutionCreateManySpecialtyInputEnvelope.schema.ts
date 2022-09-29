import { z } from 'zod'
import { EvolutionCreateManySpecialtyInputObjectSchema } from './EvolutionCreateManySpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.lazy(() => EvolutionCreateManySpecialtyInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const EvolutionCreateManySpecialtyInputEnvelopeObjectSchema = Schema
