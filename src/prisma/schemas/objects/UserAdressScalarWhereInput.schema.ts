import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserAdressScalarWhereInputObjectSchema),
				z.lazy(() => UserAdressScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => UserAdressScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserAdressScalarWhereInputObjectSchema),
				z.lazy(() => UserAdressScalarWhereInputObjectSchema).array(),
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
	})
	.strict()

export const UserAdressScalarWhereInputObjectSchema = Schema
