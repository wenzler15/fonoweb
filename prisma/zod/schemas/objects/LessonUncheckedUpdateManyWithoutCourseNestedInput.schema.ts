import { z } from 'zod'
import { LessonCreateWithoutCourseInputObjectSchema } from './LessonCreateWithoutCourseInput.schema'
import { LessonUncheckedCreateWithoutCourseInputObjectSchema } from './LessonUncheckedCreateWithoutCourseInput.schema'
import { LessonCreateOrConnectWithoutCourseInputObjectSchema } from './LessonCreateOrConnectWithoutCourseInput.schema'
import { LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema } from './LessonUpsertWithWhereUniqueWithoutCourseInput.schema'
import { LessonCreateManyCourseInputEnvelopeObjectSchema } from './LessonCreateManyCourseInputEnvelope.schema'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema } from './LessonUpdateWithWhereUniqueWithoutCourseInput.schema'
import { LessonUpdateManyWithWhereWithoutCourseInputObjectSchema } from './LessonUpdateManyWithWhereWithoutCourseInput.schema'
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput> =
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
				upsert: z
					.union([
						z.lazy(
							() => LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema,
						),
						z
							.lazy(
								() => LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema,
							)
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
				set: z
					.union([
						z.lazy(() => LessonWhereUniqueInputObjectSchema),
						z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => LessonWhereUniqueInputObjectSchema),
						z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => LessonWhereUniqueInputObjectSchema),
						z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
					])
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
		z
			.object({
				update: z
					.union([
						z.lazy(
							() => LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema,
						),
						z
							.lazy(
								() => LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				updateMany: z
					.union([
						z.lazy(
							() => LessonUpdateManyWithWhereWithoutCourseInputObjectSchema,
						),
						z
							.lazy(
								() => LessonUpdateManyWithWhereWithoutCourseInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				deleteMany: z
					.union([
						z.lazy(() => LessonScalarWhereInputObjectSchema),
						z.lazy(() => LessonScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonUncheckedUpdateManyWithoutCourseNestedInputObjectSchema =
	Schema
