import { z } from 'zod'
import { UserCreateWithoutDoctorPatientInputObjectSchema } from './UserCreateWithoutDoctorPatientInput.schema'
import { UserUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './UserUncheckedCreateWithoutDoctorPatientInput.schema'
import { UserCreateOrConnectWithoutDoctorPatientInputObjectSchema } from './UserCreateOrConnectWithoutDoctorPatientInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDoctorPatientInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => UserUncheckedCreateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutDoctorPatientInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutDoctorPatientInputObjectSchema = Schema
