import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutExercisesInputObjectSchema } from './UserCreateWithoutExercisesInput.schema'
import { UserUncheckedCreateWithoutExercisesInputObjectSchema } from './UserUncheckedCreateWithoutExercisesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutExercisesInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const UserCreateOrConnectWithoutExercisesInputObjectSchema = Schema
