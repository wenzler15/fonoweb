import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumUserTypeFilterObjectSchema } from './NestedEnumUserTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumUserTypeWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => UserTypeSchema).optional(),
		in: z
			.lazy(() => UserTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => UserTypeSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => UserTypeSchema),
				z.lazy(() => NestedEnumUserTypeWithAggregatesFilterObjectSchema),
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumUserTypeFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumUserTypeFilterObjectSchema).optional(),
	})
	.strict()

export const NestedEnumUserTypeWithAggregatesFilterObjectSchema = Schema
