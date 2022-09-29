import { z } from 'zod'
import { DoctorUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUpdateWithoutAppointmentsInput.schema'
import { DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInput.schema'
import { DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema'
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutAppointmentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => DoctorUpdateWithoutAppointmentsInputObjectSchema),
			z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutAppointmentsInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema),
		]),
	})
	.strict()

export const DoctorUpsertWithoutAppointmentsInputObjectSchema = Schema
