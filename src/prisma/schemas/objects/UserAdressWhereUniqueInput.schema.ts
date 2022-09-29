import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressWhereUniqueInput> = z
	.object({
		id: z.string().optional(),
	})
	.strict()

export const UserAdressWhereUniqueInputObjectSchema = Schema
