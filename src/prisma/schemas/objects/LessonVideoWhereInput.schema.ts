import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { LessonRelationFilterObjectSchema } from './LessonRelationFilter.schema'
import { LessonWhereInputObjectSchema } from './LessonWhereInput.schema'
import { WatchedVideoListRelationFilterObjectSchema } from './WatchedVideoListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => LessonVideoWhereInputObjectSchema),
				z.lazy(() => LessonVideoWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LessonVideoWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LessonVideoWhereInputObjectSchema),
				z.lazy(() => LessonVideoWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		lessonId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		order: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		title: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		video: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		isActive: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
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
		lesson: z
			.union([
				z.lazy(() => LessonRelationFilterObjectSchema),
				z.lazy(() => LessonWhereInputObjectSchema),
			])
			.optional(),
		watched: z
			.lazy(() => WatchedVideoListRelationFilterObjectSchema)
			.optional(),
	})
	.strict()

export const LessonVideoWhereInputObjectSchema = Schema
