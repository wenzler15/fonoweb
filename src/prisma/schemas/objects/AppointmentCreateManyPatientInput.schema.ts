import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateManyPatientInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		doctorId: z.string(),
		when: z.date(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		status: z.lazy(() => AppointmentStatusSchema).optional(),
	})
	.strict()

export const AppointmentCreateManyPatientInputObjectSchema = Schema
