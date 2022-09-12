import { z } from 'zod'
import { EvolutionCreateWithoutPatientInputObjectSchema } from './EvolutionCreateWithoutPatientInput.schema'
import { EvolutionUncheckedCreateWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateWithoutPatientInput.schema'
import { EvolutionCreateOrConnectWithoutPatientInputObjectSchema } from './EvolutionCreateOrConnectWithoutPatientInput.schema'
import { EvolutionUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './EvolutionUpsertWithWhereUniqueWithoutPatientInput.schema'
import { EvolutionCreateManyPatientInputEnvelopeObjectSchema } from './EvolutionCreateManyPatientInputEnvelope.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './EvolutionUpdateWithWhereUniqueWithoutPatientInput.schema'
import { EvolutionUpdateManyWithWhereWithoutPatientInputObjectSchema } from './EvolutionUpdateManyWithWhereWithoutPatientInput.schema'
import { EvolutionScalarWhereInputObjectSchema } from './EvolutionScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUncheckedUpdateManyWithoutPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvolutionCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => EvolutionCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => EvolutionUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionUncheckedCreateWithoutPatientInputObjectSchema,
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
							() => EvolutionCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionCreateOrConnectWithoutPatientInputObjectSchema,
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
								EvolutionUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvolutionUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvolutionCreateManyPatientInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema).array(),
					])
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
		z
			.object({
				update: z
					.union([
						z.lazy(
							() =>
								EvolutionUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvolutionUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
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
							() => EvolutionUpdateManyWithWhereWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvolutionUpdateManyWithWhereWithoutPatientInputObjectSchema,
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
						z.lazy(() => EvolutionScalarWhereInputObjectSchema),
						z.lazy(() => EvolutionScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const EvolutionUncheckedUpdateManyWithoutPatientNestedInputObjectSchema =
	Schema
