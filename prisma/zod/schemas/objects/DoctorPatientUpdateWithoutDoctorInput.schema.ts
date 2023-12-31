import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { PatientUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema } from './PatientUpdateOneRequiredWithoutDoctorPatientNestedInput.schema'
import { UserUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDoctorPatientNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateWithoutDoctorInput> = z
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
		patient: z
			.lazy(
				() =>
					PatientUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema,
			)
			.optional(),
		assignedBy: z
			.lazy(
				() => UserUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const DoctorPatientUpdateWithoutDoctorInputObjectSchema = Schema
