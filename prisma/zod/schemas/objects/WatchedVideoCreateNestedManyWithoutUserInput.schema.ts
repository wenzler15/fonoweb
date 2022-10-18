import { z } from 'zod'
import { WatchedVideoCreateWithoutUserInputObjectSchema } from './WatchedVideoCreateWithoutUserInput.schema'
import { WatchedVideoUncheckedCreateWithoutUserInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutUserInput.schema'
import { WatchedVideoCreateOrConnectWithoutUserInputObjectSchema } from './WatchedVideoCreateOrConnectWithoutUserInput.schema'
import { WatchedVideoCreateManyUserInputEnvelopeObjectSchema } from './WatchedVideoCreateManyUserInputEnvelope.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateNestedManyWithoutUserInput> =
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
				createMany: z
					.lazy(() => WatchedVideoCreateManyUserInputEnvelopeObjectSchema)
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

export const WatchedVideoCreateNestedManyWithoutUserInputObjectSchema = Schema
