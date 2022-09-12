import { z } from 'zod'
import { DoctorCreateWithoutDoctorPatientInputObjectSchema } from './DoctorCreateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPatientInput.schema'
import { DoctorCreateOrConnectWithoutDoctorPatientInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorPatientInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorPatientInput> =
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
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema = Schema
