import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutCoursesInputObjectSchema } from './UserCreateWithoutCoursesInput.schema'
import { UserUncheckedCreateWithoutCoursesInputObjectSchema } from './UserUncheckedCreateWithoutCoursesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCoursesInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutCoursesInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutCoursesInputObjectSchema),
		]),
	})
	.strict()

export const UserCreateOrConnectWithoutCoursesInputObjectSchema = Schema
