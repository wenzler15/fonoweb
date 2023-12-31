import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'
import { NestedEnumAppointmentStatusWithAggregatesFilterObjectSchema } from './NestedEnumAppointmentStatusWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumAppointmentStatusFilterObjectSchema } from './NestedEnumAppointmentStatusFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumAppointmentStatusWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => AppointmentStatusSchema).optional(),
		in: z
			.lazy(() => AppointmentStatusSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => AppointmentStatusSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => AppointmentStatusSchema),
				z.lazy(
					() => NestedEnumAppointmentStatusWithAggregatesFilterObjectSchema,
				),
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z
			.lazy(() => NestedEnumAppointmentStatusFilterObjectSchema)
			.optional(),
		_max: z
			.lazy(() => NestedEnumAppointmentStatusFilterObjectSchema)
			.optional(),
	})
	.strict()

export const EnumAppointmentStatusWithAggregatesFilterObjectSchema = Schema
