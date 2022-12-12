import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => CourseScalarWhereInputObjectSchema),
				z.lazy(() => CourseScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => CourseScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => CourseScalarWhereInputObjectSchema),
				z.lazy(() => CourseScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		creatorId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
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
	})
	.strict()

export const CourseScalarWhereInputObjectSchema = Schema
