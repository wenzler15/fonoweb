import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutWatchedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWatchedNestedInput.schema'
import { LessonVideoUpdateOneRequiredWithoutWatchedNestedInputObjectSchema } from './LessonVideoUpdateOneRequiredWithoutWatchedNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpdateInput> = z
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
		deletedAt: z
			.union([
				z.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		user: z
			.lazy(() => UserUpdateOneRequiredWithoutWatchedNestedInputObjectSchema)
			.optional(),
		video: z
			.lazy(
				() => LessonVideoUpdateOneRequiredWithoutWatchedNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const WatchedVideoUpdateInputObjectSchema = Schema
