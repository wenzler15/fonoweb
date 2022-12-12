import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DoctorPatientScalarWhereInputObjectSchema),
				z.lazy(() => DoctorPatientScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DoctorPatientScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DoctorPatientScalarWhereInputObjectSchema),
				z.lazy(() => DoctorPatientScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		doctorId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		patientId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		assignedById: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		active: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
	})
	.strict()

export const DoctorPatientScalarWhereInputObjectSchema = Schema
