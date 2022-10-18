import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AppointmentCountOrderByAggregateInputObjectSchema } from './AppointmentCountOrderByAggregateInput.schema'
import { AppointmentAvgOrderByAggregateInputObjectSchema } from './AppointmentAvgOrderByAggregateInput.schema'
import { AppointmentMaxOrderByAggregateInputObjectSchema } from './AppointmentMaxOrderByAggregateInput.schema'
import { AppointmentMinOrderByAggregateInputObjectSchema } from './AppointmentMinOrderByAggregateInput.schema'
import { AppointmentSumOrderByAggregateInputObjectSchema } from './AppointmentSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		doctorId: z.lazy(() => SortOrderSchema).optional(),
		patientId: z.lazy(() => SortOrderSchema).optional(),
		when: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		_count: z
			.lazy(() => AppointmentCountOrderByAggregateInputObjectSchema)
			.optional(),
		_avg: z
			.lazy(() => AppointmentAvgOrderByAggregateInputObjectSchema)
			.optional(),
		_max: z
			.lazy(() => AppointmentMaxOrderByAggregateInputObjectSchema)
			.optional(),
		_min: z
			.lazy(() => AppointmentMinOrderByAggregateInputObjectSchema)
			.optional(),
		_sum: z
			.lazy(() => AppointmentSumOrderByAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const AppointmentOrderByWithAggregationInputObjectSchema = Schema
