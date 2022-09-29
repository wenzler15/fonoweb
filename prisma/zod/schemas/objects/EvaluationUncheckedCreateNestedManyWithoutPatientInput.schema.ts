import { z } from 'zod'
import { EvaluationCreateWithoutPatientInputObjectSchema } from './EvaluationCreateWithoutPatientInput.schema'
import { EvaluationUncheckedCreateWithoutPatientInputObjectSchema } from './EvaluationUncheckedCreateWithoutPatientInput.schema'
import { EvaluationCreateOrConnectWithoutPatientInputObjectSchema } from './EvaluationCreateOrConnectWithoutPatientInput.schema'
import { EvaluationCreateManyPatientInputEnvelopeObjectSchema } from './EvaluationCreateManyPatientInputEnvelope.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUncheckedCreateNestedManyWithoutPatientInput> =
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
				createMany: z
					.lazy(() => EvaluationCreateManyPatientInputEnvelopeObjectSchema)
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

export const EvaluationUncheckedCreateNestedManyWithoutPatientInputObjectSchema =
	Schema
