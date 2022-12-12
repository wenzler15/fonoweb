import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => LessonVideoScalarWhereInputObjectSchema),
				z.lazy(() => LessonVideoScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LessonVideoScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LessonVideoScalarWhereInputObjectSchema),
				z.lazy(() => LessonVideoScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		lessonId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
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
	})
	.strict()

export const LessonVideoScalarWhereInputObjectSchema = Schema
