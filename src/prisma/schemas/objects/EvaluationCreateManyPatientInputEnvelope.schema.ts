import { z } from 'zod'
import { EvaluationCreateManyPatientInputObjectSchema } from './EvaluationCreateManyPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateManyPatientInputEnvelope> = z
	.object({
		data: z.lazy(() => EvaluationCreateManyPatientInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const EvaluationCreateManyPatientInputEnvelopeObjectSchema = Schema
