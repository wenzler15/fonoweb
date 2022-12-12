import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { JsonFilterObjectSchema } from './JsonFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { SpecialtyRelationFilterObjectSchema } from './SpecialtyRelationFilter.schema'
import { SpecialtyWhereInputObjectSchema } from './SpecialtyWhereInput.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { AnamnesisListRelationFilterObjectSchema } from './AnamnesisListRelationFilter.schema'
import { EvaluationListRelationFilterObjectSchema } from './EvaluationListRelationFilter.schema'
import { DoctorPatientListRelationFilterObjectSchema } from './DoctorPatientListRelationFilter.schema'
import { TemplateListRelationFilterObjectSchema } from './TemplateListRelationFilter.schema'
import { EvolutionListRelationFilterObjectSchema } from './EvolutionListRelationFilter.schema'
import { AppointmentListRelationFilterObjectSchema } from './AppointmentListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DoctorWhereInputObjectSchema),
				z.lazy(() => DoctorWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DoctorWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DoctorWhereInputObjectSchema),
				z.lazy(() => DoctorWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		userId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		crfa: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		availability: z.lazy(() => JsonFilterObjectSchema).optional(),
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
		specialty: z
			.union([
				z.lazy(() => SpecialtyRelationFilterObjectSchema),
				z.lazy(() => SpecialtyWhereInputObjectSchema),
			])
			.optional(),
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
		templates: z.lazy(() => TemplateListRelationFilterObjectSchema).optional(),
		evolutions: z
			.lazy(() => EvolutionListRelationFilterObjectSchema)
			.optional(),
		appointments: z
			.lazy(() => AppointmentListRelationFilterObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorWhereInputObjectSchema = Schema
