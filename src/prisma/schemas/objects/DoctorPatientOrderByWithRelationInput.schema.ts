import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema'
import { PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientOrderByWithRelationInput> = z
	.object({
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		assignedById: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
		patient: z
			.lazy(() => PatientOrderByWithRelationInputObjectSchema)
			.optional(),
		assignedBy: z
			.lazy(() => UserOrderByWithRelationInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorPatientOrderByWithRelationInputObjectSchema = Schema
