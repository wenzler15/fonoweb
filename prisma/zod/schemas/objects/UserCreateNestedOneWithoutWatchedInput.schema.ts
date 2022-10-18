import { z } from 'zod'
import { UserCreateWithoutWatchedInputObjectSchema } from './UserCreateWithoutWatchedInput.schema'
import { UserUncheckedCreateWithoutWatchedInputObjectSchema } from './UserUncheckedCreateWithoutWatchedInput.schema'
import { UserCreateOrConnectWithoutWatchedInputObjectSchema } from './UserCreateOrConnectWithoutWatchedInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutWatchedInput> =
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
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutWatchedInputObjectSchema = Schema
