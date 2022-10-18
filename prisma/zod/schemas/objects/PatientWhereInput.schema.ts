import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { AnamnesisListRelationFilterObjectSchema } from './AnamnesisListRelationFilter.schema'
import { EvaluationListRelationFilterObjectSchema } from './EvaluationListRelationFilter.schema'
import { DoctorPatientListRelationFilterObjectSchema } from './DoctorPatientListRelationFilter.schema'
import { EvolutionListRelationFilterObjectSchema } from './EvolutionListRelationFilter.schema'
import { AppointmentListRelationFilterObjectSchema } from './AppointmentListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PatientWhereInputObjectSchema),
				z.lazy(() => PatientWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => PatientWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PatientWhereInputObjectSchema),
				z.lazy(() => PatientWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		userId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
		user: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema),
			])
			.optional(),
		anamnesis: z.lazy(() => AnamnesisListRelationFilterObjectSchema).optional(),
		evaluations: z
			.lazy(() => EvaluationListRelationFilterObjectSchema)
			.optional(),
		doctorPatient: z
			.lazy(() => DoctorPatientListRelationFilterObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionListRelationFilterObjectSchema)
			.optional(),
		appointment: z
			.lazy(() => AppointmentListRelationFilterObjectSchema)
			.optional(),
	})
	.strict()

export const PatientWhereInputObjectSchema = Schema
