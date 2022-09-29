import { z } from 'zod'
import { ExerciseCreateWithoutSpecialtyInputObjectSchema } from './ExerciseCreateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedCreateWithoutSpecialtyInput.schema'
import { ExerciseCreateOrConnectWithoutSpecialtyInputObjectSchema } from './ExerciseCreateOrConnectWithoutSpecialtyInput.schema'
import { ExerciseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './ExerciseUpsertWithWhereUniqueWithoutSpecialtyInput.schema'
import { ExerciseCreateManySpecialtyInputEnvelopeObjectSchema } from './ExerciseCreateManySpecialtyInputEnvelope.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'
import { ExerciseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './ExerciseUpdateWithWhereUniqueWithoutSpecialtyInput.schema'
import { ExerciseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema } from './ExerciseUpdateManyWithWhereWithoutSpecialtyInput.schema'
import { ExerciseScalarWhereInputObjectSchema } from './ExerciseScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUncheckedUpdateManyWithoutSpecialtyNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => ExerciseCreateWithoutSpecialtyInputObjectSchema),
						z
							.lazy(() => ExerciseCreateWithoutSpecialtyInputObjectSchema)
							.array(),
						z.lazy(
							() => ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => ExerciseCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => ExerciseCreateOrConnectWithoutSpecialtyInputObjectSchema,
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
								ExerciseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									ExerciseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => ExerciseCreateManySpecialtyInputEnvelopeObjectSchema)
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
								ExerciseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									ExerciseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
								ExerciseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									ExerciseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
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

export const ExerciseUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema =
	Schema
