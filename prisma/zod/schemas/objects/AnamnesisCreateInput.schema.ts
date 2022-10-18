import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { PatientCreateNestedOneWithoutAnamnesisInputObjectSchema } from './PatientCreateNestedOneWithoutAnamnesisInput.schema'
import { DoctorCreateNestedOneWithoutAnamnesisInputObjectSchema } from './DoctorCreateNestedOneWithoutAnamnesisInput.schema'
import { SpecialtyCreateNestedOneWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateNestedOneWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.AnamnesisCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		questions: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		title: z.string().optional().nullable(),
		text: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutAnamnesisInputObjectSchema,
		),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutAnamnesisInputObjectSchema,
		),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutAnamnesisInputObjectSchema,
		),
	})
	.strict()

export const AnamnesisCreateInputObjectSchema = Schema
