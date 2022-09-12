import { z } from 'zod'
import { DoctorUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { TemplateUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './TemplateUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { EvaluationUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedCreateNestedManyWithoutSpecialtyInput.schema'
import { EvolutionUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedCreateNestedManyWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUncheckedCreateWithoutAnamnesisInput> =
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
			evaluations: z
				.lazy(
					() =>
						EvaluationUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
			Evolution: z
				.lazy(
					() =>
						EvolutionUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema,
				)
				.optional(),
		})
		.strict()

export const SpecialtyUncheckedCreateWithoutAnamnesisInputObjectSchema = Schema
