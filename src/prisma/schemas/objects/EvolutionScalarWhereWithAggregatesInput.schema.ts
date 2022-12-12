import { z } from 'zod'
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => EvolutionScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => EvolutionScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => EvolutionScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => EvolutionScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => EvolutionScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
			.optional(),
		patientId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		doctorId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		exercises: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
		text: z
			.union([
				z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
				z.string(),
			])
			.optional()
			.nullable(),
		title: z
			.union([
				z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
				z.string(),
			])
			.optional()
			.nullable(),
		appointmentDate: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		comments: z
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

export const EvolutionScalarWhereWithAggregatesInputObjectSchema = Schema
