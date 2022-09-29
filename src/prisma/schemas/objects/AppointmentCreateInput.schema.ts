import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'
import { DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema } from './DoctorCreateNestedOneWithoutAppointmentsInput.schema'
import { PatientCreateNestedOneWithoutAppointmentInputObjectSchema } from './PatientCreateNestedOneWithoutAppointmentInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		when: z.date(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		status: z.lazy(() => AppointmentStatusSchema).optional(),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema,
		),
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutAppointmentInputObjectSchema,
		),
	})
	.strict()

export const AppointmentCreateInputObjectSchema = Schema
