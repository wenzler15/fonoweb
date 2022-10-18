import { z } from 'zod'
import { LessonVideoCreateWithoutLessonInputObjectSchema } from './LessonVideoCreateWithoutLessonInput.schema'
import { LessonVideoUncheckedCreateWithoutLessonInputObjectSchema } from './LessonVideoUncheckedCreateWithoutLessonInput.schema'
import { LessonVideoCreateOrConnectWithoutLessonInputObjectSchema } from './LessonVideoCreateOrConnectWithoutLessonInput.schema'
import { LessonVideoUpsertWithWhereUniqueWithoutLessonInputObjectSchema } from './LessonVideoUpsertWithWhereUniqueWithoutLessonInput.schema'
import { LessonVideoCreateManyLessonInputEnvelopeObjectSchema } from './LessonVideoCreateManyLessonInputEnvelope.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'
import { LessonVideoUpdateWithWhereUniqueWithoutLessonInputObjectSchema } from './LessonVideoUpdateWithWhereUniqueWithoutLessonInput.schema'
import { LessonVideoUpdateManyWithWhereWithoutLessonInputObjectSchema } from './LessonVideoUpdateManyWithWhereWithoutLessonInput.schema'
import { LessonVideoScalarWhereInputObjectSchema } from './LessonVideoScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUpdateManyWithoutLessonNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonVideoCreateWithoutLessonInputObjectSchema),
						z
							.lazy(() => LessonVideoCreateWithoutLessonInputObjectSchema)
							.array(),
						z.lazy(
							() => LessonVideoUncheckedCreateWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() => LessonVideoUncheckedCreateWithoutLessonInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(
							() => LessonVideoCreateOrConnectWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() => LessonVideoCreateOrConnectWithoutLessonInputObjectSchema,
							)
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
							() =>
								LessonVideoUpsertWithWhereUniqueWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() =>
									LessonVideoUpsertWithWhereUniqueWithoutLessonInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => LessonVideoCreateManyLessonInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(
							() =>
								LessonVideoUpdateWithWhereUniqueWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() =>
									LessonVideoUpdateWithWhereUniqueWithoutLessonInputObjectSchema,
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
							() =>
								LessonVideoUpdateManyWithWhereWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() =>
									LessonVideoUpdateManyWithWhereWithoutLessonInputObjectSchema,
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
						z.lazy(() => LessonVideoScalarWhereInputObjectSchema),
						z.lazy(() => LessonVideoScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonVideoUpdateManyWithoutLessonNestedInputObjectSchema = Schema
