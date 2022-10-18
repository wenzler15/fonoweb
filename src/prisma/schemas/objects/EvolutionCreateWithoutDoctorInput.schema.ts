import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { PatientCreateNestedOneWithoutEvolutionsInputObjectSchema } from './PatientCreateNestedOneWithoutEvolutionsInput.schema'
import { SpecialtyCreateNestedOneWithoutEvolutionInputObjectSchema } from './SpecialtyCreateNestedOneWithoutEvolutionInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.EvolutionCreateWithoutDoctorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
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
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutEvolutionsInputObjectSchema,
		),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutEvolutionInputObjectSchema,
		),
	})
	.strict()

export const EvolutionCreateWithoutDoctorInputObjectSchema = Schema
