import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoSumOrderByAggregateInputType> = z
	.object({
		numericId: z.lazy(() => SortOrderSchema).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const LessonVideoSumOrderByAggregateInputObjectSchema = Schema
