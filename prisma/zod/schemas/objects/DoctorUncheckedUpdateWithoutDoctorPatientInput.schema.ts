import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { AnamnesisUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './AnamnesisUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { EvaluationUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvaluationUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { TemplateUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './TemplateUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { EvolutionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvolutionUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutDoctorNestedInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.DoctorUncheckedUpdateWithoutDoctorPatientInput> =
	z
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
			userId: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
				])
				.optional(),
			specialtyId: z
				.union([
					z.string(),
					z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
			anamnesis: z
				.lazy(
					() =>
						AnamnesisUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
				)
				.optional(),
			evaluations: z
				.lazy(
					() =>
						EvaluationUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
				)
				.optional(),
			templates: z
				.lazy(
					() => TemplateUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
				)
				.optional(),
			evolutions: z
				.lazy(
					() =>
						EvolutionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
				)
				.optional(),
			appointments: z
				.lazy(
					() =>
						AppointmentUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
				)
				.optional(),
		})
		.strict()

export const DoctorUncheckedUpdateWithoutDoctorPatientInputObjectSchema = Schema
