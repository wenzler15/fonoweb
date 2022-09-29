import { z } from 'zod'
import { DoctorCreateWithoutDoctorPatientInputObjectSchema } from './DoctorCreateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPatientInput.schema'
import { DoctorCreateOrConnectWithoutDoctorPatientInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorPatientInput.schema'
import { DoctorUpsertWithoutDoctorPatientInputObjectSchema } from './DoctorUpsertWithoutDoctorPatientInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutDoctorPatientInputObjectSchema } from './DoctorUpdateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(
						() => DoctorCreateOrConnectWithoutDoctorPatientInputObjectSchema,
					)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => DoctorUpsertWithoutDoctorPatientInputObjectSchema)
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
						z.lazy(() => DoctorUpdateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedUpdateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema =
	Schema
