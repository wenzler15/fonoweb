import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AnamnesisCountOrderByAggregateInputObjectSchema } from './AnamnesisCountOrderByAggregateInput.schema'
import { AnamnesisAvgOrderByAggregateInputObjectSchema } from './AnamnesisAvgOrderByAggregateInput.schema'
import { AnamnesisMaxOrderByAggregateInputObjectSchema } from './AnamnesisMaxOrderByAggregateInput.schema'
import { AnamnesisMinOrderByAggregateInputObjectSchema } from './AnamnesisMinOrderByAggregateInput.schema'
import { AnamnesisSumOrderByAggregateInputObjectSchema } from './AnamnesisSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		questions: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => AnamnesisCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => AnamnesisAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => AnamnesisMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => AnamnesisMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => AnamnesisSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const AnamnesisOrderByWithAggregationInputObjectSchema = Schema
