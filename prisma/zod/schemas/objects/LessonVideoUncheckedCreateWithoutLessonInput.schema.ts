import { z } from 'zod'
import { WatchedVideoUncheckedCreateNestedManyWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedCreateNestedManyWithoutVideoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUncheckedCreateWithoutLessonInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		order: z.number().optional(),
		title: z.string(),
		video: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		watched: z
			.lazy(
				() =>
					WatchedVideoUncheckedCreateNestedManyWithoutVideoInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const LessonVideoUncheckedCreateWithoutLessonInputObjectSchema = Schema
