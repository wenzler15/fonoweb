import { z } from 'zod'
import { EvaluationCreateWithoutSpecialtyInputObjectSchema } from './EvaluationCreateWithoutSpecialtyInput.schema'
import { EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedCreateWithoutSpecialtyInput.schema'
import { EvaluationCreateOrConnectWithoutSpecialtyInputObjectSchema } from './EvaluationCreateOrConnectWithoutSpecialtyInput.schema'
import { EvaluationUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './EvaluationUpsertWithWhereUniqueWithoutSpecialtyInput.schema'
import { EvaluationCreateManySpecialtyInputEnvelopeObjectSchema } from './EvaluationCreateManySpecialtyInputEnvelope.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './EvaluationUpdateWithWhereUniqueWithoutSpecialtyInput.schema'
import { EvaluationUpdateManyWithWhereWithoutSpecialtyInputObjectSchema } from './EvaluationUpdateManyWithWhereWithoutSpecialtyInput.schema'
import { EvaluationScalarWhereInputObjectSchema } from './EvaluationScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUncheckedUpdateManyWithoutSpecialtyNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvaluationCreateWithoutSpecialtyInputObjectSchema),
						z
							.lazy(() => EvaluationCreateWithoutSpecialtyInputObjectSchema)
							.array(),
						z.lazy(
							() => EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => EvaluationCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationCreateOrConnectWithoutSpecialtyInputObjectSchema,
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
								EvaluationUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvaluationCreateManySpecialtyInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
						z.lazy(() => EvaluationWhereUniqueInputObjectSchema).array(),
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
								EvaluationUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
								EvaluationUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
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
						z.lazy(() => EvaluationScalarWhereInputObjectSchema),
						z.lazy(() => EvaluationScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const EvaluationUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema =
	Schema
