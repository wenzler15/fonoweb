import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'
import { EnumAppointmentStatusFieldUpdateOperationsInputObjectSchema } from './EnumAppointmentStatusFieldUpdateOperationsInput.schema'
import { DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutAppointmentsNestedInput.schema'
import { PatientUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutAppointmentNestedInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpdateInput> = z
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
		when: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
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
		status: z
			.union([
				z.lazy(() => AppointmentStatusSchema),
				z.lazy(
					() => EnumAppointmentStatusFieldUpdateOperationsInputObjectSchema,
				),
			])
			.optional(),
		doctor: z
			.lazy(
				() => DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema,
			)
			.optional(),
		patient: z
			.lazy(
				() => PatientUpdateOneRequiredWithoutAppointmentNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const AppointmentUpdateInputObjectSchema = Schema
