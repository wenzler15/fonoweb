import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { SpecialtyRelationFilterObjectSchema } from './SpecialtyRelationFilter.schema'
import { SpecialtyWhereInputObjectSchema } from './SpecialtyWhereInput.schema'
import { LessonListRelationFilterObjectSchema } from './LessonListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => CourseWhereInputObjectSchema),
				z.lazy(() => CourseWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => CourseWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CourseWhereInputObjectSchema),
				z.lazy(() => CourseWhereInputObjectSchema).array(),
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
		specialtyId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		order: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		title: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		cover: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
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
		specialty: z
			.union([
				z.lazy(() => SpecialtyRelationFilterObjectSchema),
				z.lazy(() => SpecialtyWhereInputObjectSchema),
			])
			.optional(),
		lessons: z.lazy(() => LessonListRelationFilterObjectSchema).optional(),
	})
	.strict()

export const CourseWhereInputObjectSchema = Schema
