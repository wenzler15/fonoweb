import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserAdressCountOrderByAggregateInputObjectSchema } from './UserAdressCountOrderByAggregateInput.schema'
import { UserAdressAvgOrderByAggregateInputObjectSchema } from './UserAdressAvgOrderByAggregateInput.schema'
import { UserAdressMaxOrderByAggregateInputObjectSchema } from './UserAdressMaxOrderByAggregateInput.schema'
import { UserAdressMinOrderByAggregateInputObjectSchema } from './UserAdressMinOrderByAggregateInput.schema'
import { UserAdressSumOrderByAggregateInputObjectSchema } from './UserAdressSumOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		streetName: z.lazy(() => SortOrderSchema).optional(),
		zipCode: z.lazy(() => SortOrderSchema).optional(),
		district: z.lazy(() => SortOrderSchema).optional(),
		state: z.lazy(() => SortOrderSchema).optional(),
		city: z.lazy(() => SortOrderSchema).optional(),
		number: z.lazy(() => SortOrderSchema).optional(),
		complement: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => UserAdressCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => UserAdressAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => UserAdressMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => UserAdressMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => UserAdressSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const UserAdressOrderByWithAggregationInputObjectSchema = Schema
