import { z } from 'zod'
import { UserUpdateWithoutAddressesInputObjectSchema } from './UserUpdateWithoutAddressesInput.schema'
import { UserUncheckedUpdateWithoutAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutAddressesInput.schema'
import { UserCreateWithoutAddressesInputObjectSchema } from './UserCreateWithoutAddressesInput.schema'
import { UserUncheckedCreateWithoutAddressesInputObjectSchema } from './UserUncheckedCreateWithoutAddressesInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutAddressesInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutAddressesInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutAddressesInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutAddressesInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutAddressesInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutAddressesInputObjectSchema = Schema
