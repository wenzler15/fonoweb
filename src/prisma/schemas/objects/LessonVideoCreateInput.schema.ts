import { z } from 'zod'
import { LessonCreateNestedOneWithoutVideosInputObjectSchema } from './LessonCreateNestedOneWithoutVideosInput.schema'
import { WatchedVideoCreateNestedManyWithoutVideoInputObjectSchema } from './WatchedVideoCreateNestedManyWithoutVideoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		order: z.number().optional(),
		title: z.string(),
		video: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		lesson: z.lazy(() => LessonCreateNestedOneWithoutVideosInputObjectSchema),
		watched: z
			.lazy(() => WatchedVideoCreateNestedManyWithoutVideoInputObjectSchema)
			.optional(),
	})
	.strict()

export const LessonVideoCreateInputObjectSchema = Schema
