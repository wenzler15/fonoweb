import { z } from 'zod'
import { SpecialtyCreateNestedOneWithoutCourseInputObjectSchema } from './SpecialtyCreateNestedOneWithoutCourseInput.schema'
import { LessonCreateNestedManyWithoutCourseInputObjectSchema } from './LessonCreateNestedManyWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateWithoutCreatorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		order: z.number().optional(),
		title: z.string(),
		cover: z.string().optional().nullable(),
		description: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutCourseInputObjectSchema,
		),
		lessons: z
			.lazy(() => LessonCreateNestedManyWithoutCourseInputObjectSchema)
			.optional(),
	})
	.strict()

export const CourseCreateWithoutCreatorInputObjectSchema = Schema
