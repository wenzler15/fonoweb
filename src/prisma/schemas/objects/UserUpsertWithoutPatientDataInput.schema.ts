import { z } from 'zod'
import { UserUpdateWithoutPatientDataInputObjectSchema } from './UserUpdateWithoutPatientDataInput.schema'
import { UserUncheckedUpdateWithoutPatientDataInputObjectSchema } from './UserUncheckedUpdateWithoutPatientDataInput.schema'
import { UserCreateWithoutPatientDataInputObjectSchema } from './UserCreateWithoutPatientDataInput.schema'
import { UserUncheckedCreateWithoutPatientDataInputObjectSchema } from './UserUncheckedCreateWithoutPatientDataInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutPatientDataInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutPatientDataInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutPatientDataInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutPatientDataInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutPatientDataInputObjectSchema),
		]),
	})
	.strict()

export const UserUpsertWithoutPatientDataInputObjectSchema = Schema
