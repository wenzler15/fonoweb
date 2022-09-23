import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema'
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
			create: z.any(),
		})
		.strict()

export const DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema = Schema
