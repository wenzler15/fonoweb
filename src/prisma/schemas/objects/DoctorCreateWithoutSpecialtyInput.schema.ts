import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { UserCreateNestedOneWithoutDoctorDataInputObjectSchema } from './UserCreateNestedOneWithoutDoctorDataInput.schema'
import { AnamnesisCreateNestedManyWithoutDoctorInputObjectSchema } from './AnamnesisCreateNestedManyWithoutDoctorInput.schema'
import { EvaluationCreateNestedManyWithoutDoctorInputObjectSchema } from './EvaluationCreateNestedManyWithoutDoctorInput.schema'
import { DoctorPatientCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorPatientCreateNestedManyWithoutDoctorInput.schema'
import { TemplateCreateNestedManyWithoutDoctorInputObjectSchema } from './TemplateCreateNestedManyWithoutDoctorInput.schema'
import { EvolutionCreateNestedManyWithoutDoctorInputObjectSchema } from './EvolutionCreateNestedManyWithoutDoctorInput.schema'
import { AppointmentCreateNestedManyWithoutDoctorInputObjectSchema } from './AppointmentCreateNestedManyWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.DoctorCreateWithoutSpecialtyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		crfa: z.string().optional().nullable(),
		availability: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutDoctorDataInputObjectSchema),
		anamnesis: z
			.lazy(() => AnamnesisCreateNestedManyWithoutDoctorInputObjectSchema)
			.optional(),
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
		appointments: z
			.lazy(() => AppointmentCreateNestedManyWithoutDoctorInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorCreateWithoutSpecialtyInputObjectSchema = Schema
