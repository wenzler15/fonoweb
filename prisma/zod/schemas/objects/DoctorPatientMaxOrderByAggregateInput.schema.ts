import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientMaxOrderByAggregateInput> = z
	.object({
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		assignedById: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict()

export const DoctorPatientMaxOrderByAggregateInputObjectSchema = Schema
