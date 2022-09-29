import { z } from 'zod'
import { PatientUpdateWithoutEvaluationsInputObjectSchema } from './PatientUpdateWithoutEvaluationsInput.schema'
import { PatientUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedUpdateWithoutEvaluationsInput.schema'
import { PatientCreateWithoutEvaluationsInputObjectSchema } from './PatientCreateWithoutEvaluationsInput.schema'
import { PatientUncheckedCreateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutEvaluationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => PatientUpdateWithoutEvaluationsInputObjectSchema),
			z.lazy(() => PatientUncheckedUpdateWithoutEvaluationsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => PatientCreateWithoutEvaluationsInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutEvaluationsInputObjectSchema),
		]),
	})
	.strict()

export const PatientUpsertWithoutEvaluationsInputObjectSchema = Schema
