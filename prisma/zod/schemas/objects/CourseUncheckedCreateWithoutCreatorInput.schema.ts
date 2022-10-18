import { z } from 'zod'
import { LessonUncheckedCreateNestedManyWithoutCourseInputObjectSchema } from './LessonUncheckedCreateNestedManyWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUncheckedCreateWithoutCreatorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		specialtyId: z.string(),
		order: z.number().optional(),
		title: z.string(),
		cover: z.string().optional().nullable(),
		description: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		lessons: z
			.lazy(() => LessonUncheckedCreateNestedManyWithoutCourseInputObjectSchema)
			.optional(),
	})
	.strict()

export const CourseUncheckedCreateWithoutCreatorInputObjectSchema = Schema
