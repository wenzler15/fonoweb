import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutAppointmentInputObjectSchema } from './PatientCreateWithoutAppointmentInput.schema'
import { PatientUncheckedCreateWithoutAppointmentInputObjectSchema } from './PatientUncheckedCreateWithoutAppointmentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutAppointmentInputObjectSchema),
				z.lazy(() => PatientUncheckedCreateWithoutAppointmentInputObjectSchema),
			]),
		})
		.strict()

export const PatientCreateOrConnectWithoutAppointmentInputObjectSchema = Schema
