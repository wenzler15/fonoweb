import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './UserAdressWhereUniqueInput.schema'
import { UserAdressUpdateWithoutUserInputObjectSchema } from './UserAdressUpdateWithoutUserInput.schema'
import { UserAdressUncheckedUpdateWithoutUserInputObjectSchema } from './UserAdressUncheckedUpdateWithoutUserInput.schema'
import { UserAdressCreateWithoutUserInputObjectSchema } from './UserAdressCreateWithoutUserInput.schema'
import { UserAdressUncheckedCreateWithoutUserInputObjectSchema } from './UserAdressUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => UserAdressUpdateWithoutUserInputObjectSchema),
				z.lazy(() => UserAdressUncheckedUpdateWithoutUserInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => UserAdressCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserAdressUncheckedCreateWithoutUserInputObjectSchema),
			]),
		})
		.strict()

export const UserAdressUpsertWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
