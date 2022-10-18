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

const Schema: z.ZodType<Prisma.EvolutionUncheckedCreateWithoutDoctorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		patientId: z.string(),
		specialtyId: z.string(),
		exercises: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		text: z.string().optional().nullable(),
		title: z.string().optional().nullable(),
		appointmentDate: z.date().optional(),
		comments: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const EvolutionUncheckedCreateWithoutDoctorInputObjectSchema = Schema
