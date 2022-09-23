import { z } from 'zod'
import { PatientUpdateWithoutUserInputObjectSchema } from './PatientUpdateWithoutUserInput.schema'
import { PatientUncheckedUpdateWithoutUserInputObjectSchema } from './PatientUncheckedUpdateWithoutUserInput.schema'
import { PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema'
import { PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutUserInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const PatientUpsertWithoutUserInputObjectSchema = Schema
