import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema'
import { DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const DoctorCreateOrConnectWithoutUserInputObjectSchema = Schema
