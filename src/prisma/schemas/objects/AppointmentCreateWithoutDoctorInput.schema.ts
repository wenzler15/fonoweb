import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'
import { PatientCreateNestedOneWithoutAppointmentInputObjectSchema } from './PatientCreateNestedOneWithoutAppointmentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateWithoutDoctorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		when: z.date(),
		end: z.date(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		status: z.lazy(() => AppointmentStatusSchema).optional(),
		patient: z
			.lazy(() => PatientCreateNestedOneWithoutAppointmentInputObjectSchema)
			.optional(),
	})
	.strict()

export const AppointmentCreateWithoutDoctorInputObjectSchema = Schema
