import { z } from 'zod'
import { AnamnesisCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedCreateWithoutSpecialtyInput.schema'
import { AnamnesisCreateOrConnectWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateOrConnectWithoutSpecialtyInput.schema'
import { AnamnesisUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './AnamnesisUpsertWithWhereUniqueWithoutSpecialtyInput.schema'
import { AnamnesisCreateManySpecialtyInputEnvelopeObjectSchema } from './AnamnesisCreateManySpecialtyInputEnvelope.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'
import { AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInput.schema'
import { AnamnesisUpdateManyWithWhereWithoutSpecialtyInputObjectSchema } from './AnamnesisUpdateManyWithWhereWithoutSpecialtyInput.schema'
import { AnamnesisScalarWhereInputObjectSchema } from './AnamnesisScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUpdateManyWithoutSpecialtyNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AnamnesisCreateWithoutSpecialtyInputObjectSchema),
						z
							.lazy(() => AnamnesisCreateWithoutSpecialtyInputObjectSchema)
							.array(),
						z.lazy(
							() => AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => AnamnesisCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisCreateOrConnectWithoutSpecialtyInputObjectSchema,
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
								AnamnesisUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AnamnesisCreateManySpecialtyInputEnvelopeObjectSchema)
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
								AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
							() =>
								AnamnesisUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									AnamnesisUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
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

export const AnamnesisUpdateManyWithoutSpecialtyNestedInputObjectSchema = Schema
