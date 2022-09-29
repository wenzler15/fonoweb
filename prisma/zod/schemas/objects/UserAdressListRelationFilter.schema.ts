import { z } from 'zod'
import { UserAdressWhereInputObjectSchema } from './UserAdressWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressListRelationFilter> = z
	.object({
		every: z.lazy(() => UserAdressWhereInputObjectSchema).optional(),
		some: z.lazy(() => UserAdressWhereInputObjectSchema).optional(),
		none: z.lazy(() => UserAdressWhereInputObjectSchema).optional(),
	})
	.strict()

export const UserAdressListRelationFilterObjectSchema = Schema
