import { z } from 'zod'
import { UserContactCreateWithoutUserInputObjectSchema } from './UserContactCreateWithoutUserInput.schema'
import { UserContactUncheckedCreateWithoutUserInputObjectSchema } from './UserContactUncheckedCreateWithoutUserInput.schema'
import { UserContactCreateOrConnectWithoutUserInputObjectSchema } from './UserContactCreateOrConnectWithoutUserInput.schema'
import { UserContactUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserContactUpsertWithWhereUniqueWithoutUserInput.schema'
import { UserContactCreateManyUserInputEnvelopeObjectSchema } from './UserContactCreateManyUserInputEnvelope.schema'
import { UserContactWhereUniqueInputObjectSchema } from './UserContactWhereUniqueInput.schema'
import { UserContactUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserContactUpdateWithWhereUniqueWithoutUserInput.schema'
import { UserContactUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserContactUpdateManyWithWhereWithoutUserInput.schema'
import { UserContactScalarWhereInputObjectSchema } from './UserContactScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactUncheckedUpdateManyWithoutUserNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserContactCreateWithoutUserInputObjectSchema),
						z.lazy(() => UserContactCreateWithoutUserInputObjectSchema).array(),
						z.lazy(
							() => UserContactUncheckedCreateWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() => UserContactUncheckedCreateWithoutUserInputObjectSchema,
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
							() => UserContactCreateOrConnectWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() => UserContactCreateOrConnectWithoutUserInputObjectSchema,
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
								UserContactUpsertWithWhereUniqueWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									UserContactUpsertWithWhereUniqueWithoutUserInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => UserContactCreateManyUserInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => UserContactWhereUniqueInputObjectSchema),
						z.lazy(() => UserContactWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => UserContactWhereUniqueInputObjectSchema),
						z.lazy(() => UserContactWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => UserContactWhereUniqueInputObjectSchema),
						z.lazy(() => UserContactWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => UserContactWhereUniqueInputObjectSchema),
						z.lazy(() => UserContactWhereUniqueInputObjectSchema).array(),
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
								UserContactUpdateWithWhereUniqueWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									UserContactUpdateWithWhereUniqueWithoutUserInputObjectSchema,
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
							() => UserContactUpdateManyWithWhereWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									UserContactUpdateManyWithWhereWithoutUserInputObjectSchema,
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
						z.lazy(() => UserContactScalarWhereInputObjectSchema),
						z.lazy(() => UserContactScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const UserContactUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
	Schema
