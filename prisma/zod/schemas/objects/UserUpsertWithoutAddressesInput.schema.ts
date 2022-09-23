import { z } from 'zod'
import { UserUpdateWithoutAddressesInputObjectSchema } from './UserUpdateWithoutAddressesInput.schema'
import { UserUncheckedUpdateWithoutAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutAddressesInput.schema'
import { UserCreateWithoutAddressesInputObjectSchema } from './UserCreateWithoutAddressesInput.schema'
import { UserUncheckedCreateWithoutAddressesInputObjectSchema } from './UserUncheckedCreateWithoutAddressesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutAddressesInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const UserUpsertWithoutAddressesInputObjectSchema = Schema
