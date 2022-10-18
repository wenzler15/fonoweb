import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { JsonFilterObjectSchema } from './JsonFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ExerciseScalarWhereInputObjectSchema),
				z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ExerciseScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ExerciseScalarWhereInputObjectSchema),
				z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		title: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		description: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		links: z.lazy(() => JsonFilterObjectSchema).optional(),
		creatorId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
	})
	.strict()

export const ExerciseScalarWhereInputObjectSchema = Schema
