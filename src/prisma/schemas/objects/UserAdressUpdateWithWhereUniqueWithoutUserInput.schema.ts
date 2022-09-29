import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './UserAdressWhereUniqueInput.schema'
import { UserAdressUpdateWithoutUserInputObjectSchema } from './UserAdressUpdateWithoutUserInput.schema'
import { UserAdressUncheckedUpdateWithoutUserInputObjectSchema } from './UserAdressUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => UserAdressUpdateWithoutUserInputObjectSchema),
				z.lazy(() => UserAdressUncheckedUpdateWithoutUserInputObjectSchema),
			]),
		})
		.strict()

export const UserAdressUpdateWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
