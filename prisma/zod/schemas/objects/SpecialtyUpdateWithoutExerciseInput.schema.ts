import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { DoctorUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './DoctorUpdateManyWithoutSpecialtyNestedInput.schema'
import { TemplateUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './TemplateUpdateManyWithoutSpecialtyNestedInput.schema'
import { EvaluationUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './EvaluationUpdateManyWithoutSpecialtyNestedInput.schema'
import { AnamnesisUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './AnamnesisUpdateManyWithoutSpecialtyNestedInput.schema'
import { EvolutionUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './EvolutionUpdateManyWithoutSpecialtyNestedInput.schema'
import { CourseUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './CourseUpdateManyWithoutSpecialtyNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateWithoutExerciseInput> = z
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
		doctors: z
			.lazy(() => DoctorUpdateManyWithoutSpecialtyNestedInputObjectSchema)
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
		evolution: z
			.lazy(() => EvolutionUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
		course: z
			.lazy(() => CourseUpdateManyWithoutSpecialtyNestedInputObjectSchema)
			.optional(),
	})
	.strict()

export const SpecialtyUpdateWithoutExerciseInputObjectSchema = Schema
