import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { CourseRelationFilterObjectSchema } from './CourseRelationFilter.schema'
import { CourseWhereInputObjectSchema } from './CourseWhereInput.schema'
import { LessonVideoListRelationFilterObjectSchema } from './LessonVideoListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => LessonWhereInputObjectSchema),
				z.lazy(() => LessonWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LessonWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LessonWhereInputObjectSchema),
				z.lazy(() => LessonWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		creatorId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		courseId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		order: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		title: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		description: z
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
		creator: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema),
			])
			.optional(),
		course: z
			.union([
				z.lazy(() => CourseRelationFilterObjectSchema),
				z.lazy(() => CourseWhereInputObjectSchema),
			])
			.optional(),
		videos: z.lazy(() => LessonVideoListRelationFilterObjectSchema).optional(),
	})
	.strict()

export const LessonWhereInputObjectSchema = Schema
