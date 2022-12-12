import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		title: z.literal(true).optional(),
		description: z.literal(true).optional(),
		creatorId: z.literal(true).optional(),
		specialtyId: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
	})
	.strict()

export const ExerciseMaxAggregateInputObjectSchema = Schema
