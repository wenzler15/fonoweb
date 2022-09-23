import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './UserAdressWhereUniqueInput.schema'
import { UserAdressUpdateWithoutUserInputObjectSchema } from './UserAdressUpdateWithoutUserInput.schema'
import { UserAdressUncheckedUpdateWithoutUserInputObjectSchema } from './UserAdressUncheckedUpdateWithoutUserInput.schema'
import { UserAdressCreateWithoutUserInputObjectSchema } from './UserAdressCreateWithoutUserInput.schema'
import { UserAdressUncheckedCreateWithoutUserInputObjectSchema } from './UserAdressUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const UserAdressUpsertWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
