import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { TemplateUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './TemplateUpdateManyWithoutSpecialtyNestedInput.schema'
import { EvaluationUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './EvaluationUpdateManyWithoutSpecialtyNestedInput.schema'
import { AnamnesisUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './AnamnesisUpdateManyWithoutSpecialtyNestedInput.schema'
import { EvolutionUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './EvolutionUpdateManyWithoutSpecialtyNestedInput.schema'
import { ExerciseUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './ExerciseUpdateManyWithoutSpecialtyNestedInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateWithoutDoctorsInput> = z
	.object({
		id: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		numericId: z
			.union([
				z.number(),
				z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		name: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		isActive: z
			.union([
				z.boolean(),
				z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		createdAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		updatedAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		templates: z
			.lazy(() => TemplateUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
		anamnesis: z
			.lazy(() => AnamnesisUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
		Evolution: z
			.lazy(() => EvolutionUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
		Exercise: z
			.lazy(() => ExerciseUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
	})
	.strict()

export const SpecialtyUpdateWithoutDoctorsInputObjectSchema = Schema
