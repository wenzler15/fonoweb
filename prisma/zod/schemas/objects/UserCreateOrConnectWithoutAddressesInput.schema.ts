import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutAddressesInputObjectSchema } from './UserCreateWithoutAddressesInput.schema'
import { UserUncheckedCreateWithoutAddressesInputObjectSchema } from './UserUncheckedCreateWithoutAddressesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAddressesInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const UserCreateOrConnectWithoutAddressesInputObjectSchema = Schema
