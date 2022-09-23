import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationCreateWithoutPatientInputObjectSchema } from './EvaluationCreateWithoutPatientInput.schema'
import { EvaluationUncheckedCreateWithoutPatientInputObjectSchema } from './EvaluationUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateOrConnectWithoutPatientInput> = z
	.object({
		where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const EvaluationCreateOrConnectWithoutPatientInputObjectSchema = Schema
