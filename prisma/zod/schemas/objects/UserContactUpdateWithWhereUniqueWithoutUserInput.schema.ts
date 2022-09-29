import { z } from 'zod'
import { UserContactWhereUniqueInputObjectSchema } from './UserContactWhereUniqueInput.schema'
import { UserContactUpdateWithoutUserInputObjectSchema } from './UserContactUpdateWithoutUserInput.schema'
import { UserContactUncheckedUpdateWithoutUserInputObjectSchema } from './UserContactUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserContactUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserContactWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => UserContactUpdateWithoutUserInputObjectSchema),
				z.lazy(() => UserContactUncheckedUpdateWithoutUserInputObjectSchema),
			]),
		})
		.strict()

export const UserContactUpdateWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
