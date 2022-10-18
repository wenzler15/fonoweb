import { z } from 'zod'
import { UserCreateNestedOneWithoutCoursesInputObjectSchema } from './UserCreateNestedOneWithoutCoursesInput.schema'
import { SpecialtyCreateNestedOneWithoutCourseInputObjectSchema } from './SpecialtyCreateNestedOneWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateWithoutLessonsInput> = z
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
		creator: z.lazy(() => UserCreateNestedOneWithoutCoursesInputObjectSchema),
		specialty: z.lazy(
			() => SpecialtyCreateNestedOneWithoutCourseInputObjectSchema,
		),
	})
	.strict()

export const CourseCreateWithoutLessonsInputObjectSchema = Schema
