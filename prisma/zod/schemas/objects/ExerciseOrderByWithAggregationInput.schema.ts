import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ExerciseCountOrderByAggregateInputObjectSchema } from './ExerciseCountOrderByAggregateInput.schema'
import { ExerciseAvgOrderByAggregateInputObjectSchema } from './ExerciseAvgOrderByAggregateInput.schema'
import { ExerciseMaxOrderByAggregateInputObjectSchema } from './ExerciseMaxOrderByAggregateInput.schema'
import { ExerciseMinOrderByAggregateInputObjectSchema } from './ExerciseMinOrderByAggregateInput.schema'
import { ExerciseSumOrderByAggregateInputObjectSchema } from './ExerciseSumOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		links: z.lazy(() => SortOrderSchema).optional(),
		creatorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => ExerciseCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z.lazy(() => ExerciseAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => ExerciseMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => ExerciseMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => ExerciseSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const ExerciseOrderByWithAggregationInputObjectSchema = Schema
