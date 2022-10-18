import { z } from 'zod'
import { UserCreateWithoutExercisesInputObjectSchema } from './UserCreateWithoutExercisesInput.schema'
import { UserUncheckedCreateWithoutExercisesInputObjectSchema } from './UserUncheckedCreateWithoutExercisesInput.schema'
import { UserCreateOrConnectWithoutExercisesInputObjectSchema } from './UserCreateOrConnectWithoutExercisesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutExercisesInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutExercisesInputObjectSchema),
						z.lazy(() => UserUncheckedCreateWithoutExercisesInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutExercisesInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutExercisesInputObjectSchema = Schema
