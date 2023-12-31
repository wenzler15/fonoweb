import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { DoctorUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutDoctorPatientNestedInput.schema'
import { UserUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDoctorPatientNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateWithoutPatientInput> = z
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
		assignedBy: z
			.lazy(
				() => UserUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const DoctorPatientUpdateWithoutPatientInputObjectSchema = Schema
