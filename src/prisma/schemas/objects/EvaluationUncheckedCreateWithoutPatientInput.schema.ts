import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUncheckedCreateWithoutPatientInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		doctorId: z.string(),
		specialtyId: z.string(),
		text: z.string().optional().nullable(),
		title: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const EvaluationUncheckedCreateWithoutPatientInputObjectSchema = Schema
