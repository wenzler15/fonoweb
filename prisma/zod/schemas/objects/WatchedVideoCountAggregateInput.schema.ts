import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		videoId: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		deletedAt: z.literal(true).optional(),
		_all: z.literal(true).optional(),
	})
	.strict()

export const WatchedVideoCountAggregateInputObjectSchema = Schema
