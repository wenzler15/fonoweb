import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PatientCountOrderByAggregateInputObjectSchema } from './PatientCountOrderByAggregateInput.schema'
import { PatientAvgOrderByAggregateInputObjectSchema } from './PatientAvgOrderByAggregateInput.schema'
import { PatientMaxOrderByAggregateInputObjectSchema } from './PatientMaxOrderByAggregateInput.schema'
import { PatientMinOrderByAggregateInputObjectSchema } from './PatientMinOrderByAggregateInput.schema'
import { PatientSumOrderByAggregateInputObjectSchema } from './PatientSumOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => PatientCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z.lazy(() => PatientAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => PatientMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => PatientMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => PatientSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const PatientOrderByWithAggregationInputObjectSchema = Schema
