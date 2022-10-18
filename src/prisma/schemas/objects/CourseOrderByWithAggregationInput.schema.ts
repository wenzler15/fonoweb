import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { CourseCountOrderByAggregateInputObjectSchema } from './CourseCountOrderByAggregateInput.schema'
import { CourseAvgOrderByAggregateInputObjectSchema } from './CourseAvgOrderByAggregateInput.schema'
import { CourseMaxOrderByAggregateInputObjectSchema } from './CourseMaxOrderByAggregateInput.schema'
import { CourseMinOrderByAggregateInputObjectSchema } from './CourseMinOrderByAggregateInput.schema'
import { CourseSumOrderByAggregateInputObjectSchema } from './CourseSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		creatorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		cover: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => CourseCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z.lazy(() => CourseAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => CourseMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => CourseMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => CourseSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const CourseOrderByWithAggregationInputObjectSchema = Schema
