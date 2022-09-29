import { z } from 'zod'
import { UserContactWhereInputObjectSchema } from './UserContactWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserContactListRelationFilter> = z
	.object({
		every: z.lazy(() => UserContactWhereInputObjectSchema).optional(),
		some: z.lazy(() => UserContactWhereInputObjectSchema).optional(),
		none: z.lazy(() => UserContactWhereInputObjectSchema).optional(),
	})
	.strict()

export const UserContactListRelationFilterObjectSchema = Schema
