import { z } from 'zod'
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema'
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema'
import { UserCreateOrConnectWithoutLessonsInputObjectSchema } from './UserCreateOrConnectWithoutLessonsInput.schema'
import { UserUpsertWithoutLessonsInputObjectSchema } from './UserUpsertWithoutLessonsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutLessonsInputObjectSchema } from './UserUpdateWithoutLessonsInput.schema'
import { UserUncheckedUpdateWithoutLessonsInputObjectSchema } from './UserUncheckedUpdateWithoutLessonsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLessonsNestedInput> =
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
				upsert: z
					.lazy(() => UserUpsertWithoutLessonsInputObjectSchema)
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
						z.lazy(() => UserUpdateWithoutLessonsInputObjectSchema),
						z.lazy(() => UserUncheckedUpdateWithoutLessonsInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutLessonsNestedInputObjectSchema = Schema
