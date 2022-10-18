import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.ExerciseUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		title: z.string(),
		description: z.string(),
		links: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		creatorId: z.string(),
		specialtyId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
	.strict()

export const ExerciseUncheckedCreateInputObjectSchema = Schema
