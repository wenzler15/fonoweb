import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './AppointmentWhereUniqueInput.schema'
import { AppointmentCreateWithoutPatientInputObjectSchema } from './AppointmentCreateWithoutPatientInput.schema'
import { AppointmentUncheckedCreateWithoutPatientInputObjectSchema } from './AppointmentUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => AppointmentCreateWithoutPatientInputObjectSchema),
				z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputObjectSchema),
			]),
		})
		.strict()

export const AppointmentCreateOrConnectWithoutPatientInputObjectSchema = Schema
