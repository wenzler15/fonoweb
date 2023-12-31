import { z } from 'zod'
import { UserContactWhereUniqueInputObjectSchema } from './UserContactWhereUniqueInput.schema'
import { UserContactUpdateWithoutUserInputObjectSchema } from './UserContactUpdateWithoutUserInput.schema'
import { UserContactUncheckedUpdateWithoutUserInputObjectSchema } from './UserContactUncheckedUpdateWithoutUserInput.schema'
import { UserContactCreateWithoutUserInputObjectSchema } from './UserContactCreateWithoutUserInput.schema'
import { UserContactUncheckedCreateWithoutUserInputObjectSchema } from './UserContactUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserContactWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => UserContactUpdateWithoutUserInputObjectSchema),
				z.lazy(() => UserContactUncheckedUpdateWithoutUserInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => UserContactCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserContactUncheckedCreateWithoutUserInputObjectSchema),
			]),
		})
		.strict()

export const UserContactUpsertWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
