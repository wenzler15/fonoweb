import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SpecialtyCountOrderByAggregateInputObjectSchema } from './SpecialtyCountOrderByAggregateInput.schema'
import { SpecialtyAvgOrderByAggregateInputObjectSchema } from './SpecialtyAvgOrderByAggregateInput.schema'
import { SpecialtyMaxOrderByAggregateInputObjectSchema } from './SpecialtyMaxOrderByAggregateInput.schema'
import { SpecialtyMinOrderByAggregateInputObjectSchema } from './SpecialtyMinOrderByAggregateInput.schema'
import { SpecialtySumOrderByAggregateInputObjectSchema } from './SpecialtySumOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => SpecialtyCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => SpecialtyAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => SpecialtyMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => SpecialtyMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => SpecialtySumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const SpecialtyOrderByWithAggregationInputObjectSchema = Schema
