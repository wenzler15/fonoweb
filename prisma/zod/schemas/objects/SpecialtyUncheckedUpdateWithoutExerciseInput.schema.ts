import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { DoctorUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './DoctorUncheckedUpdateManyWithoutSpecialtyNestedInput.schema'
import { TemplateUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './TemplateUncheckedUpdateManyWithoutSpecialtyNestedInput.schema'
import { EvaluationUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './EvaluationUncheckedUpdateManyWithoutSpecialtyNestedInput.schema'
import { AnamnesisUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './AnamnesisUncheckedUpdateManyWithoutSpecialtyNestedInput.schema'
import { EvolutionUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema } from './EvolutionUncheckedUpdateManyWithoutSpecialtyNestedInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUncheckedUpdateWithoutExerciseInput> = z
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
			.lazy(
				() => DoctorUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema,
			)
			.optional(),
		templates: z
			.lazy(
				() =>
					TemplateUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema,
			)
			.optional(),
		evaluations: z
			.lazy(
				() =>
					EvaluationUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema,
			)
			.optional(),
		anamnesis: z
			.lazy(
				() =>
					AnamnesisUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema,
			)
			.optional(),
		Evolution: z
			.lazy(
				() =>
					EvolutionUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const SpecialtyUncheckedUpdateWithoutExerciseInputObjectSchema = Schema
