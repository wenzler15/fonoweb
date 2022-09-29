import { z } from 'zod'
import { EvaluationCreateWithoutSpecialtyInputObjectSchema } from './EvaluationCreateWithoutSpecialtyInput.schema'
import { EvaluationUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvaluationUncheckedCreateWithoutSpecialtyInput.schema'
import { EvaluationCreateOrConnectWithoutSpecialtyInputObjectSchema } from './EvaluationCreateOrConnectWithoutSpecialtyInput.schema'
import { EvaluationCreateManySpecialtyInputEnvelopeObjectSchema } from './EvaluationCreateManySpecialtyInputEnvelope.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateNestedManyWithoutSpecialtyInput> =
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
				createMany: z
					.lazy(() => EvaluationCreateManySpecialtyInputEnvelopeObjectSchema)
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
	])

export const EvaluationCreateNestedManyWithoutSpecialtyInputObjectSchema =
	Schema
