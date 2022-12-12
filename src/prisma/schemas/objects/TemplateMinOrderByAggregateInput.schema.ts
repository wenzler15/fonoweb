import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateMinOrderByAggregateInputType> = z
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
	})
	.strict()

export const TemplateMinOrderByAggregateInputObjectSchema = Schema
