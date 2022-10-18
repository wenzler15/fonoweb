import { z } from 'zod'
import { UserCreateWithoutCoursesInputObjectSchema } from './UserCreateWithoutCoursesInput.schema'
import { UserUncheckedCreateWithoutCoursesInputObjectSchema } from './UserUncheckedCreateWithoutCoursesInput.schema'
import { UserCreateOrConnectWithoutCoursesInputObjectSchema } from './UserCreateOrConnectWithoutCoursesInput.schema'
import { UserUpsertWithoutCoursesInputObjectSchema } from './UserUpsertWithoutCoursesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutCoursesInputObjectSchema } from './UserUpdateWithoutCoursesInput.schema'
import { UserUncheckedUpdateWithoutCoursesInputObjectSchema } from './UserUncheckedUpdateWithoutCoursesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCoursesNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutCoursesInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutCoursesInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutCoursesInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => UserUpsertWithoutCoursesInputObjectSchema)
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
						z.lazy(() => UserUpdateWithoutCoursesInputObjectSchema),
						z.lazy(() => UserUncheckedUpdateWithoutCoursesInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutCoursesNestedInputObjectSchema = Schema
