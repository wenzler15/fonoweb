import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentUpdateWithoutDoctorInputObjectSchema } from './AppointmentUpdateWithoutDoctorInput.schema'
import { AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedUpdateWithoutDoctorInput.schema'
import { AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema'
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => AppointmentUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => AppointmentUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const AppointmentUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
