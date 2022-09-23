import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentUpdateWithoutPatientInputObjectSchema } from './AppointmentUpdateWithoutPatientInput.schema'
import { AppointmentUncheckedUpdateWithoutPatientInputObjectSchema } from './AppointmentUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const AppointmentUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
