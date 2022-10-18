import { z } from 'zod'
import { UserCreateWithoutCoursesInputObjectSchema } from './UserCreateWithoutCoursesInput.schema'
import { UserUncheckedCreateWithoutCoursesInputObjectSchema } from './UserUncheckedCreateWithoutCoursesInput.schema'
import { UserCreateOrConnectWithoutCoursesInputObjectSchema } from './UserCreateOrConnectWithoutCoursesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCoursesInput> =
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
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutCoursesInputObjectSchema = Schema
