import { z } from 'zod'
import { UserCreateWithoutDoctorDataInputObjectSchema } from './UserCreateWithoutDoctorDataInput.schema'
import { UserUncheckedCreateWithoutDoctorDataInputObjectSchema } from './UserUncheckedCreateWithoutDoctorDataInput.schema'
import { UserCreateOrConnectWithoutDoctorDataInputObjectSchema } from './UserCreateOrConnectWithoutDoctorDataInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDoctorDataInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutDoctorDataInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutDoctorDataInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutDoctorDataInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutDoctorDataInputObjectSchema = Schema
