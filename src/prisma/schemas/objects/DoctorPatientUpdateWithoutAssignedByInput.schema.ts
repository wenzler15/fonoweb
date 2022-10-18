import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { DoctorUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutDoctorPatientNestedInput.schema'
import { PatientUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutDoctorPatientNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateWithoutAssignedByInput> = z
	.object({
		createdAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		active: z
			.union([
				z.boolean(),
				z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		doctor: z
			.lazy(
				() =>
					DoctorUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema,
			)
			.optional(),
		patient: z
			.lazy(
				() =>
					PatientUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const DoctorPatientUpdateWithoutAssignedByInputObjectSchema = Schema
