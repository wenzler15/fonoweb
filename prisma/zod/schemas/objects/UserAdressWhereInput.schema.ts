import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserAdressWhereInputObjectSchema),
				z.lazy(() => UserAdressWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => UserAdressWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserAdressWhereInputObjectSchema),
				z.lazy(() => UserAdressWhereInputObjectSchema).array(),
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
		streetName: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		zipCode: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		district: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		state: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		city: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		number: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		complement: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
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

export const UserAdressWhereInputObjectSchema = Schema
