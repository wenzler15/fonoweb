import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutPatientDataNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPatientDataNestedInput.schema'
import { AnamnesisUpdateManyWithoutPatientNestedInputObjectSchema } from './AnamnesisUpdateManyWithoutPatientNestedInput.schema'
import { EvaluationUpdateManyWithoutPatientNestedInputObjectSchema } from './EvaluationUpdateManyWithoutPatientNestedInput.schema'
import { EvolutionUpdateManyWithoutPatientNestedInputObjectSchema } from './EvolutionUpdateManyWithoutPatientNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateWithoutDoctorPatientInput> = z
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
		user: z
			.lazy(
				() => UserUpdateOneRequiredWithoutPatientDataNestedInputObjectSchema,
			)
			.optional(),
		anamnesis: z
			.lazy(() => AnamnesisUpdateManyWithoutPatientNestedInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationUpdateManyWithoutPatientNestedInputObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionUpdateManyWithoutPatientNestedInputObjectSchema)
			.optional(),
	})
	.strict()

export const PatientUpdateWithoutDoctorPatientInputObjectSchema = Schema
