import { z } from 'zod'
import { ExerciseCreateWithoutCreatorInputObjectSchema } from './ExerciseCreateWithoutCreatorInput.schema'
import { ExerciseUncheckedCreateWithoutCreatorInputObjectSchema } from './ExerciseUncheckedCreateWithoutCreatorInput.schema'
import { ExerciseCreateOrConnectWithoutCreatorInputObjectSchema } from './ExerciseCreateOrConnectWithoutCreatorInput.schema'
import { ExerciseCreateManyCreatorInputEnvelopeObjectSchema } from './ExerciseCreateManyCreatorInputEnvelope.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUncheckedCreateNestedManyWithoutCreatorInput> =
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
				createMany: z
					.lazy(() => ExerciseCreateManyCreatorInputEnvelopeObjectSchema)
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
	])

export const ExerciseUncheckedCreateNestedManyWithoutCreatorInputObjectSchema =
	Schema
