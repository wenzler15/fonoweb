import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { TemplateCountOrderByAggregateInputObjectSchema } from './TemplateCountOrderByAggregateInput.schema'
import { TemplateAvgOrderByAggregateInputObjectSchema } from './TemplateAvgOrderByAggregateInput.schema'
import { TemplateMaxOrderByAggregateInputObjectSchema } from './TemplateMaxOrderByAggregateInput.schema'
import { TemplateMinOrderByAggregateInputObjectSchema } from './TemplateMinOrderByAggregateInput.schema'
import { TemplateSumOrderByAggregateInputObjectSchema } from './TemplateSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		html: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => TemplateCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z.lazy(() => TemplateAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => TemplateMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => TemplateMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => TemplateSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const TemplateOrderByWithAggregationInputObjectSchema = Schema
