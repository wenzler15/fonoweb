import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseAvgAggregateInputType> = z
	.object({
		numericId: z.literal(true).optional(),
	})
	.strict()

export const ExerciseAvgAggregateInputObjectSchema = Schema
