import { z } from 'zod'
import { WatchedVideoCreateWithoutUserInputObjectSchema } from './WatchedVideoCreateWithoutUserInput.schema'
import { WatchedVideoUncheckedCreateWithoutUserInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutUserInput.schema'
import { WatchedVideoCreateOrConnectWithoutUserInputObjectSchema } from './WatchedVideoCreateOrConnectWithoutUserInput.schema'
import { WatchedVideoUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './WatchedVideoUpsertWithWhereUniqueWithoutUserInput.schema'
import { WatchedVideoCreateManyUserInputEnvelopeObjectSchema } from './WatchedVideoCreateManyUserInputEnvelope.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './WatchedVideoUpdateWithWhereUniqueWithoutUserInput.schema'
import { WatchedVideoUpdateManyWithWhereWithoutUserInputObjectSchema } from './WatchedVideoUpdateManyWithWhereWithoutUserInput.schema'
import { WatchedVideoScalarWhereInputObjectSchema } from './WatchedVideoScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpdateManyWithoutUserNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => WatchedVideoCreateWithoutUserInputObjectSchema),
						z
							.lazy(() => WatchedVideoCreateWithoutUserInputObjectSchema)
							.array(),
						z.lazy(
							() => WatchedVideoUncheckedCreateWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() => WatchedVideoUncheckedCreateWithoutUserInputObjectSchema,
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
							() => WatchedVideoCreateOrConnectWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() => WatchedVideoCreateOrConnectWithoutUserInputObjectSchema,
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
								WatchedVideoUpsertWithWhereUniqueWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									WatchedVideoUpsertWithWhereUniqueWithoutUserInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => WatchedVideoCreateManyUserInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
						z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema).array(),
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
								WatchedVideoUpdateWithWhereUniqueWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									WatchedVideoUpdateWithWhereUniqueWithoutUserInputObjectSchema,
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
							() => WatchedVideoUpdateManyWithWhereWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									WatchedVideoUpdateManyWithWhereWithoutUserInputObjectSchema,
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
						z.lazy(() => WatchedVideoScalarWhereInputObjectSchema),
						z.lazy(() => WatchedVideoScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const WatchedVideoUpdateManyWithoutUserNestedInputObjectSchema = Schema
