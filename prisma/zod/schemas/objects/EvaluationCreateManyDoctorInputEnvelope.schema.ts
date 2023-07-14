import { z } from 'zod'
import { EvaluationCreateManyDoctorInputObjectSchema } from './EvaluationCreateManyDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => EvaluationCreateManyDoctorInputObjectSchema),
			z.lazy(() => EvaluationCreateManyDoctorInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const EvaluationCreateManyDoctorInputEnvelopeObjectSchema = Schema
