import { z } from 'zod'
import { PatientUpdateWithoutAppointmentInputObjectSchema } from './PatientUpdateWithoutAppointmentInput.schema'
import { PatientUncheckedUpdateWithoutAppointmentInputObjectSchema } from './PatientUncheckedUpdateWithoutAppointmentInput.schema'
import { PatientCreateWithoutAppointmentInputObjectSchema } from './PatientCreateWithoutAppointmentInput.schema'
import { PatientUncheckedCreateWithoutAppointmentInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutAppointmentInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const PatientUpsertWithoutAppointmentInputObjectSchema = Schema
