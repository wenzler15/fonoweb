import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateManySpecialtyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		patientId: z.string(),
		doctorId: z.string(),
		text: z.string().optional().nullable(),
		title: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const EvaluationCreateManySpecialtyInputObjectSchema = Schema
