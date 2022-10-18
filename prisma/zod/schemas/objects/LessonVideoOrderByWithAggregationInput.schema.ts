import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { LessonVideoCountOrderByAggregateInputObjectSchema } from './LessonVideoCountOrderByAggregateInput.schema'
import { LessonVideoAvgOrderByAggregateInputObjectSchema } from './LessonVideoAvgOrderByAggregateInput.schema'
import { LessonVideoMaxOrderByAggregateInputObjectSchema } from './LessonVideoMaxOrderByAggregateInput.schema'
import { LessonVideoMinOrderByAggregateInputObjectSchema } from './LessonVideoMinOrderByAggregateInput.schema'
import { LessonVideoSumOrderByAggregateInputObjectSchema } from './LessonVideoSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		lessonId: z.lazy(() => SortOrderSchema).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		video: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => LessonVideoCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => LessonVideoAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => LessonVideoMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => LessonVideoMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => LessonVideoSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const LessonVideoOrderByWithAggregationInputObjectSchema = Schema
