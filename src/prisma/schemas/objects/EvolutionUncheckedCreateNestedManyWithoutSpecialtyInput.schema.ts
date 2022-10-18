import { z } from 'zod'
import { EvolutionCreateWithoutSpecialtyInputObjectSchema } from './EvolutionCreateWithoutSpecialtyInput.schema'
import { EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedCreateWithoutSpecialtyInput.schema'
import { EvolutionCreateOrConnectWithoutSpecialtyInputObjectSchema } from './EvolutionCreateOrConnectWithoutSpecialtyInput.schema'
import { EvolutionCreateManySpecialtyInputEnvelopeObjectSchema } from './EvolutionCreateManySpecialtyInputEnvelope.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUncheckedCreateNestedManyWithoutSpecialtyInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvolutionCreateWithoutSpecialtyInputObjectSchema),
						z
							.lazy(() => EvolutionCreateWithoutSpecialtyInputObjectSchema)
							.array(),
						z.lazy(
							() => EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => EvolutionCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionCreateOrConnectWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvolutionCreateManySpecialtyInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const EvolutionUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema =
	Schema
