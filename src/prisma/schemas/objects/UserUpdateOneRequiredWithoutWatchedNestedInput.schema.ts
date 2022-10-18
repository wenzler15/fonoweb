import { z } from 'zod'
import { UserCreateWithoutWatchedInputObjectSchema } from './UserCreateWithoutWatchedInput.schema'
import { UserUncheckedCreateWithoutWatchedInputObjectSchema } from './UserUncheckedCreateWithoutWatchedInput.schema'
import { UserCreateOrConnectWithoutWatchedInputObjectSchema } from './UserCreateOrConnectWithoutWatchedInput.schema'
import { UserUpsertWithoutWatchedInputObjectSchema } from './UserUpsertWithoutWatchedInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutWatchedInputObjectSchema } from './UserUpdateWithoutWatchedInput.schema'
import { UserUncheckedUpdateWithoutWatchedInputObjectSchema } from './UserUncheckedUpdateWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWatchedNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutWatchedInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutWatchedInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutWatchedInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => UserUpsertWithoutWatchedInputObjectSchema)
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
						z.lazy(() => UserUpdateWithoutWatchedInputObjectSchema),
						z.lazy(() => UserUncheckedUpdateWithoutWatchedInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutWatchedNestedInputObjectSchema = Schema
