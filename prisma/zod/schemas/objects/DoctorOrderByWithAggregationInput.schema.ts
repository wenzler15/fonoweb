import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DoctorCountOrderByAggregateInputObjectSchema } from './DoctorCountOrderByAggregateInput.schema'
import { DoctorAvgOrderByAggregateInputObjectSchema } from './DoctorAvgOrderByAggregateInput.schema'
import { DoctorMaxOrderByAggregateInputObjectSchema } from './DoctorMaxOrderByAggregateInput.schema'
import { DoctorMinOrderByAggregateInputObjectSchema } from './DoctorMinOrderByAggregateInput.schema'
import { DoctorSumOrderByAggregateInputObjectSchema } from './DoctorSumOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		crfa: z.lazy(() => SortOrderSchema).optional(),
		availability: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => DoctorCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z.lazy(() => DoctorAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => DoctorMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => DoctorMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => DoctorSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const DoctorOrderByWithAggregationInputObjectSchema = Schema
