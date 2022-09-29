import { z } from 'zod'
import { UserCreateWithoutPatientDataInputObjectSchema } from './UserCreateWithoutPatientDataInput.schema'
import { UserUncheckedCreateWithoutPatientDataInputObjectSchema } from './UserUncheckedCreateWithoutPatientDataInput.schema'
import { UserCreateOrConnectWithoutPatientDataInputObjectSchema } from './UserCreateOrConnectWithoutPatientDataInput.schema'
import { UserUpsertWithoutPatientDataInputObjectSchema } from './UserUpsertWithoutPatientDataInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutPatientDataInputObjectSchema } from './UserUpdateWithoutPatientDataInput.schema'
import { UserUncheckedUpdateWithoutPatientDataInputObjectSchema } from './UserUncheckedUpdateWithoutPatientDataInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPatientDataNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutPatientDataInputObjectSchema),
						z.lazy(
							() => UserUncheckedCreateWithoutPatientDataInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutPatientDataInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => UserUpsertWithoutPatientDataInputObjectSchema)
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
						z.lazy(() => UserUpdateWithoutPatientDataInputObjectSchema),
						z.lazy(
							() => UserUncheckedUpdateWithoutPatientDataInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutPatientDataNestedInputObjectSchema =
	Schema
