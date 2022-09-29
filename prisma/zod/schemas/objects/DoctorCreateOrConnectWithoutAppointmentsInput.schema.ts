import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema'
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutAppointmentsInputObjectSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema),
			]),
		})
		.strict()

export const DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema = Schema
