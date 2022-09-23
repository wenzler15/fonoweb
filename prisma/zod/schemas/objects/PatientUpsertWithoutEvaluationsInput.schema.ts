import { z } from 'zod'
import { PatientUpdateWithoutEvaluationsInputObjectSchema } from './PatientUpdateWithoutEvaluationsInput.schema'
import { PatientUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedUpdateWithoutEvaluationsInput.schema'
import { PatientCreateWithoutEvaluationsInputObjectSchema } from './PatientCreateWithoutEvaluationsInput.schema'
import { PatientUncheckedCreateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutEvaluationsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const PatientUpsertWithoutEvaluationsInputObjectSchema = Schema
