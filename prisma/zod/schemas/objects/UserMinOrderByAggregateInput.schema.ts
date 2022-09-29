import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z
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
	})
	.strict()

export const UserMinOrderByAggregateInputObjectSchema = Schema
