import { z } from 'zod'
import { LessonCreateWithoutCourseInputObjectSchema } from './LessonCreateWithoutCourseInput.schema'
import { LessonUncheckedCreateWithoutCourseInputObjectSchema } from './LessonUncheckedCreateWithoutCourseInput.schema'
import { LessonCreateOrConnectWithoutCourseInputObjectSchema } from './LessonCreateOrConnectWithoutCourseInput.schema'
import { LessonCreateManyCourseInputEnvelopeObjectSchema } from './LessonCreateManyCourseInputEnvelope.schema'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonCreateWithoutCourseInputObjectSchema),
						z.lazy(() => LessonCreateWithoutCourseInputObjectSchema).array(),
						z.lazy(() => LessonUncheckedCreateWithoutCourseInputObjectSchema),
						z
							.lazy(() => LessonUncheckedCreateWithoutCourseInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => LessonCreateOrConnectWithoutCourseInputObjectSchema),
						z
							.lazy(() => LessonCreateOrConnectWithoutCourseInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => LessonCreateManyCourseInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => LessonWhereUniqueInputObjectSchema),
						z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonUncheckedCreateNestedManyWithoutCourseInputObjectSchema =
	Schema
