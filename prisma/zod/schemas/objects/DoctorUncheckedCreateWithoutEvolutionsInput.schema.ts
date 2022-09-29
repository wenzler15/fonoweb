import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { AnamnesisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { EvaluationUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './EvaluationUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { DoctorPatientUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { TemplateUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './TemplateUncheckedCreateNestedManyWithoutDoctorInput.schema'
import { AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateNestedManyWithoutDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutEvolutionsInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		userId: z.string(),
		specialtyId: z.string(),
		crfa: z.string().optional().nullable(),
		availability: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		anamnesis: z
			.lazy(
				() => AnamnesisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
			)
			.optional(),
		evaluations: z
			.lazy(
				() => EvaluationUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
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
		appointments: z
			.lazy(
				() =>
					AppointmentUncheckedCreateNestedManyWithoutDoctorInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema = Schema
