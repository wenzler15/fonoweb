import { z } from 'zod'
import { UserCreateNestedOneWithoutWatchedInputObjectSchema } from './UserCreateNestedOneWithoutWatchedInput.schema'
import { LessonVideoCreateNestedOneWithoutWatchedInputObjectSchema } from './LessonVideoCreateNestedOneWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutWatchedInputObjectSchema),
		video: z.lazy(
			() => LessonVideoCreateNestedOneWithoutWatchedInputObjectSchema,
		),
	})
	.strict()

export const WatchedVideoCreateInputObjectSchema = Schema
