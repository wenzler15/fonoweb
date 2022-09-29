import { z } from 'zod'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumAppointmentStatusFilter> = z
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
				z.lazy(() => NestedEnumAppointmentStatusFilterObjectSchema),
			])
			.optional(),
	})
	.strict()

export const NestedEnumAppointmentStatusFilterObjectSchema = Schema
