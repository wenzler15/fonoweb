import { z } from 'zod'
import { EvaluationCreateWithoutPatientInputObjectSchema } from './EvaluationCreateWithoutPatientInput.schema'
import { EvaluationUncheckedCreateWithoutPatientInputObjectSchema } from './EvaluationUncheckedCreateWithoutPatientInput.schema'
import { EvaluationCreateOrConnectWithoutPatientInputObjectSchema } from './EvaluationCreateOrConnectWithoutPatientInput.schema'
import { EvaluationUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './EvaluationUpsertWithWhereUniqueWithoutPatientInput.schema'
import { EvaluationCreateManyPatientInputEnvelopeObjectSchema } from './EvaluationCreateManyPatientInputEnvelope.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './EvaluationUpdateWithWhereUniqueWithoutPatientInput.schema'
import { EvaluationUpdateManyWithWhereWithoutPatientInputObjectSchema } from './EvaluationUpdateManyWithWhereWithoutPatientInput.schema'
import { EvaluationScalarWhereInputObjectSchema } from './EvaluationScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUncheckedUpdateManyWithoutPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvaluationCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => EvaluationCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => EvaluationUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => EvaluationUncheckedCreateWithoutPatientInputObjectSchema,
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
							() => EvaluationCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => EvaluationCreateOrConnectWithoutPatientInputObjectSchema,
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
								EvaluationUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvaluationCreateManyPatientInputEnvelopeObjectSchema)
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
								EvaluationUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
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
								EvaluationUpdateManyWithWhereWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvaluationUpdateManyWithWhereWithoutPatientInputObjectSchema,
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

export const EvaluationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema =
	Schema
