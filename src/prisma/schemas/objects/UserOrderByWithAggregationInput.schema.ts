import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema'
import { UserAvgOrderByAggregateInputObjectSchema } from './UserAvgOrderByAggregateInput.schema'
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema'
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema'
import { UserSumOrderByAggregateInputObjectSchema } from './UserSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		socialName: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		gender: z.lazy(() => SortOrderSchema).optional(),
		customGender: z.lazy(() => SortOrderSchema).optional(),
		cpf: z.lazy(() => SortOrderSchema).optional(),
		birthDate: z.lazy(() => SortOrderSchema).optional(),
		password: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		avatar: z.lazy(() => SortOrderSchema).optional(),
		facebookToken: z.lazy(() => SortOrderSchema).optional(),
		passwordResetToken: z.lazy(() => SortOrderSchema).optional(),
		passwordResetExpires: z.lazy(() => SortOrderSchema).optional(),
		isAdmin: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict()

export const UserOrderByWithAggregationInputObjectSchema = Schema
