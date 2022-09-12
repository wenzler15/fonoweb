import { z } from 'zod'
import { UserCreateNestedOneWithoutPatientDataInputObjectSchema } from './UserCreateNestedOneWithoutPatientDataInput.schema'
import { EvaluationCreateNestedManyWithoutPatientInputObjectSchema } from './EvaluationCreateNestedManyWithoutPatientInput.schema'
import { DoctorPatientCreateNestedManyWithoutPatientInputObjectSchema } from './DoctorPatientCreateNestedManyWithoutPatientInput.schema'
import { EvolutionCreateNestedManyWithoutPatientInputObjectSchema } from './EvolutionCreateNestedManyWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateWithoutAnamnesisInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutPatientDataInputObjectSchema),
		evaluations: z
			.lazy(() => EvaluationCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
		doctorPatient: z
			.lazy(() => DoctorPatientCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
	})
	.strict()

export const PatientCreateWithoutAnamnesisInputObjectSchema = Schema
