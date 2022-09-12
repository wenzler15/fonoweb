import { z } from 'zod'
import { SpecialtyCreateNestedOneWithoutDoctorsInputObjectSchema } from './SpecialtyCreateNestedOneWithoutDoctorsInput.schema'
import { UserCreateNestedOneWithoutDoctorDataInputObjectSchema } from './UserCreateNestedOneWithoutDoctorDataInput.schema'
import { EvaluationCreateNestedManyWithoutDoctorInputObjectSchema } from './EvaluationCreateNestedManyWithoutDoctorInput.schema'
import { DoctorPatientCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorPatientCreateNestedManyWithoutDoctorInput.schema'
import { TemplateCreateNestedManyWithoutDoctorInputObjectSchema } from './TemplateCreateNestedManyWithoutDoctorInput.schema'
import { EvolutionCreateNestedManyWithoutDoctorInputObjectSchema } from './EvolutionCreateNestedManyWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateWithoutAnamnesisInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		crfa: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutDoctorsInputObjectSchema,
		),
		user: z.lazy(() => UserCreateNestedOneWithoutDoctorDataInputObjectSchema),
		evaluations: z
			.lazy(() => EvaluationCreateNestedManyWithoutDoctorInputObjectSchema)
			.optional(),
		doctorPatient: z
			.lazy(() => DoctorPatientCreateNestedManyWithoutDoctorInputObjectSchema)
			.optional(),
		templates: z
			.lazy(() => TemplateCreateNestedManyWithoutDoctorInputObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionCreateNestedManyWithoutDoctorInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorCreateWithoutAnamnesisInputObjectSchema = Schema
