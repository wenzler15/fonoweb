import { z } from 'zod'
import { ExerciseCreateWithoutCreatorInputObjectSchema } from './ExerciseCreateWithoutCreatorInput.schema'
import { ExerciseUncheckedCreateWithoutCreatorInputObjectSchema } from './ExerciseUncheckedCreateWithoutCreatorInput.schema'
import { ExerciseCreateOrConnectWithoutCreatorInputObjectSchema } from './ExerciseCreateOrConnectWithoutCreatorInput.schema'
import { ExerciseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './ExerciseUpsertWithWhereUniqueWithoutCreatorInput.schema'
import { ExerciseCreateManyCreatorInputEnvelopeObjectSchema } from './ExerciseCreateManyCreatorInputEnvelope.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './ExerciseUpdateWithWhereUniqueWithoutCreatorInput.schema'
import { ExerciseUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './ExerciseUpdateManyWithWhereWithoutCreatorInput.schema'
import { ExerciseScalarWhereInputObjectSchema } from './ExerciseScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUncheckedUpdateManyWithoutCreatorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => ExerciseCreateWithoutCreatorInputObjectSchema),
						z.lazy(() => ExerciseCreateWithoutCreatorInputObjectSchema).array(),
						z.lazy(
							() => ExerciseUncheckedCreateWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() => ExerciseUncheckedCreateWithoutCreatorInputObjectSchema,
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
							() => ExerciseCreateOrConnectWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() => ExerciseCreateOrConnectWithoutCreatorInputObjectSchema,
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
								ExerciseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									ExerciseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => ExerciseCreateManyCreatorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
						z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
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
								ExerciseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									ExerciseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
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
							() => ExerciseUpdateManyWithWhereWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									ExerciseUpdateManyWithWhereWithoutCreatorInputObjectSchema,
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
						z.lazy(() => ExerciseScalarWhereInputObjectSchema),
						z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const ExerciseUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema =
	Schema
