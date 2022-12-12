import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		doctorId: z.literal(true).optional(),
		type: z.literal(true).optional(),
		specialtyId: z.literal(true).optional(),
		title: z.literal(true).optional(),
		html: z.literal(true).optional(),
		isActive: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		deletedAt: z.literal(true).optional(),
	})
	.strict()

export const TemplateMinAggregateInputObjectSchema = Schema
