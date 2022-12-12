import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoAvgAggregateInputType> = z
	.object({
		numericId: z.literal(true).optional(),
		order: z.literal(true).optional(),
	})
	.strict()

export const LessonVideoAvgAggregateInputObjectSchema = Schema
