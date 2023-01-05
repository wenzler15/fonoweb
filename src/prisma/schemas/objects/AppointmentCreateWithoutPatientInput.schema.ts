import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'
import { DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema } from './DoctorCreateNestedOneWithoutAppointmentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateWithoutPatientInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		when: z.date(),
		end: z.date(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		status: z.lazy(() => AppointmentStatusSchema).optional(),
		Doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema,
		),
	})
	.strict()

export const AppointmentCreateWithoutPatientInputObjectSchema = Schema
