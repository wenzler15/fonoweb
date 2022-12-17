import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumAppointmentStatusFilterObjectSchema } from './EnumAppointmentStatusFilter.schema'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AppointmentScalarWhereInputObjectSchema),
				z.lazy(() => AppointmentScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => AppointmentScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AppointmentScalarWhereInputObjectSchema),
				z.lazy(() => AppointmentScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		doctorId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		patientId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		when: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		end: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		deletedAt: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		status: z
			.union([
				z.lazy(() => EnumAppointmentStatusFilterObjectSchema),
				z.lazy(() => AppointmentStatusSchema),
			])
			.optional(),
	})
	.strict()

export const AppointmentScalarWhereInputObjectSchema = Schema
