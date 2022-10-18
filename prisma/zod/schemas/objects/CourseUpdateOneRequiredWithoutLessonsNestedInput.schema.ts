import { z } from 'zod'
import { CourseCreateWithoutLessonsInputObjectSchema } from './CourseCreateWithoutLessonsInput.schema'
import { CourseUncheckedCreateWithoutLessonsInputObjectSchema } from './CourseUncheckedCreateWithoutLessonsInput.schema'
import { CourseCreateOrConnectWithoutLessonsInputObjectSchema } from './CourseCreateOrConnectWithoutLessonsInput.schema'
import { CourseUpsertWithoutLessonsInputObjectSchema } from './CourseUpsertWithoutLessonsInput.schema'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithoutLessonsInputObjectSchema } from './CourseUpdateWithoutLessonsInput.schema'
import { CourseUncheckedUpdateWithoutLessonsInputObjectSchema } from './CourseUncheckedUpdateWithoutLessonsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpdateOneRequiredWithoutLessonsNestedInput> =
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
				upsert: z
					.lazy(() => CourseUpsertWithoutLessonsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => CourseWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => CourseUpdateWithoutLessonsInputObjectSchema),
						z.lazy(() => CourseUncheckedUpdateWithoutLessonsInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const CourseUpdateOneRequiredWithoutLessonsNestedInputObjectSchema =
	Schema
