import { z } from 'zod'
import { UserCreateNestedOneWithoutPatientDataInputObjectSchema } from './UserCreateNestedOneWithoutPatientDataInput.schema'
import { AnamnesisCreateNestedManyWithoutPatientInputObjectSchema } from './AnamnesisCreateNestedManyWithoutPatientInput.schema'
import { EvaluationCreateNestedManyWithoutPatientInputObjectSchema } from './EvaluationCreateNestedManyWithoutPatientInput.schema'
import { EvolutionCreateNestedManyWithoutPatientInputObjectSchema } from './EvolutionCreateNestedManyWithoutPatientInput.schema'
import { AppointmentCreateNestedManyWithoutPatientInputObjectSchema } from './AppointmentCreateNestedManyWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateWithoutDoctorPatientInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutPatientDataInputObjectSchema),
		anamnesis: z
			.lazy(() => AnamnesisCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
		appointment: z
			.lazy(() => AppointmentCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
	})
	.strict()

export const PatientCreateWithoutDoctorPatientInputObjectSchema = Schema
