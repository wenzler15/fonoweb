import { z } from 'zod'
import { UserCreateWithoutPatientDataInputObjectSchema } from './UserCreateWithoutPatientDataInput.schema'
import { UserUncheckedCreateWithoutPatientDataInputObjectSchema } from './UserUncheckedCreateWithoutPatientDataInput.schema'
import { UserCreateOrConnectWithoutPatientDataInputObjectSchema } from './UserCreateOrConnectWithoutPatientDataInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPatientDataInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutPatientDataInputObjectSchema),
						z.lazy(
							() => UserUncheckedCreateWithoutPatientDataInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutPatientDataInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const UserCreateNestedOneWithoutPatientDataInputObjectSchema = Schema
