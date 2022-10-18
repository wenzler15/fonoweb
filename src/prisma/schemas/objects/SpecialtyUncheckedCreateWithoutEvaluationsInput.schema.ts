import { z } from 'zod'
import { DoctorUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { EvolutionUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { ExerciseUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { CourseUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './CourseUncheckedCreateNestedManyWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUncheckedCreateWithoutEvaluationsInput> =
	z
		.object({
			id: z.string().optional(),
			numericId: z.number().optional(),
			name: z.string(),
			isActive: z.boolean().optional(),
			createdAt: z.date().optional(),
			updatedAt: z.date().optional(),
			doctors: z
				.lazy(
					() =>
						DoctorUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
			templates: z
				.lazy(
					() =>
						TemplateUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
			anamnesis: z
				.lazy(
					() =>
						AnamnesisUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
			evolution: z
				.lazy(
					() =>
						EvolutionUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
			exercise: z
				.lazy(
					() =>
						ExerciseUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
			course: z
				.lazy(
					() =>
						CourseUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
		})
		.strict()

export const SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema =
	Schema
