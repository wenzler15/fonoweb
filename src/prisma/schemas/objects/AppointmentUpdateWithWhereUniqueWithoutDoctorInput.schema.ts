import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentUpdateWithoutDoctorInputObjectSchema } from './AppointmentUpdateWithoutDoctorInput.schema'
import { AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const AppointmentUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
