import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'
import { NestedEnumUserTypeFilterObjectSchema } from './NestedEnumUserTypeFilter.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EnumUserTypeFilter> = z
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

export const EnumUserTypeFilterObjectSchema = Schema
