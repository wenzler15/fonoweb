import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserContactCountOrderByAggregateInputObjectSchema } from './UserContactCountOrderByAggregateInput.schema'
import { UserContactAvgOrderByAggregateInputObjectSchema } from './UserContactAvgOrderByAggregateInput.schema'
import { UserContactMaxOrderByAggregateInputObjectSchema } from './UserContactMaxOrderByAggregateInput.schema'
import { UserContactMinOrderByAggregateInputObjectSchema } from './UserContactMinOrderByAggregateInput.schema'
import { UserContactSumOrderByAggregateInputObjectSchema } from './UserContactSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		area: z.lazy(() => SortOrderSchema).optional(),
		phone: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => UserContactCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => UserContactAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => UserContactMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => UserContactMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => UserContactSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const UserContactOrderByWithAggregationInputObjectSchema = Schema
