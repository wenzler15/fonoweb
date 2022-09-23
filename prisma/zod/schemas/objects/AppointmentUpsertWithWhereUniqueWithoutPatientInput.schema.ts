import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentUpdateWithoutPatientInputObjectSchema } from './AppointmentUpdateWithoutPatientInput.schema'
import { AppointmentUncheckedUpdateWithoutPatientInputObjectSchema } from './AppointmentUncheckedUpdateWithoutPatientInput.schema'
import { AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema'
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const AppointmentUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
