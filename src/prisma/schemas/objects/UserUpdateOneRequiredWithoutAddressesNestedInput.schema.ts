import { z } from 'zod'
import { UserCreateWithoutAddressesInputObjectSchema } from './UserCreateWithoutAddressesInput.schema'
import { UserUncheckedCreateWithoutAddressesInputObjectSchema } from './UserUncheckedCreateWithoutAddressesInput.schema'
import { UserCreateOrConnectWithoutAddressesInputObjectSchema } from './UserCreateOrConnectWithoutAddressesInput.schema'
import { UserUpsertWithoutAddressesInputObjectSchema } from './UserUpsertWithoutAddressesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutAddressesInputObjectSchema } from './UserUpdateWithoutAddressesInput.schema'
import { UserUncheckedUpdateWithoutAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutAddressesInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAddressesNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutAddressesInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutAddressesInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutAddressesInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => UserUpsertWithoutAddressesInputObjectSchema)
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
						z.lazy(() => UserUpdateWithoutAddressesInputObjectSchema),
						z.lazy(() => UserUncheckedUpdateWithoutAddressesInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutAddressesNestedInputObjectSchema =
	Schema
