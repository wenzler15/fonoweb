import { z } from 'zod'
import { UserUpdateWithoutDoctorDataInputObjectSchema } from './UserUpdateWithoutDoctorDataInput.schema'
import { UserUncheckedUpdateWithoutDoctorDataInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorDataInput.schema'
import { UserCreateWithoutDoctorDataInputObjectSchema } from './UserCreateWithoutDoctorDataInput.schema'
import { UserUncheckedCreateWithoutDoctorDataInputObjectSchema } from './UserUncheckedCreateWithoutDoctorDataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutDoctorDataInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutDoctorDataInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutDoctorDataInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutDoctorDataInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutDoctorDataInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutDoctorDataInputObjectSchema = Schema
