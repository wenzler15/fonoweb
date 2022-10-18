import { z } from 'zod'
import { DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema'
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'
import { DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema } from './DoctorCreateOrConnectWithoutAppointmentsInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutAppointmentsInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutAppointmentsInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const DoctorCreateNestedOneWithoutAppointmentsInputObjectSchema = Schema
