import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressMinOrderByAggregateInputType> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		streetName: z.lazy(() => SortOrderSchema).optional(),
		zipCode: z.lazy(() => SortOrderSchema).optional(),
		district: z.lazy(() => SortOrderSchema).optional(),
		state: z.lazy(() => SortOrderSchema).optional(),
		city: z.lazy(() => SortOrderSchema).optional(),
		number: z.lazy(() => SortOrderSchema).optional(),
		complement: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const UserAdressMinOrderByAggregateInputObjectSchema = Schema
