import { z } from 'zod'
import { LessonVideoUncheckedCreateNestedManyWithoutLessonInputObjectSchema } from './LessonVideoUncheckedCreateNestedManyWithoutLessonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUncheckedCreateWithoutCreatorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		courseId: z.string(),
		order: z.number().optional(),
		title: z.string(),
		description: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		videos: z
			.lazy(
				() =>
					LessonVideoUncheckedCreateNestedManyWithoutLessonInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const LessonUncheckedCreateWithoutCreatorInputObjectSchema = Schema
