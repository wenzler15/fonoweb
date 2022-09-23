import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutSpecialtyInputObjectSchema } from './DoctorCreateWithoutSpecialtyInput.schema'
import { DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutSpecialtyInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
