import { z } from 'zod'
import { UserCreateWithoutDoctorDataInputObjectSchema } from './UserCreateWithoutDoctorDataInput.schema'
import { UserUncheckedCreateWithoutDoctorDataInputObjectSchema } from './UserUncheckedCreateWithoutDoctorDataInput.schema'
import { UserCreateOrConnectWithoutDoctorDataInputObjectSchema } from './UserCreateOrConnectWithoutDoctorDataInput.schema'
import { UserUpsertWithoutDoctorDataInputObjectSchema } from './UserUpsertWithoutDoctorDataInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutDoctorDataInputObjectSchema } from './UserUpdateWithoutDoctorDataInput.schema'
import { UserUncheckedUpdateWithoutDoctorDataInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorDataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDoctorDataNestedInput> =
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
				upsert: z
					.lazy(() => UserUpsertWithoutDoctorDataInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => UserUpdateWithoutDoctorDataInputObjectSchema),
						z.lazy(() => UserUncheckedUpdateWithoutDoctorDataInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutDoctorDataNestedInputObjectSchema =
	Schema
