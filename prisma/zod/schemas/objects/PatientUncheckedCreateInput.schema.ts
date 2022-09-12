import { z } from 'zod'
import { AnamnesisUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './AnamnesisUncheckedCreateNestedManyWithoutPatientInput.schema'
import { EvaluationUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './EvaluationUncheckedCreateNestedManyWithoutPatientInput.schema'
import { DoctorPatientUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedCreateNestedManyWithoutPatientInput.schema'
import { EvolutionUncheckedCreateNestedManyWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateNestedManyWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		userId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		anamnesis: z
			.lazy(
				() => AnamnesisUncheckedCreateNestedManyWithoutPatientInputObjectSchema,
			)
			.optional(),
		evaluations: z
			.lazy(
				() =>
					EvaluationUncheckedCreateNestedManyWithoutPatientInputObjectSchema,
			)
			.optional(),
		doctorPatient: z
			.lazy(
				() =>
					DoctorPatientUncheckedCreateNestedManyWithoutPatientInputObjectSchema,
			)
			.optional(),
		evolutions: z
			.lazy(
				() => EvolutionUncheckedCreateNestedManyWithoutPatientInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const PatientUncheckedCreateInputObjectSchema = Schema
