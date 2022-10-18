import { z } from 'zod'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { UserCreateNestedOneWithoutExercisesInputObjectSchema } from './UserCreateNestedOneWithoutExercisesInput.schema'
import { SpecialtyCreateNestedOneWithoutExerciseInputObjectSchema } from './SpecialtyCreateNestedOneWithoutExerciseInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([
		literalSchema,
		z.array(jsonSchema.nullable()),
		z.record(jsonSchema.nullable()),
	]),
)

const Schema: z.ZodType<Prisma.ExerciseCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		title: z.string(),
		description: z.string(),
		links: z
			.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
			.optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		creator: z.lazy(() => UserCreateNestedOneWithoutExercisesInputObjectSchema),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutExerciseInputObjectSchema,
		),
	})
	.strict()

export const ExerciseCreateInputObjectSchema = Schema
