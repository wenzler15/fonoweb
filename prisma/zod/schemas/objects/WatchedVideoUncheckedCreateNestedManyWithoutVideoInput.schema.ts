import { z } from 'zod'
import { WatchedVideoCreateWithoutVideoInputObjectSchema } from './WatchedVideoCreateWithoutVideoInput.schema'
import { WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutVideoInput.schema'
import { WatchedVideoCreateOrConnectWithoutVideoInputObjectSchema } from './WatchedVideoCreateOrConnectWithoutVideoInput.schema'
import { WatchedVideoCreateManyVideoInputEnvelopeObjectSchema } from './WatchedVideoCreateManyVideoInputEnvelope.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUncheckedCreateNestedManyWithoutVideoInput> =
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
				createMany: z
					.lazy(() => WatchedVideoCreateManyVideoInputEnvelopeObjectSchema)
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
	])

export const WatchedVideoUncheckedCreateNestedManyWithoutVideoInputObjectSchema =
	Schema
