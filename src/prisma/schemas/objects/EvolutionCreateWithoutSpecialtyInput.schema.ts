import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { PatientCreateNestedOneWithoutEvolutionsInputObjectSchema } from './PatientCreateNestedOneWithoutEvolutionsInput.schema'
import { DoctorCreateNestedOneWithoutEvolutionsInputObjectSchema } from './DoctorCreateNestedOneWithoutEvolutionsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.EvolutionCreateWithoutSpecialtyInput> = z
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
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutEvolutionsInputObjectSchema,
		),
	})
	.strict()

export const EvolutionCreateWithoutSpecialtyInputObjectSchema = Schema
