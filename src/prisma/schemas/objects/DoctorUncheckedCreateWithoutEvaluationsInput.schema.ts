import { z } from 'zod'
import { AnamnesisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { DoctorPatientUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { TemplateUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './TemplateUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { EvolutionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './EvolutionUncheckedCreateNestedManyWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutEvaluationsInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		userId: z.string(),
		specialtyId: z.string(),
		crfa: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		anamnesis: z
			.lazy(
				() => AnamnesisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
			)
			.optional(),
		doctorPatient: z
			.lazy(
				() =>
					DoctorPatientUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
			)
			.optional(),
		templates: z
			.lazy(
				() => TemplateUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
			)
			.optional(),
		evolutions: z
			.lazy(
				() => EvolutionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema = Schema
