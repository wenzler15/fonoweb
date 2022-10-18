import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateManyCreatorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		specialtyId: z.string(),
		order: z.number().optional(),
		title: z.string(),
		cover: z.string().optional().nullable(),
		description: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const CourseCreateManyCreatorInputObjectSchema = Schema
