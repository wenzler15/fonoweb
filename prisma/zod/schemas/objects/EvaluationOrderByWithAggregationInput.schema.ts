import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { EvaluationCountOrderByAggregateInputObjectSchema } from './EvaluationCountOrderByAggregateInput.schema'
import { EvaluationAvgOrderByAggregateInputObjectSchema } from './EvaluationAvgOrderByAggregateInput.schema'
import { EvaluationMaxOrderByAggregateInputObjectSchema } from './EvaluationMaxOrderByAggregateInput.schema'
import { EvaluationMinOrderByAggregateInputObjectSchema } from './EvaluationMinOrderByAggregateInput.schema'
import { EvaluationSumOrderByAggregateInputObjectSchema } from './EvaluationSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => EvaluationCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => EvaluationAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => EvaluationMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => EvaluationMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => EvaluationSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const EvaluationOrderByWithAggregationInputObjectSchema = Schema
