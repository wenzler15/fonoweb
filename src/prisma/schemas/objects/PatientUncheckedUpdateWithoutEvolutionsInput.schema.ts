import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { AnamnesisUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './AnamnesisUncheckedUpdateManyWithoutPatientNestedInput.schema'
import { EvaluationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './EvaluationUncheckedUpdateManyWithoutPatientNestedInput.schema'
import { DoctorPatientUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './DoctorPatientUncheckedUpdateManyWithoutPatientNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUncheckedUpdateWithoutEvolutionsInput> = z
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
				() => AnamnesisUncheckedUpdateManyWithoutPatientNestedInputObjectSchema,
			)
			.optional(),
		evaluations: z
			.lazy(
				() =>
					EvaluationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema,
			)
			.optional(),
		doctorPatient: z
			.lazy(
				() =>
					DoctorPatientUncheckedUpdateManyWithoutPatientNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const PatientUncheckedUpdateWithoutEvolutionsInputObjectSchema = Schema
