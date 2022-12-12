import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressSumOrderByAggregateInputType> = z
	.object({
		numericId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const UserAdressSumOrderByAggregateInputObjectSchema = Schema
