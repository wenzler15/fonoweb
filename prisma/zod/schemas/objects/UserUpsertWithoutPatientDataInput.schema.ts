import { z } from 'zod'
import { UserUpdateWithoutPatientDataInputObjectSchema } from './UserUpdateWithoutPatientDataInput.schema'
import { UserUncheckedUpdateWithoutPatientDataInputObjectSchema } from './UserUncheckedUpdateWithoutPatientDataInput.schema'
import { UserCreateWithoutPatientDataInputObjectSchema } from './UserCreateWithoutPatientDataInput.schema'
import { UserUncheckedCreateWithoutPatientDataInputObjectSchema } from './UserUncheckedCreateWithoutPatientDataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutPatientDataInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const UserUpsertWithoutPatientDataInputObjectSchema = Schema
