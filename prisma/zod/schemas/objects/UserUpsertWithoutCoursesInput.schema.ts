import { z } from 'zod'
import { UserUpdateWithoutCoursesInputObjectSchema } from './UserUpdateWithoutCoursesInput.schema'
import { UserUncheckedUpdateWithoutCoursesInputObjectSchema } from './UserUncheckedUpdateWithoutCoursesInput.schema'
import { UserCreateWithoutCoursesInputObjectSchema } from './UserCreateWithoutCoursesInput.schema'
import { UserUncheckedCreateWithoutCoursesInputObjectSchema } from './UserUncheckedCreateWithoutCoursesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutCoursesInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutCoursesInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutCoursesInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutCoursesInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutCoursesInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutCoursesInputObjectSchema = Schema
