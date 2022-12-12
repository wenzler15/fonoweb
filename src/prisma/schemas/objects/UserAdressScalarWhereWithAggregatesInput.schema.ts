import { z } from 'zod'
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserAdressScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => UserAdressScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => UserAdressScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserAdressScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => UserAdressScalarWhereWithAggregatesInputObjectSchema)
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
		streetName: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		zipCode: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		district: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		state: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		city: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		number: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		complement: z
			.union([
				z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
				z.string(),
			])
			.optional()
			.nullable(),
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

export const UserAdressScalarWhereWithAggregatesInputObjectSchema = Schema
