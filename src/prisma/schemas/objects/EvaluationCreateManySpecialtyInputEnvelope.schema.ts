import { z } from 'zod'
import { EvaluationCreateManySpecialtyInputObjectSchema } from './EvaluationCreateManySpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.lazy(() => EvaluationCreateManySpecialtyInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const EvaluationCreateManySpecialtyInputEnvelopeObjectSchema = Schema
