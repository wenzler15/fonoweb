import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './UserAdressWhereUniqueInput.schema'
import { UserAdressCreateWithoutUserInputObjectSchema } from './UserAdressCreateWithoutUserInput.schema'
import { UserAdressUncheckedCreateWithoutUserInputObjectSchema } from './UserAdressUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const UserAdressCreateOrConnectWithoutUserInputObjectSchema = Schema
