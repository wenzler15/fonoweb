import { z } from 'zod'
import { UserCreateNestedOneWithoutPatientDataInputObjectSchema } from './UserCreateNestedOneWithoutPatientDataInput.schema'
import { AnamnesisCreateNestedManyWithoutPatientInputObjectSchema } from './AnamnesisCreateNestedManyWithoutPatientInput.schema'
import { EvaluationCreateNestedManyWithoutPatientInputObjectSchema } from './EvaluationCreateNestedManyWithoutPatientInput.schema'
import { DoctorPatientCreateNestedManyWithoutPatientInputObjectSchema } from './DoctorPatientCreateNestedManyWithoutPatientInput.schema'
import { EvolutionCreateNestedManyWithoutPatientInputObjectSchema } from './EvolutionCreateNestedManyWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateWithoutAppointmentInput> = z
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
		doctorPatient: z
			.lazy(() => DoctorPatientCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionCreateNestedManyWithoutPatientInputObjectSchema)
			.optional(),
	})
	.strict()

export const PatientCreateWithoutAppointmentInputObjectSchema = Schema
