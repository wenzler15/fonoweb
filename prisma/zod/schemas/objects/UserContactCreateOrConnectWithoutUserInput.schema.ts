import { z } from 'zod'
import { UserContactWhereUniqueInputObjectSchema } from './UserContactWhereUniqueInput.schema'
import { UserContactCreateWithoutUserInputObjectSchema } from './UserContactCreateWithoutUserInput.schema'
import { UserContactUncheckedCreateWithoutUserInputObjectSchema } from './UserContactUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserContactWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserContactCreateWithoutUserInputObjectSchema),
			z.lazy(() => UserContactUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict()

export const UserContactCreateOrConnectWithoutUserInputObjectSchema = Schema
