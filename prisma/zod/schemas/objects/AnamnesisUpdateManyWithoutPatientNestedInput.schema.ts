import { z } from 'zod'
import { AnamnesisCreateWithoutPatientInputObjectSchema } from './AnamnesisCreateWithoutPatientInput.schema'
import { AnamnesisUncheckedCreateWithoutPatientInputObjectSchema } from './AnamnesisUncheckedCreateWithoutPatientInput.schema'
import { AnamnesisCreateOrConnectWithoutPatientInputObjectSchema } from './AnamnesisCreateOrConnectWithoutPatientInput.schema'
import { AnamnesisUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './AnamnesisUpsertWithWhereUniqueWithoutPatientInput.schema'
import { AnamnesisCreateManyPatientInputEnvelopeObjectSchema } from './AnamnesisCreateManyPatientInputEnvelope.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './AnamnesisUpdateWithWhereUniqueWithoutPatientInput.schema'
import { AnamnesisUpdateManyWithWhereWithoutPatientInputObjectSchema } from './AnamnesisUpdateManyWithWhereWithoutPatientInput.schema'
import { AnamnesisScalarWhereInputObjectSchema } from './AnamnesisScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateManyWithoutPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AnamnesisCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => AnamnesisCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => AnamnesisUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisUncheckedCreateWithoutPatientInputObjectSchema,
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
							() => AnamnesisCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisCreateOrConnectWithoutPatientInputObjectSchema,
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
								AnamnesisUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AnamnesisCreateManyPatientInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema).array(),
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
								AnamnesisUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
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
							() => AnamnesisUpdateManyWithWhereWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpdateManyWithWhereWithoutPatientInputObjectSchema,
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
						z.lazy(() => AnamnesisScalarWhereInputObjectSchema),
						z.lazy(() => AnamnesisScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const AnamnesisUpdateManyWithoutPatientNestedInputObjectSchema = Schema
