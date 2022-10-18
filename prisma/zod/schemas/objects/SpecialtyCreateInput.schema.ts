import { z } from 'zod'
import { DoctorCreateNestedManyWithoutSpecialtyInputObjectSchema } from './DoctorCreateNestedManyWithoutSpecialtyInput.schema'
import { TemplateCreateNestedManyWithoutSpecialtyInputObjectSchema } from './TemplateCreateNestedManyWithoutSpecialtyInput.schema'
import { EvaluationCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvaluationCreateNestedManyWithoutSpecialtyInput.schema'
import { AnamnesisCreateNestedManyWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateNestedManyWithoutSpecialtyInput.schema'
import { EvolutionCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvolutionCreateNestedManyWithoutSpecialtyInput.schema'
import { ExerciseCreateNestedManyWithoutSpecialtyInputObjectSchema } from './ExerciseCreateNestedManyWithoutSpecialtyInput.schema'
import { CourseCreateNestedManyWithoutSpecialtyInputObjectSchema } from './CourseCreateNestedManyWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		name: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		doctors: z
			.lazy(() => DoctorCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		templates: z
			.lazy(() => TemplateCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		anamnesis: z
			.lazy(() => AnamnesisCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		evolution: z
			.lazy(() => EvolutionCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		exercise: z
			.lazy(() => ExerciseCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
		course: z
			.lazy(() => CourseCreateNestedManyWithoutSpecialtyInputObjectSchema)
			.optional(),
	})
	.strict()

export const SpecialtyCreateInputObjectSchema = Schema
