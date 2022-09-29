import { z } from 'zod'
import { DoctorCreateNestedManyWithoutSpecialtyInputObjectSchema } from './DoctorCreateNestedManyWithoutSpecialtyInput.schema'
import { TemplateCreateNestedManyWithoutSpecialtyInputObjectSchema } from './TemplateCreateNestedManyWithoutSpecialtyInput.schema'
import { AnamnesisCreateNestedManyWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateNestedManyWithoutSpecialtyInput.schema'
import { EvolutionCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvolutionCreateNestedManyWithoutSpecialtyInput.schema'
import { ExerciseCreateNestedManyWithoutSpecialtyInputObjectSchema } from './ExerciseCreateNestedManyWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateWithoutEvaluationsInput> = z
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

export const SpecialtyCreateWithoutEvaluationsInputObjectSchema = Schema
