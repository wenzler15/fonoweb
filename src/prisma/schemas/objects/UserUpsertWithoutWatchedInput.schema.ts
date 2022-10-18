import { z } from 'zod'
import { UserUpdateWithoutWatchedInputObjectSchema } from './UserUpdateWithoutWatchedInput.schema'
import { UserUncheckedUpdateWithoutWatchedInputObjectSchema } from './UserUncheckedUpdateWithoutWatchedInput.schema'
import { UserCreateWithoutWatchedInputObjectSchema } from './UserCreateWithoutWatchedInput.schema'
import { UserUncheckedCreateWithoutWatchedInputObjectSchema } from './UserUncheckedCreateWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutWatchedInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutWatchedInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutWatchedInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutWatchedInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutWatchedInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutWatchedInputObjectSchema = Schema
