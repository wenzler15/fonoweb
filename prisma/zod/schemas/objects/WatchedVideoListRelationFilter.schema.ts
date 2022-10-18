import { z } from 'zod'
import { WatchedVideoWhereInputObjectSchema } from './WatchedVideoWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoListRelationFilter> = z
	.object({
		every: z.lazy(() => WatchedVideoWhereInputObjectSchema).optional(),
		some: z.lazy(() => WatchedVideoWhereInputObjectSchema).optional(),
		none: z.lazy(() => WatchedVideoWhereInputObjectSchema).optional(),
	})
	.strict()

export const WatchedVideoListRelationFilterObjectSchema = Schema
