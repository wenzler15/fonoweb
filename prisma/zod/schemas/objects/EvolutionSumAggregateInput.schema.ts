import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionSumAggregateInputType> = z
	.object({
		numericId: z.literal(true).optional(),
	})
	.strict()

export const EvolutionSumAggregateInputObjectSchema = Schema
