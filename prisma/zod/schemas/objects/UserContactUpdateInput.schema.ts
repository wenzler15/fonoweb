import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutContactsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutContactsNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactUpdateInput> = z
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
		email: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		area: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		phone: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
			.lazy(() => UserUpdateOneRequiredWithoutContactsNestedInputObjectSchema)
			.optional(),
	})
	.strict()

export const UserContactUpdateInputObjectSchema = Schema
