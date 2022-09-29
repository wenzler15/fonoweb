import { z } from 'zod'
import { EvolutionCreateWithoutDoctorInputObjectSchema } from './EvolutionCreateWithoutDoctorInput.schema'
import { EvolutionUncheckedCreateWithoutDoctorInputObjectSchema } from './EvolutionUncheckedCreateWithoutDoctorInput.schema'
import { EvolutionCreateOrConnectWithoutDoctorInputObjectSchema } from './EvolutionCreateOrConnectWithoutDoctorInput.schema'
import { EvolutionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './EvolutionUpsertWithWhereUniqueWithoutDoctorInput.schema'
import { EvolutionCreateManyDoctorInputEnvelopeObjectSchema } from './EvolutionCreateManyDoctorInputEnvelope.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './EvolutionUpdateWithWhereUniqueWithoutDoctorInput.schema'
import { EvolutionUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './EvolutionUpdateManyWithWhereWithoutDoctorInput.schema'
import { EvolutionScalarWhereInputObjectSchema } from './EvolutionScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUncheckedUpdateManyWithoutDoctorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvolutionCreateWithoutDoctorInputObjectSchema),
						z.lazy(() => EvolutionCreateWithoutDoctorInputObjectSchema).array(),
						z.lazy(
							() => EvolutionUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => EvolutionCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionCreateOrConnectWithoutDoctorInputObjectSchema,
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
								EvolutionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvolutionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvolutionCreateManyDoctorInputEnvelopeObjectSchema)
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
								EvolutionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvolutionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
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
							() => EvolutionUpdateManyWithWhereWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									EvolutionUpdateManyWithWhereWithoutDoctorInputObjectSchema,
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

export const EvolutionUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema =
	Schema
