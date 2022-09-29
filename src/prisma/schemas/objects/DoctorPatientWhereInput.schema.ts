import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DoctorRelationFilterObjectSchema } from './DoctorRelationFilter.schema'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'
import { PatientRelationFilterObjectSchema } from './PatientRelationFilter.schema'
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DoctorPatientWhereInputObjectSchema),
				z.lazy(() => DoctorPatientWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DoctorPatientWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DoctorPatientWhereInputObjectSchema),
				z.lazy(() => DoctorPatientWhereInputObjectSchema).array(),
			])
			.optional(),
		doctorId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		patientId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		assignedById: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		active: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		doctor: z
			.union([
				z.lazy(() => DoctorRelationFilterObjectSchema),
				z.lazy(() => DoctorWhereInputObjectSchema),
			])
			.optional(),
		patient: z
			.union([
				z.lazy(() => PatientRelationFilterObjectSchema),
				z.lazy(() => PatientWhereInputObjectSchema),
			])
			.optional(),
		assignedBy: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema),
			])
			.optional(),
	})
	.strict()

export const DoctorPatientWhereInputObjectSchema = Schema
