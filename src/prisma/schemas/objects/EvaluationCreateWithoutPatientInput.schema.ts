import { z } from 'zod'
import { DoctorCreateNestedOneWithoutEvaluationsInputObjectSchema } from './DoctorCreateNestedOneWithoutEvaluationsInput.schema'
import { SpecialtyCreateNestedOneWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateNestedOneWithoutEvaluationsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateWithoutPatientInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		text: z.string().optional().nullable(),
		title: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutEvaluationsInputObjectSchema,
		),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutEvaluationsInputObjectSchema,
		),
	})
	.strict()

export const EvaluationCreateWithoutPatientInputObjectSchema = Schema
