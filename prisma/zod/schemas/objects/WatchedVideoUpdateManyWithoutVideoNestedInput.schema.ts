import { z } from 'zod'
import { WatchedVideoCreateWithoutVideoInputObjectSchema } from './WatchedVideoCreateWithoutVideoInput.schema'
import { WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutVideoInput.schema'
import { WatchedVideoCreateOrConnectWithoutVideoInputObjectSchema } from './WatchedVideoCreateOrConnectWithoutVideoInput.schema'
import { WatchedVideoUpsertWithWhereUniqueWithoutVideoInputObjectSchema } from './WatchedVideoUpsertWithWhereUniqueWithoutVideoInput.schema'
import { WatchedVideoCreateManyVideoInputEnvelopeObjectSchema } from './WatchedVideoCreateManyVideoInputEnvelope.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoUpdateWithWhereUniqueWithoutVideoInputObjectSchema } from './WatchedVideoUpdateWithWhereUniqueWithoutVideoInput.schema'
import { WatchedVideoUpdateManyWithWhereWithoutVideoInputObjectSchema } from './WatchedVideoUpdateManyWithWhereWithoutVideoInput.schema'
import { WatchedVideoScalarWhereInputObjectSchema } from './WatchedVideoScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpdateManyWithoutVideoNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => WatchedVideoCreateWithoutVideoInputObjectSchema),
						z
							.lazy(() => WatchedVideoCreateWithoutVideoInputObjectSchema)
							.array(),
						z.lazy(
							() => WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema,
						),
						z
							.lazy(
								() => WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema,
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
							() => WatchedVideoCreateOrConnectWithoutVideoInputObjectSchema,
						),
						z
							.lazy(
								() => WatchedVideoCreateOrConnectWithoutVideoInputObjectSchema,
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
								WatchedVideoUpsertWithWhereUniqueWithoutVideoInputObjectSchema,
						),
						z
							.lazy(
								() =>
									WatchedVideoUpsertWithWhereUniqueWithoutVideoInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => WatchedVideoCreateManyVideoInputEnvelopeObjectSchema)
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
								WatchedVideoUpdateWithWhereUniqueWithoutVideoInputObjectSchema,
						),
						z
							.lazy(
								() =>
									WatchedVideoUpdateWithWhereUniqueWithoutVideoInputObjectSchema,
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
								WatchedVideoUpdateManyWithWhereWithoutVideoInputObjectSchema,
						),
						z
							.lazy(
								() =>
									WatchedVideoUpdateManyWithWhereWithoutVideoInputObjectSchema,
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

export const WatchedVideoUpdateManyWithoutVideoNestedInputObjectSchema = Schema
