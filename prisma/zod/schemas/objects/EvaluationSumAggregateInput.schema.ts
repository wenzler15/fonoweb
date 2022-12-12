import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationSumAggregateInputType> = z
	.object({
		numericId: z.literal(true).optional(),
	})
	.strict()

export const EvaluationSumAggregateInputObjectSchema = Schema
