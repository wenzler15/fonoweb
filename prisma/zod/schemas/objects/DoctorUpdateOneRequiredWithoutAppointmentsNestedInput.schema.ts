import { z } from 'zod'
import { DoctorCreateWithoutAppointmentsInputObjectSchema } from './DoctorCreateWithoutAppointmentsInput.schema'
import { DoctorUncheckedCreateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedCreateWithoutAppointmentsInput.schema'
import { DoctorCreateOrConnectWithoutAppointmentsInputObjectSchema } from './DoctorCreateOrConnectWithoutAppointmentsInput.schema'
import { DoctorUpsertWithoutAppointmentsInputObjectSchema } from './DoctorUpsertWithoutAppointmentsInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUpdateWithoutAppointmentsInput.schema'
import { DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput> =
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
				upsert: z
					.lazy(() => DoctorUpsertWithoutAppointmentsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => DoctorUpdateWithoutAppointmentsInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedUpdateWithoutAppointmentsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUpdateOneRequiredWithoutAppointmentsNestedInputObjectSchema =
	Schema
