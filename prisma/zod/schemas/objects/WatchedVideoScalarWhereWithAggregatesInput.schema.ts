import { z } from 'zod'
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => WatchedVideoScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => WatchedVideoScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => WatchedVideoScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => WatchedVideoScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => WatchedVideoScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		userId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		videoId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		deletedAt: z
			.union([
				z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
				z.date(),
			])
			.optional()
			.nullable(),
	})
	.strict()

export const WatchedVideoScalarWhereWithAggregatesInputObjectSchema = Schema
