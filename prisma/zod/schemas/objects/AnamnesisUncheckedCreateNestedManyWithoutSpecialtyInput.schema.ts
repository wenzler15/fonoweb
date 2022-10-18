import { z } from 'zod'
import { AnamnesisCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateWithoutSpecialtyInput.schema'
import { AnamnesisUncheckedCreateWithoutSpecialtyInputObjectSchema } from './AnamnesisUncheckedCreateWithoutSpecialtyInput.schema'
import { AnamnesisCreateOrConnectWithoutSpecialtyInputObjectSchema } from './AnamnesisCreateOrConnectWithoutSpecialtyInput.schema'
import { AnamnesisCreateManySpecialtyInputEnvelopeObjectSchema } from './AnamnesisCreateManySpecialtyInputEnvelope.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisUncheckedCreateNestedManyWithoutSpecialtyInput> =
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
				createMany: z
					.lazy(() => AnamnesisCreateManySpecialtyInputEnvelopeObjectSchema)
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
	])

export const AnamnesisUncheckedCreateNestedManyWithoutSpecialtyInputObjectSchema =
	Schema
