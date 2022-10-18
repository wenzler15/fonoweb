import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseCreateWithoutLessonsInputObjectSchema } from './CourseCreateWithoutLessonsInput.schema'
import { CourseUncheckedCreateWithoutLessonsInputObjectSchema } from './CourseUncheckedCreateWithoutLessonsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateOrConnectWithoutLessonsInput> = z
	.object({
		where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => CourseCreateWithoutLessonsInputObjectSchema),
			z.lazy(() => CourseUncheckedCreateWithoutLessonsInputObjectSchema),
		]),
	})
	.strict()

export const CourseCreateOrConnectWithoutLessonsInputObjectSchema = Schema
