import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { PatientUpdateOneRequiredWithoutEvolutionsNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutEvolutionsNestedInput.schema'
import { DoctorUpdateOneRequiredWithoutEvolutionsNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutEvolutionsNestedInput.schema'
import { SpecialtyUpdateOneRequiredWithoutEvolutionNestedInputObjectSchema } from './SpecialtyUpdateOneRequiredWithoutEvolutionNestedInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.EvolutionUpdateInput> = z
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
		exercises: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		text: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		title: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		appointmentDate: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		comments: z
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
		patient: z
			.lazy(
				() => PatientUpdateOneRequiredWithoutEvolutionsNestedInputObjectSchema,
			)
			.optional(),
		doctor: z
			.lazy(
				() => DoctorUpdateOneRequiredWithoutEvolutionsNestedInputObjectSchema,
			)
			.optional(),
		specialty: z
			.lazy(
				() => SpecialtyUpdateOneRequiredWithoutEvolutionNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const EvolutionUpdateInputObjectSchema = Schema