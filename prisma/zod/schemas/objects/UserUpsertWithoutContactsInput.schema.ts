import { z } from 'zod'
import { UserUpdateWithoutContactsInputObjectSchema } from './UserUpdateWithoutContactsInput.schema'
import { UserUncheckedUpdateWithoutContactsInputObjectSchema } from './UserUncheckedUpdateWithoutContactsInput.schema'
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema'
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutContactsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const UserUpsertWithoutContactsInputObjectSchema = Schema
