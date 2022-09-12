import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { JsonFilterObjectSchema } from './JsonFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AnamnesisScalarWhereInputObjectSchema),
				z.lazy(() => AnamnesisScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => AnamnesisScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AnamnesisScalarWhereInputObjectSchema),
				z.lazy(() => AnamnesisScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		patientId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		doctorId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		questions: z.lazy(() => JsonFilterObjectSchema).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		text: z
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

export const AnamnesisScalarWhereInputObjectSchema = Schema
