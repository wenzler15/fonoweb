import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserContactWhereInputObjectSchema),
				z.lazy(() => UserContactWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => UserContactWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserContactWhereInputObjectSchema),
				z.lazy(() => UserContactWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		userId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		email: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		area: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		phone: z
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
	})
	.strict()

export const UserContactWhereInputObjectSchema = Schema
