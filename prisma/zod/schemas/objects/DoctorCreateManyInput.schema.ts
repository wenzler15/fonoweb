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

const Schema: z.ZodType<Prisma.DoctorCreateManyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		userId: z.string(),
		specialtyId: z.string(),
		crfa: z.string().optional().nullable(),
		availability: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const DoctorCreateManyInputObjectSchema = Schema
