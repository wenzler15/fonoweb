import { z } from 'zod'
import { UserAdressCreateWithoutUserInputObjectSchema } from './UserAdressCreateWithoutUserInput.schema'
import { UserAdressUncheckedCreateWithoutUserInputObjectSchema } from './UserAdressUncheckedCreateWithoutUserInput.schema'
import { UserAdressCreateOrConnectWithoutUserInputObjectSchema } from './UserAdressCreateOrConnectWithoutUserInput.schema'
import { UserAdressUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserAdressUpsertWithWhereUniqueWithoutUserInput.schema'
import { UserAdressCreateManyUserInputEnvelopeObjectSchema } from './UserAdressCreateManyUserInputEnvelope.schema'
import { UserAdressWhereUniqueInputObjectSchema } from './UserAdressWhereUniqueInput.schema'
import { UserAdressUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserAdressUpdateWithWhereUniqueWithoutUserInput.schema'
import { UserAdressUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserAdressUpdateManyWithWhereWithoutUserInput.schema'
import { UserAdressScalarWhereInputObjectSchema } from './UserAdressScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressUpdateManyWithoutUserNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserAdressCreateWithoutUserInputObjectSchema),
						z.lazy(() => UserAdressCreateWithoutUserInputObjectSchema).array(),
						z.lazy(() => UserAdressUncheckedCreateWithoutUserInputObjectSchema),
						z
							.lazy(() => UserAdressUncheckedCreateWithoutUserInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => UserAdressCreateOrConnectWithoutUserInputObjectSchema),
						z
							.lazy(() => UserAdressCreateOrConnectWithoutUserInputObjectSchema)
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
							() => UserAdressUpsertWithWhereUniqueWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									UserAdressUpsertWithWhereUniqueWithoutUserInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => UserAdressCreateManyUserInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema),
						z.lazy(() => UserAdressWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(
							() => UserAdressUpdateWithWhereUniqueWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() =>
									UserAdressUpdateWithWhereUniqueWithoutUserInputObjectSchema,
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
							() => UserAdressUpdateManyWithWhereWithoutUserInputObjectSchema,
						),
						z
							.lazy(
								() => UserAdressUpdateManyWithWhereWithoutUserInputObjectSchema,
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
						z.lazy(() => UserAdressScalarWhereInputObjectSchema),
						z.lazy(() => UserAdressScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const UserAdressUpdateManyWithoutUserNestedInputObjectSchema = Schema
