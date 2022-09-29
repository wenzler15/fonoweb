import { z } from 'zod'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumTemplateTypeFilter> = z
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
				z.lazy(() => NestedEnumTemplateTypeFilterObjectSchema),
			])
			.optional(),
	})
	.strict()

export const NestedEnumTemplateTypeFilterObjectSchema = Schema
