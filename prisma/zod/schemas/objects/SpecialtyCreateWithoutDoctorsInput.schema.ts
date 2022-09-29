import { z } from 'zod'
import { TemplateCreateNestedManyWithoutSpecialtyInputObjectSchema } from './TemplateCreateNestedManyWithoutSpecialtyInput.schema'
import { EvaluationCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvaluationCreateNestedManyWithoutSpecialtyInput.schema'
import { AnamnesisCreateNestedManyWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateNestedManyWithoutSpecialtyInput.schema'
import { EvolutionCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvolutionCreateNestedManyWithoutSpecialtyInput.schema'
import { ExerciseCreateNestedManyWithoutSpecialtyInputObjectSchema } from './ExerciseCreateNestedManyWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateWithoutDoctorsInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		name: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		templates: z
			.lazy(() => TemplateCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		anamnesis: z
			.lazy(() => AnamnesisCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		Evolution: z
			.lazy(() => EvolutionCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		Exercise: z
			.lazy(() => ExerciseCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
	})
	.strict()

export const SpecialtyCreateWithoutDoctorsInputObjectSchema = Schema
