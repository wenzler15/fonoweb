import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateManyUserInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		videoId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const WatchedVideoCreateManyUserInputObjectSchema = Schema
