import { z } from 'zod'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumTemplateTypeFilterObjectSchema } from './NestedEnumTemplateTypeFilter.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumTemplateTypeWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => TemplateTypeSchema).optional(),
		in: z
			.lazy(() => TemplateTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => TemplateTypeSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => TemplateTypeSchema),
				z.lazy(() => NestedEnumTemplateTypeWithAggregatesFilterObjectSchema),
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumTemplateTypeFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumTemplateTypeFilterObjectSchema).optional(),
	})
	.strict()

export const NestedEnumTemplateTypeWithAggregatesFilterObjectSchema = Schema
