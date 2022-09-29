import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutDoctorPatientInputObjectSchema } from './UserCreateWithoutDoctorPatientInput.schema'
import { UserUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './UserUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDoctorPatientInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutDoctorPatientInputObjectSchema),
		]),
	})
	.strict()

export const UserCreateOrConnectWithoutDoctorPatientInputObjectSchema = Schema
