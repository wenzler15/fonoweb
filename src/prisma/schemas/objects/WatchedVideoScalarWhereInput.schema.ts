import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => WatchedVideoScalarWhereInputObjectSchema),
				z.lazy(() => WatchedVideoScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => WatchedVideoScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => WatchedVideoScalarWhereInputObjectSchema),
				z.lazy(() => WatchedVideoScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		userId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		videoId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		deletedAt: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
	})
	.strict()

export const WatchedVideoScalarWhereInputObjectSchema = Schema
