import { z } from 'zod'
import { EvaluationCreateWithoutDoctorInputObjectSchema } from './EvaluationCreateWithoutDoctorInput.schema'
import { EvaluationUncheckedCreateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedCreateWithoutDoctorInput.schema'
import { EvaluationCreateOrConnectWithoutDoctorInputObjectSchema } from './EvaluationCreateOrConnectWithoutDoctorInput.schema'
import { EvaluationCreateManyDoctorInputEnvelopeObjectSchema } from './EvaluationCreateManyDoctorInputEnvelope.schema'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateNestedManyWithoutDoctorInput> =
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
				createMany: z
					.lazy(() => EvaluationCreateManyDoctorInputEnvelopeObjectSchema)
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

export const EvaluationCreateNestedManyWithoutDoctorInputObjectSchema = Schema
