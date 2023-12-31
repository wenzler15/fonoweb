import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema'
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema'
import { SpecialtyOrderByWithRelationInputObjectSchema } from './SpecialtyOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		text: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		patient: z
			.lazy(() => PatientOrderByWithRelationInputObjectSchema)
			.optional(),
		doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
		specialty: z
			.lazy(() => SpecialtyOrderByWithRelationInputObjectSchema)
			.optional(),
	})
	.strict()

export const EvaluationOrderByWithRelationInputObjectSchema = Schema
