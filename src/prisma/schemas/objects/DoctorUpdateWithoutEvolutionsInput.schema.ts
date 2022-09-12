import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { SpecialtyUpdateOneRequiredWithoutDoctorsNestedInputObjectSchema } from './SpecialtyUpdateOneRequiredWithoutDoctorsNestedInput.schema'
import { UserUpdateOneRequiredWithoutDoctorDataNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDoctorDataNestedInput.schema'
import { AnamnesisUpdateManyWithoutDoctorNestedInputObjectSchema } from './AnamnesisUpdateManyWithoutDoctorNestedInput.schema'
import { EvaluationUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvaluationUpdateManyWithoutDoctorNestedInput.schema'
import { DoctorPatientUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorPatientUpdateManyWithoutDoctorNestedInput.schema'
import { TemplateUpdateManyWithoutDoctorNestedInputObjectSchema } from './TemplateUpdateManyWithoutDoctorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateWithoutEvolutionsInput> = z
	.object({
		id: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		numericId: z
			.union([
				z.number(),
				z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		crfa: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		createdAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		updatedAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		deletedAt: z
			.union([
				z.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		specialty: z
			.lazy(
				() => SpecialtyUpdateOneRequiredWithoutDoctorsNestedInputObjectSchema,
			)
			.optional(),
		user: z
			.lazy(() => UserUpdateOneRequiredWithoutDoctorDataNestedInputObjectSchema)
			.optional(),
		anamnesis: z
			.lazy(() => AnamnesisUpdateManyWithoutDoctorNestedInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationUpdateManyWithoutDoctorNestedInputObjectSchema)
			.optional(),
		doctorPatient: z
			.lazy(() => DoctorPatientUpdateManyWithoutDoctorNestedInputObjectSchema)
			.optional(),
		templates: z
			.lazy(() => TemplateUpdateManyWithoutDoctorNestedInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorUpdateWithoutEvolutionsInputObjectSchema = Schema
