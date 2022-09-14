import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentCreateWithoutDoctorInputObjectSchema } from './AppointmentCreateWithoutDoctorInput.schema'
import { AppointmentUncheckedCreateWithoutDoctorInputObjectSchema } from './AppointmentUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutDoctorInput> = z
	.object({
		where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AppointmentCreateWithoutDoctorInputObjectSchema),
			z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputObjectSchema),
		]),
	})
	.strict()

export const AppointmentCreateOrConnectWithoutDoctorInputObjectSchema = Schema
