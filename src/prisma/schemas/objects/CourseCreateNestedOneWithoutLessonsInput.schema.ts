import { z } from 'zod'
import { CourseCreateWithoutLessonsInputObjectSchema } from './CourseCreateWithoutLessonsInput.schema'
import { CourseUncheckedCreateWithoutLessonsInputObjectSchema } from './CourseUncheckedCreateWithoutLessonsInput.schema'
import { CourseCreateOrConnectWithoutLessonsInputObjectSchema } from './CourseCreateOrConnectWithoutLessonsInput.schema'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateNestedOneWithoutLessonsInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => CourseCreateWithoutLessonsInputObjectSchema),
						z.lazy(() => CourseUncheckedCreateWithoutLessonsInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => CourseCreateOrConnectWithoutLessonsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => CourseWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const CourseCreateNestedOneWithoutLessonsInputObjectSchema = Schema
