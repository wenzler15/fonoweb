import { z } from 'zod'
import { ExerciseCreateWithoutSpecialtyInputObjectSchema } from './ExerciseCreateWithoutSpecialtyInput.schema'
import { ExerciseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './ExerciseUncheckedCreateWithoutSpecialtyInput.schema'
import { ExerciseCreateOrConnectWithoutSpecialtyInputObjectSchema } from './ExerciseCreateOrConnectWithoutSpecialtyInput.schema'
import { ExerciseCreateManySpecialtyInputEnvelopeObjectSchema } from './ExerciseCreateManySpecialtyInputEnvelope.schema'
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.ExerciseUncheckedCreateNestedManyWithoutSpecialtyInput> =
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
				createMany: z
					.lazy(() => ExerciseCreateManySpecialtyInputEnvelopeObjectSchema)
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

export const ExerciseUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema =
	Schema
