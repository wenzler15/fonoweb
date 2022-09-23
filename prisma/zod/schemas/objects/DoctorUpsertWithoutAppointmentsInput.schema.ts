import { z } from 'zod'
import { DoctorUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUpdateWithoutAppointmentsInput.schema'
import { DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInput.schema'
import { DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema'
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutAppointmentsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutAppointmentsInputObjectSchema = Schema
