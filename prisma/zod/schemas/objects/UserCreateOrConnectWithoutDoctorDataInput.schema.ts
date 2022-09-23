import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutDoctorDataInputObjectSchema } from './UserCreateWithoutDoctorDataInput.schema'
import { UserUncheckedCreateWithoutDoctorDataInputObjectSchema } from './UserUncheckedCreateWithoutDoctorDataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDoctorDataInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const UserCreateOrConnectWithoutDoctorDataInputObjectSchema = Schema
