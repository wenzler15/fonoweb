import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutEvaluationsInputObjectSchema } from './PatientCreateWithoutEvaluationsInput.schema'
import { PatientUncheckedCreateWithoutEvaluationsInputObjectSchema } from './PatientUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutEvaluationsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutEvaluationsInputObjectSchema),
				z.lazy(() => PatientUncheckedCreateWithoutEvaluationsInputObjectSchema),
			]),
		})
		.strict()

export const PatientCreateOrConnectWithoutEvaluationsInputObjectSchema = Schema
