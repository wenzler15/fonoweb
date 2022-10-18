import { z } from 'zod'
import { LessonVideoCreateNestedOneWithoutWatchedInputObjectSchema } from './LessonVideoCreateNestedOneWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateWithoutUserInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		video: z.lazy(
			() => LessonVideoCreateNestedOneWithoutWatchedInputObjectSchema,
		),
	})
	.strict()

export const WatchedVideoCreateWithoutUserInputObjectSchema = Schema
