import { z } from 'zod'
import { PatientUpdateWithoutAppointmentInputObjectSchema } from './PatientUpdateWithoutAppointmentInput.schema'
import { PatientUncheckedUpdateWithoutAppointmentInputObjectSchema } from './PatientUncheckedUpdateWithoutAppointmentInput.schema'
import { PatientCreateWithoutAppointmentInputObjectSchema } from './PatientCreateWithoutAppointmentInput.schema'
import { PatientUncheckedCreateWithoutAppointmentInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutAppointmentInput> = z
	.object({
		update: z.union([
			z.lazy(() => PatientUpdateWithoutAppointmentInputObjectSchema),
			z.lazy(() => PatientUncheckedUpdateWithoutAppointmentInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => PatientCreateWithoutAppointmentInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutAppointmentInputObjectSchema),
		]),
	})
	.strict()

export const PatientUpsertWithoutAppointmentInputObjectSchema = Schema
