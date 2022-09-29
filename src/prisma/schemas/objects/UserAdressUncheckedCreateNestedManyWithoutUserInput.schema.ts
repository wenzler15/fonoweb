import { z } from 'zod'
import { UserAdressCreateWithoutUserInputObjectSchema } from './UserAdressCreateWithoutUserInput.schema'
import { UserAdressUncheckedCreateWithoutUserInputObjectSchema } from './UserAdressUncheckedCreateWithoutUserInput.schema'
import { UserAdressCreateOrConnectWithoutUserInputObjectSchema } from './UserAdressCreateOrConnectWithoutUserInput.schema'
import { UserAdressCreateManyUserInputEnvelopeObjectSchema } from './UserAdressCreateManyUserInputEnvelope.schema'
import { UserAdressWhereUniqueInputObjectSchema } from './UserAdressWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserAdressUncheckedCreateNestedManyWithoutUserInput> =
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
				createMany: z
					.lazy(() => UserAdressCreateManyUserInputEnvelopeObjectSchema)
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
	])

export const UserAdressUncheckedCreateNestedManyWithoutUserInputObjectSchema =
	Schema
