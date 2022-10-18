import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateManyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		userId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const PatientCreateManyInputObjectSchema = Schema
