import { z } from 'zod'
import { LessonCreateWithoutCreatorInputObjectSchema } from './LessonCreateWithoutCreatorInput.schema'
import { LessonUncheckedCreateWithoutCreatorInputObjectSchema } from './LessonUncheckedCreateWithoutCreatorInput.schema'
import { LessonCreateOrConnectWithoutCreatorInputObjectSchema } from './LessonCreateOrConnectWithoutCreatorInput.schema'
import { LessonUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './LessonUpsertWithWhereUniqueWithoutCreatorInput.schema'
import { LessonCreateManyCreatorInputEnvelopeObjectSchema } from './LessonCreateManyCreatorInputEnvelope.schema'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './LessonUpdateWithWhereUniqueWithoutCreatorInput.schema'
import { LessonUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './LessonUpdateManyWithWhereWithoutCreatorInput.schema'
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpdateManyWithoutCreatorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonCreateWithoutCreatorInputObjectSchema),
						z.lazy(() => LessonCreateWithoutCreatorInputObjectSchema).array(),
						z.lazy(() => LessonUncheckedCreateWithoutCreatorInputObjectSchema),
						z
							.lazy(() => LessonUncheckedCreateWithoutCreatorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => LessonCreateOrConnectWithoutCreatorInputObjectSchema),
						z
							.lazy(() => LessonCreateOrConnectWithoutCreatorInputObjectSchema)
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
							() => LessonUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									LessonUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => LessonCreateManyCreatorInputEnvelopeObjectSchema)
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
							() => LessonUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									LessonUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
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
							() => LessonUpdateManyWithWhereWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() => LessonUpdateManyWithWhereWithoutCreatorInputObjectSchema,
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

export const LessonUpdateManyWithoutCreatorNestedInputObjectSchema = Schema
