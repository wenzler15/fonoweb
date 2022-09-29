import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.AnamnesisUncheckedCreateWithoutPatientInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		doctorId: z.string(),
		specialtyId: z.string(),
		questions: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		title: z.string().optional().nullable(),
		text: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const AnamnesisUncheckedCreateWithoutPatientInputObjectSchema = Schema
