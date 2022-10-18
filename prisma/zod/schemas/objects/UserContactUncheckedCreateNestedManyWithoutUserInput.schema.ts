import { z } from 'zod'
import { UserContactCreateWithoutUserInputObjectSchema } from './UserContactCreateWithoutUserInput.schema'
import { UserContactUncheckedCreateWithoutUserInputObjectSchema } from './UserContactUncheckedCreateWithoutUserInput.schema'
import { UserContactCreateOrConnectWithoutUserInputObjectSchema } from './UserContactCreateOrConnectWithoutUserInput.schema'
import { UserContactCreateManyUserInputEnvelopeObjectSchema } from './UserContactCreateManyUserInputEnvelope.schema'
import { UserContactWhereUniqueInputObjectSchema } from './UserContactWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactUncheckedCreateNestedManyWithoutUserInput> =
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
				createMany: z
					.lazy(() => UserContactCreateManyUserInputEnvelopeObjectSchema)
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
	])

export const UserContactUncheckedCreateNestedManyWithoutUserInputObjectSchema =
	Schema
