import { z } from 'zod'
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema'
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema'
import { UserCreateOrConnectWithoutContactsInputObjectSchema } from './UserCreateOrConnectWithoutContactsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutContactsInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutContactsInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutContactsInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutContactsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutContactsInputObjectSchema = Schema
