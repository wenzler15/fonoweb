import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumAppointmentStatusFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => AppointmentStatusSchema).optional(),
		})
		.strict()

export const EnumAppointmentStatusFieldUpdateOperationsInputObjectSchema =
	Schema
