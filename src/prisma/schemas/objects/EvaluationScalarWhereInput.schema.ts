import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => EvaluationScalarWhereInputObjectSchema),
				z.lazy(() => EvaluationScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => EvaluationScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EvaluationScalarWhereInputObjectSchema),
				z.lazy(() => EvaluationScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		patientId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		doctorId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		text: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		title: z
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

export const EvaluationScalarWhereInputObjectSchema = Schema
