import { z } from 'zod'
import { UserUpdateWithoutDoctorPatientInputObjectSchema } from './UserUpdateWithoutDoctorPatientInput.schema'
import { UserUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorPatientInput.schema'
import { UserCreateWithoutDoctorPatientInputObjectSchema } from './UserCreateWithoutDoctorPatientInput.schema'
import { UserUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './UserUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutDoctorPatientInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutDoctorPatientInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutDoctorPatientInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutDoctorPatientInputObjectSchema = Schema
