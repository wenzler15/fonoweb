import { z } from 'zod'
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema'
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema'
import { UserCreateOrConnectWithoutLessonsInputObjectSchema } from './UserCreateOrConnectWithoutLessonsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutLessonsInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutLessonsInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutLessonsInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutLessonsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutLessonsInputObjectSchema = Schema
