import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { LessonVideoRelationFilterObjectSchema } from './LessonVideoRelationFilter.schema'
import { LessonVideoWhereInputObjectSchema } from './LessonVideoWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => WatchedVideoWhereInputObjectSchema),
				z.lazy(() => WatchedVideoWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => WatchedVideoWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => WatchedVideoWhereInputObjectSchema),
				z.lazy(() => WatchedVideoWhereInputObjectSchema).array(),
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
		user: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema),
			])
			.optional(),
		video: z
			.union([
				z.lazy(() => LessonVideoRelationFilterObjectSchema),
				z.lazy(() => LessonVideoWhereInputObjectSchema),
			])
			.optional(),
	})
	.strict()

export const WatchedVideoWhereInputObjectSchema = Schema
