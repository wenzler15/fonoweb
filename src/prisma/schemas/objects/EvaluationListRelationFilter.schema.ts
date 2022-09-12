import { z } from 'zod'
import { EvaluationWhereInputObjectSchema } from './EvaluationWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationListRelationFilter> = z
	.object({
		every: z.lazy(() => EvaluationWhereInputObjectSchema).optional(),
		some: z.lazy(() => EvaluationWhereInputObjectSchema).optional(),
		none: z.lazy(() => EvaluationWhereInputObjectSchema).optional(),
	})
	.strict()

export const EvaluationListRelationFilterObjectSchema = Schema
