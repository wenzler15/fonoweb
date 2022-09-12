import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumUserTypeFilter> = z
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
				z.lazy(() => NestedEnumUserTypeFilterObjectSchema),
			])
			.optional(),
	})
	.strict()

export const NestedEnumUserTypeFilterObjectSchema = Schema
