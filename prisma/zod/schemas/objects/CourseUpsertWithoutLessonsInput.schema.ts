import { z } from 'zod'
import { CourseUpdateWithoutLessonsInputObjectSchema } from './CourseUpdateWithoutLessonsInput.schema'
import { CourseUncheckedUpdateWithoutLessonsInputObjectSchema } from './CourseUncheckedUpdateWithoutLessonsInput.schema'
import { CourseCreateWithoutLessonsInputObjectSchema } from './CourseCreateWithoutLessonsInput.schema'
import { CourseUncheckedCreateWithoutLessonsInputObjectSchema } from './CourseUncheckedCreateWithoutLessonsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpsertWithoutLessonsInput> = z
	.object({
		update: z.union([
			z.lazy(() => CourseUpdateWithoutLessonsInputObjectSchema),
			z.lazy(() => CourseUncheckedUpdateWithoutLessonsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => CourseCreateWithoutLessonsInputObjectSchema),
			z.lazy(() => CourseUncheckedCreateWithoutLessonsInputObjectSchema),
		]),
	})
	.strict()

export const CourseUpsertWithoutLessonsInputObjectSchema = Schema
