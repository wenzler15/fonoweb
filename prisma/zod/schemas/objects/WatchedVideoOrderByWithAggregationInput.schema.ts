import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { WatchedVideoCountOrderByAggregateInputObjectSchema } from './WatchedVideoCountOrderByAggregateInput.schema'
import { WatchedVideoAvgOrderByAggregateInputObjectSchema } from './WatchedVideoAvgOrderByAggregateInput.schema'
import { WatchedVideoMaxOrderByAggregateInputObjectSchema } from './WatchedVideoMaxOrderByAggregateInput.schema'
import { WatchedVideoMinOrderByAggregateInputObjectSchema } from './WatchedVideoMinOrderByAggregateInput.schema'
import { WatchedVideoSumOrderByAggregateInputObjectSchema } from './WatchedVideoSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		videoId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => WatchedVideoCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => WatchedVideoAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => WatchedVideoMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => WatchedVideoMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => WatchedVideoSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const WatchedVideoOrderByWithAggregationInputObjectSchema = Schema
