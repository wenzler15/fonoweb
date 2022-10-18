import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { SpecialtyOrderByWithRelationInputObjectSchema } from './SpecialtyOrderByWithRelationInput.schema'
import { LessonOrderByRelationAggregateInputObjectSchema } from './LessonOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		creatorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		order: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		cover: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		creator: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
		specialty: z
			.lazy(() => SpecialtyOrderByWithRelationInputObjectSchema)
			.optional(),
		lessons: z
			.lazy(() => LessonOrderByRelationAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const CourseOrderByWithRelationInputObjectSchema = Schema
