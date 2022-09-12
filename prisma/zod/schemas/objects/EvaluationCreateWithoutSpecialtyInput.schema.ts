import { z } from 'zod'
import { PatientCreateNestedOneWithoutEvaluationsInputObjectSchema } from './PatientCreateNestedOneWithoutEvaluationsInput.schema'
import { DoctorCreateNestedOneWithoutEvaluationsInputObjectSchema } from './DoctorCreateNestedOneWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateWithoutSpecialtyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		text: z.string().optional().nullable(),
		title: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutEvaluationsInputObjectSchema,
		),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutEvaluationsInputObjectSchema,
		),
	})
	.strict()

export const EvaluationCreateWithoutSpecialtyInputObjectSchema = Schema
