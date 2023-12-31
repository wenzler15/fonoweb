import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { SpecialtyUpdateOneRequiredWithoutDoctorsNestedInputObjectSchema } from './SpecialtyUpdateOneRequiredWithoutDoctorsNestedInput.schema'
import { UserUpdateOneRequiredWithoutDoctorDataNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDoctorDataNestedInput.schema'
import { AnamnesisUpdateManyWithoutDoctorNestedInputObjectSchema } from './AnamnesisUpdateManyWithoutDoctorNestedInput.schema'
import { EvaluationUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvaluationUpdateManyWithoutDoctorNestedInput.schema'
import { DoctorPatientUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorPatientUpdateManyWithoutDoctorNestedInput.schema'
import { EvolutionUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvolutionUpdateManyWithoutDoctorNestedInput.schema'
import { AppointmentUpdateManyWithoutDoctorNestedInputObjectSchema } from './AppointmentUpdateManyWithoutDoctorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.DoctorUpdateWithoutTemplatesInput> = z
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
		availability: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
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
		evolutions: z
			.lazy(() => EvolutionUpdateManyWithoutDoctorNestedInputObjectSchema)
			.optional(),
		appointments: z
			.lazy(() => AppointmentUpdateManyWithoutDoctorNestedInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorUpdateWithoutTemplatesInputObjectSchema = Schema
