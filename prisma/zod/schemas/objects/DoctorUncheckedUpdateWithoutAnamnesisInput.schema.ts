import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { EvaluationUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvaluationUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { DoctorPatientUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './DoctorPatientUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { TemplateUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './TemplateUncheckedUpdateManyWithoutDoctorNestedInput.schema'
import { EvolutionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema } from './EvolutionUncheckedUpdateManyWithoutDoctorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUncheckedUpdateWithoutAnamnesisInput> = z
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
		evaluations: z
			.lazy(
				() => EvaluationUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
			)
			.optional(),
		doctorPatient: z
			.lazy(
				() =>
					DoctorPatientUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
			)
			.optional(),
		templates: z
			.lazy(
				() => TemplateUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
			)
			.optional(),
		evolutions: z
			.lazy(
				() => EvolutionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const DoctorUncheckedUpdateWithoutAnamnesisInputObjectSchema = Schema
