import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseMinOrderByAggregateInputType> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		creatorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const ExerciseMinOrderByAggregateInputObjectSchema = Schema
