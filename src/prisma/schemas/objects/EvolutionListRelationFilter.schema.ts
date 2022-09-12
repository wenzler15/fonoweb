import { z } from 'zod'
import { EvolutionWhereInputObjectSchema } from './EvolutionWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionListRelationFilter> = z
	.object({
		every: z.lazy(() => EvolutionWhereInputObjectSchema).optional(),
		some: z.lazy(() => EvolutionWhereInputObjectSchema).optional(),
		none: z.lazy(() => EvolutionWhereInputObjectSchema).optional(),
	})
	.strict()

export const EvolutionListRelationFilterObjectSchema = Schema
