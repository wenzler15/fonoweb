import { z } from 'zod'
import { UserUpdateWithoutLessonsInputObjectSchema } from './UserUpdateWithoutLessonsInput.schema'
import { UserUncheckedUpdateWithoutLessonsInputObjectSchema } from './UserUncheckedUpdateWithoutLessonsInput.schema'
import { UserCreateWithoutLessonsInputObjectSchema } from './UserCreateWithoutLessonsInput.schema'
import { UserUncheckedCreateWithoutLessonsInputObjectSchema } from './UserUncheckedCreateWithoutLessonsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutLessonsInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutLessonsInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutLessonsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutLessonsInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutLessonsInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutLessonsInputObjectSchema = Schema
