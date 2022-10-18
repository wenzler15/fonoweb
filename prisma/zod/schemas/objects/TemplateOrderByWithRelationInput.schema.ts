import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema'
import { SpecialtyOrderByWithRelationInputObjectSchema } from './SpecialtyOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		html: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
		specialty: z
			.lazy(() => SpecialtyOrderByWithRelationInputObjectSchema)
			.optional(),
	})
	.strict()

export const TemplateOrderByWithRelationInputObjectSchema = Schema
