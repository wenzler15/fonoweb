import { z } from 'zod'
import { DoctorUpdateWithoutEvaluationsInputObjectSchema } from './DoctorUpdateWithoutEvaluationsInput.schema'
import { DoctorUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedUpdateWithoutEvaluationsInput.schema'
import { DoctorCreateWithoutEvaluationsInputObjectSchema } from './DoctorCreateWithoutEvaluationsInput.schema'
import { DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutEvaluationsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutEvaluationsInputObjectSchema = Schema
