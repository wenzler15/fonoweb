import { z } from 'zod'
import { UserCreateNestedOneWithoutLessonsInputObjectSchema } from './UserCreateNestedOneWithoutLessonsInput.schema'
import { CourseCreateNestedOneWithoutLessonsInputObjectSchema } from './CourseCreateNestedOneWithoutLessonsInput.schema'
import { LessonVideoCreateNestedManyWithoutLessonInputObjectSchema } from './LessonVideoCreateNestedManyWithoutLessonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		order: z.number().optional(),
		title: z.string(),
		description: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		creator: z.lazy(() => UserCreateNestedOneWithoutLessonsInputObjectSchema),
		course: z.lazy(() => CourseCreateNestedOneWithoutLessonsInputObjectSchema),
		videos: z
			.lazy(() => LessonVideoCreateNestedManyWithoutLessonInputObjectSchema)
			.optional(),
	})
	.strict()

export const LessonCreateInputObjectSchema = Schema
