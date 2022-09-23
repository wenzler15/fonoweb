import { z } from 'zod'
import { DoctorUpdateWithoutUserInputObjectSchema } from './DoctorUpdateWithoutUserInput.schema'
import { DoctorUncheckedUpdateWithoutUserInputObjectSchema } from './DoctorUncheckedUpdateWithoutUserInput.schema'
import { DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema'
import { DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutUserInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutUserInputObjectSchema = Schema
