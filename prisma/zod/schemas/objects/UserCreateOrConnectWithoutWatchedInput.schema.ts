import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutWatchedInputObjectSchema } from './UserCreateWithoutWatchedInput.schema'
import { UserUncheckedCreateWithoutWatchedInputObjectSchema } from './UserUncheckedCreateWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutWatchedInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutWatchedInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutWatchedInputObjectSchema),
		]),
	})
	.strict()

export const UserCreateOrConnectWithoutWatchedInputObjectSchema = Schema
