import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserContactAvgOrderByAggregateInput> = z
	.object({
		numericId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const UserContactAvgOrderByAggregateInputObjectSchema = Schema
