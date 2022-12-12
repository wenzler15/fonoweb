import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		lessonId: z.literal(true).optional(),
		order: z.literal(true).optional(),
		title: z.literal(true).optional(),
		video: z.literal(true).optional(),
		isActive: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		deletedAt: z.literal(true).optional(),
	})
	.strict()

export const LessonVideoMinAggregateInputObjectSchema = Schema
