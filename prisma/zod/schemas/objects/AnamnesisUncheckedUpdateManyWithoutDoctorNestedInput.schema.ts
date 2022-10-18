import { z } from 'zod'
import { AnamnesisCreateWithoutDoctorInputObjectSchema } from './AnamnesisCreateWithoutDoctorInput.schema'
import { AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedCreateWithoutDoctorInput.schema'
import { AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema } from './AnamnesisCreateOrConnectWithoutDoctorInput.schema'
import { AnamnesisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './AnamnesisUpsertWithWhereUniqueWithoutDoctorInput.schema'
import { AnamnesisCreateManyDoctorInputEnvelopeObjectSchema } from './AnamnesisCreateManyDoctorInputEnvelope.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './AnamnesisUpdateWithWhereUniqueWithoutDoctorInput.schema'
import { AnamnesisUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './AnamnesisUpdateManyWithWhereWithoutDoctorInput.schema'
import { AnamnesisScalarWhereInputObjectSchema } from './AnamnesisScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUncheckedUpdateManyWithoutDoctorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AnamnesisCreateWithoutDoctorInputObjectSchema),
						z.lazy(() => AnamnesisCreateWithoutDoctorInputObjectSchema).array(),
						z.lazy(
							() => AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema,
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
								AnamnesisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AnamnesisCreateManyDoctorInputEnvelopeObjectSchema)
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
								AnamnesisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
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
							() => AnamnesisUpdateManyWithWhereWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpdateManyWithWhereWithoutDoctorInputObjectSchema,
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

export const AnamnesisUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema =
	Schema
