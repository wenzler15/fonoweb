import { z } from 'zod'
import { UserCreateWithoutDoctorPatientInputObjectSchema } from './UserCreateWithoutDoctorPatientInput.schema'
import { UserUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './UserUncheckedCreateWithoutDoctorPatientInput.schema'
import { UserCreateOrConnectWithoutDoctorPatientInputObjectSchema } from './UserCreateOrConnectWithoutDoctorPatientInput.schema'
import { UserUpsertWithoutDoctorPatientInputObjectSchema } from './UserUpsertWithoutDoctorPatientInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutDoctorPatientInputObjectSchema } from './UserUpdateWithoutDoctorPatientInput.schema'
import { UserUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDoctorPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => UserCreateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => UserUncheckedCreateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => UserCreateOrConnectWithoutDoctorPatientInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => UserUpsertWithoutDoctorPatientInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => UserUpdateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => UserUncheckedUpdateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const UserUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema =
	Schema
