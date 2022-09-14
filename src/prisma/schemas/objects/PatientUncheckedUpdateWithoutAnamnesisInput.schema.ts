import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { EvaluationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './EvaluationUncheckedUpdateManyWithoutPatientNestedInput.schema'
import { DoctorPatientUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './DoctorPatientUncheckedUpdateManyWithoutPatientNestedInput.schema'
import { EvolutionUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './EvolutionUncheckedUpdateManyWithoutPatientNestedInput.schema'
import { AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutPatientNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUncheckedUpdateWithoutAnamnesisInput> = z
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
		evolutions: z
			.lazy(
				() => EvolutionUncheckedUpdateManyWithoutPatientNestedInputObjectSchema,
			)
			.optional(),
		appointment: z
			.lazy(
				() =>
					AppointmentUncheckedUpdateManyWithoutPatientNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const PatientUncheckedUpdateWithoutAnamnesisInputObjectSchema = Schema
