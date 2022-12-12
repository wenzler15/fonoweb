import { z } from 'zod'
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DoctorPatientScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => DoctorPatientScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => DoctorPatientScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DoctorPatientScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => DoctorPatientScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		doctorId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		patientId: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		assignedById: z
			.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		active: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
	})
	.strict()

export const DoctorPatientScalarWhereWithAggregatesInputObjectSchema = Schema
