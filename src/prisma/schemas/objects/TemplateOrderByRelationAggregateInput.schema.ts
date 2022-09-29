import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateOrderByRelationAggregateInput> = z
	.object({
		_count: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const TemplateOrderByRelationAggregateInputObjectSchema = Schema
