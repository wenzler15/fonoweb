import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateSumAggregateInputType> = z
	.object({
		numericId: z.literal(true).optional(),
	})
	.strict()

export const TemplateSumAggregateInputObjectSchema = Schema
