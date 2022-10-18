import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { LessonOrderByWithRelationInputObjectSchema } from './LessonOrderByWithRelationInput.schema'
import { WatchedVideoOrderByRelationAggregateInputObjectSchema } from './WatchedVideoOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		lessonId: z.lazy(() => SortOrderSchema).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		video: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		lesson: z.lazy(() => LessonOrderByWithRelationInputObjectSchema).optional(),
		watched: z
			.lazy(() => WatchedVideoOrderByRelationAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const LessonVideoOrderByWithRelationInputObjectSchema = Schema
