import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { EvolutionCountOrderByAggregateInputObjectSchema } from './EvolutionCountOrderByAggregateInput.schema'
import { EvolutionAvgOrderByAggregateInputObjectSchema } from './EvolutionAvgOrderByAggregateInput.schema'
import { EvolutionMaxOrderByAggregateInputObjectSchema } from './EvolutionMaxOrderByAggregateInput.schema'
import { EvolutionMinOrderByAggregateInputObjectSchema } from './EvolutionMinOrderByAggregateInput.schema'
import { EvolutionSumOrderByAggregateInputObjectSchema } from './EvolutionSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		exercises: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		appointmentDate: z.lazy(() => SortOrderSchema).optional(),
		comments: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => EvolutionCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => EvolutionAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => EvolutionMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => EvolutionMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => EvolutionSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const EvolutionOrderByWithAggregationInputObjectSchema = Schema
