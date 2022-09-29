import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DoctorPatientCountOrderByAggregateInputObjectSchema } from './DoctorPatientCountOrderByAggregateInput.schema'
import { DoctorPatientMaxOrderByAggregateInputObjectSchema } from './DoctorPatientMaxOrderByAggregateInput.schema'
import { DoctorPatientMinOrderByAggregateInputObjectSchema } from './DoctorPatientMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientOrderByWithAggregationInput> = z
	.object({
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		assignedById: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => DoctorPatientCountOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => DoctorPatientMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => DoctorPatientMinOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorPatientOrderByWithAggregationInputObjectSchema = Schema
