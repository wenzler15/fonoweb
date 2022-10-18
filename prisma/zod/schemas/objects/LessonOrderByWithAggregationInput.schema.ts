import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { LessonCountOrderByAggregateInputObjectSchema } from './LessonCountOrderByAggregateInput.schema'
import { LessonAvgOrderByAggregateInputObjectSchema } from './LessonAvgOrderByAggregateInput.schema'
import { LessonMaxOrderByAggregateInputObjectSchema } from './LessonMaxOrderByAggregateInput.schema'
import { LessonMinOrderByAggregateInputObjectSchema } from './LessonMinOrderByAggregateInput.schema'
import { LessonSumOrderByAggregateInputObjectSchema } from './LessonSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		creatorId: z.lazy(() => SortOrderSchema).optional(),
		courseId: z.lazy(() => SortOrderSchema).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => LessonCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z.lazy(() => LessonAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => LessonMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => LessonMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => LessonSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const LessonOrderByWithAggregationInputObjectSchema = Schema
