import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateManyCourseInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		creatorId: z.string(),
		order: z.number().optional(),
		title: z.string(),
		description: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const LessonCreateManyCourseInputObjectSchema = Schema
