import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoCreateManyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		lessonId: z.string(),
		order: z.number().optional(),
		title: z.string(),
		video: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const LessonVideoCreateManyInputObjectSchema = Schema
