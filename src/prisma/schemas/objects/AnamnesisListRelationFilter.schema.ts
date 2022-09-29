import { z } from 'zod'
import { AnamnesisWhereInputObjectSchema } from './AnamnesisWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisListRelationFilter> = z
	.object({
		every: z.lazy(() => AnamnesisWhereInputObjectSchema).optional(),
		some: z.lazy(() => AnamnesisWhereInputObjectSchema).optional(),
		none: z.lazy(() => AnamnesisWhereInputObjectSchema).optional(),
	})
	.strict()

export const AnamnesisListRelationFilterObjectSchema = Schema
