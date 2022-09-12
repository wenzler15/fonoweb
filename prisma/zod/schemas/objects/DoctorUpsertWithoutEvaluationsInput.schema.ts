import { z } from 'zod'
import { DoctorUpdateWithoutEvaluationsInputObjectSchema } from './DoctorUpdateWithoutEvaluationsInput.schema'
import { DoctorUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedUpdateWithoutEvaluationsInput.schema'
import { DoctorCreateWithoutEvaluationsInputObjectSchema } from './DoctorCreateWithoutEvaluationsInput.schema'
import { DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutEvaluationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => DoctorUpdateWithoutEvaluationsInputObjectSchema),
			z.lazy(() => DoctorUncheckedUpdateWithoutEvaluationsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutEvaluationsInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutEvaluationsInputObjectSchema),
		]),
	})
	.strict()

export const DoctorUpsertWithoutEvaluationsInputObjectSchema = Schema
