import { z } from 'zod'
import { EvaluationCreateWithoutDoctorInputObjectSchema } from './EvaluationCreateWithoutDoctorInput.schema'
import { EvaluationUncheckedCreateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedCreateWithoutDoctorInput.schema'
import { EvaluationCreateOrConnectWithoutDoctorInputObjectSchema } from './EvaluationCreateOrConnectWithoutDoctorInput.schema'
import { EvaluationUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './EvaluationUpsertWithWhereUniqueWithoutDoctorInput.schema'
import { EvaluationCreateManyDoctorInputEnvelopeObjectSchema } from './EvaluationCreateManyDoctorInputEnvelope.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './EvaluationUpdateWithWhereUniqueWithoutDoctorInput.schema'
import { EvaluationUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './EvaluationUpdateManyWithWhereWithoutDoctorInput.schema'
import { EvaluationScalarWhereInputObjectSchema } from './EvaluationScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpdateManyWithoutDoctorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvaluationCreateWithoutDoctorInputObjectSchema),
						z
							.lazy(() => EvaluationCreateWithoutDoctorInputObjectSchema)
							.array(),
						z.lazy(
							() => EvaluationUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => EvaluationUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => EvaluationCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => EvaluationCreateOrConnectWithoutDoctorInputObjectSchema,
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
								EvaluationUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvaluationCreateManyDoctorInputEnvelopeObjectSchema)
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
								EvaluationUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
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
							() => EvaluationUpdateManyWithWhereWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpdateManyWithWhereWithoutDoctorInputObjectSchema,
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

export const EvaluationUpdateManyWithoutDoctorNestedInputObjectSchema = Schema
