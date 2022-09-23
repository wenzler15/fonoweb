import { z } from 'zod'
import { UserUpdateWithoutDoctorDataInputObjectSchema } from './UserUpdateWithoutDoctorDataInput.schema'
import { UserUncheckedUpdateWithoutDoctorDataInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorDataInput.schema'
import { UserCreateWithoutDoctorDataInputObjectSchema } from './UserCreateWithoutDoctorDataInput.schema'
import { UserUncheckedCreateWithoutDoctorDataInputObjectSchema } from './UserUncheckedCreateWithoutDoctorDataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutDoctorDataInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const UserUpsertWithoutDoctorDataInputObjectSchema = Schema
