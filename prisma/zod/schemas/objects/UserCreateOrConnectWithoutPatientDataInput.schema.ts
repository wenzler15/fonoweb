import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutPatientDataInputObjectSchema } from './UserCreateWithoutPatientDataInput.schema'
import { UserUncheckedCreateWithoutPatientDataInputObjectSchema } from './UserUncheckedCreateWithoutPatientDataInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPatientDataInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const UserCreateOrConnectWithoutPatientDataInputObjectSchema = Schema
