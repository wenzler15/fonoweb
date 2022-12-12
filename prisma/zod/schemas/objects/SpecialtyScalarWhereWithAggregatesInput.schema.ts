import { z } from 'zod'
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SpecialtyScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => SpecialtyScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => SpecialtyScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SpecialtyScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => SpecialtyScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		name: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		isActive: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
	})
	.strict()

export const SpecialtyScalarWhereWithAggregatesInputObjectSchema = Schema
