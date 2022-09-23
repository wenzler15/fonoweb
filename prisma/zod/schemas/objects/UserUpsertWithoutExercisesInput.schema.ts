import { z } from 'zod'
import { UserUpdateWithoutExercisesInputObjectSchema } from './UserUpdateWithoutExercisesInput.schema'
import { UserUncheckedUpdateWithoutExercisesInputObjectSchema } from './UserUncheckedUpdateWithoutExercisesInput.schema'
import { UserCreateWithoutExercisesInputObjectSchema } from './UserCreateWithoutExercisesInput.schema'
import { UserUncheckedCreateWithoutExercisesInputObjectSchema } from './UserUncheckedCreateWithoutExercisesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutExercisesInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const UserUpsertWithoutExercisesInputObjectSchema = Schema
