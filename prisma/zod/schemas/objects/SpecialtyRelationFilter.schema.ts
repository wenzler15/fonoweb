import { z } from 'zod'
import { SpecialtyWhereInputObjectSchema } from './SpecialtyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyRelationFilter> = z
	.object({
		is: z.lazy(() => SpecialtyWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => SpecialtyWhereInputObjectSchema).optional(),
	})
	.strict()

export const SpecialtyRelationFilterObjectSchema = Schema
