import { z } from 'zod'
import { UserCreateWithoutExercisesInputObjectSchema } from './UserCreateWithoutExercisesInput.schema'
import { UserUncheckedCreateWithoutExercisesInputObjectSchema } from './UserUncheckedCreateWithoutExercisesInput.schema'
import { UserCreateOrConnectWithoutExercisesInputObjectSchema } from './UserCreateOrConnectWithoutExercisesInput.schema'
import { UserUpsertWithoutExercisesInputObjectSchema } from './UserUpsertWithoutExercisesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutExercisesInputObjectSchema } from './UserUpdateWithoutExercisesInput.schema'
import { UserUncheckedUpdateWithoutExercisesInputObjectSchema } from './UserUncheckedUpdateWithoutExercisesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExercisesNestedInput> =
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
				upsert: z
					.lazy(() => UserUpsertWithoutExercisesInputObjectSchema)
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
						z.lazy(() => UserUpdateWithoutExercisesInputObjectSchema),
						z.lazy(() => UserUncheckedUpdateWithoutExercisesInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutExercisesNestedInputObjectSchema =
	Schema
