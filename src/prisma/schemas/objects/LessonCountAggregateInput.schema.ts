import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		creatorId: z.literal(true).optional(),
		courseId: z.literal(true).optional(),
		order: z.literal(true).optional(),
		title: z.literal(true).optional(),
		description: z.literal(true).optional(),
		isActive: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		deletedAt: z.literal(true).optional(),
		_all: z.literal(true).optional(),
	})
	.strict()

export const LessonCountAggregateInputObjectSchema = Schema
