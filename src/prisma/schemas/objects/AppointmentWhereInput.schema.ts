import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumAppointmentStatusFilterObjectSchema } from './EnumAppointmentStatusFilter.schema'
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'
import { DoctorRelationFilterObjectSchema } from './DoctorRelationFilter.schema'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'
import { PatientRelationFilterObjectSchema } from './PatientRelationFilter.schema'
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AppointmentWhereInputObjectSchema),
				z.lazy(() => AppointmentWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => AppointmentWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AppointmentWhereInputObjectSchema),
				z.lazy(() => AppointmentWhereInputObjectSchema).array(),
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
		doctor: z
			.union([
				z.lazy(() => DoctorRelationFilterObjectSchema),
				z.lazy(() => DoctorWhereInputObjectSchema),
			])
			.optional()
			.nullable(),
		patient: z
			.union([
				z.lazy(() => PatientRelationFilterObjectSchema),
				z.lazy(() => PatientWhereInputObjectSchema),
			])
			.optional()
			.nullable(),
	})
	.strict()

export const AppointmentWhereInputObjectSchema = Schema
