import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { JsonFilterObjectSchema } from './JsonFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { PatientRelationFilterObjectSchema } from './PatientRelationFilter.schema'
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema'
import { DoctorRelationFilterObjectSchema } from './DoctorRelationFilter.schema'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'
import { SpecialtyRelationFilterObjectSchema } from './SpecialtyRelationFilter.schema'
import { SpecialtyWhereInputObjectSchema } from './SpecialtyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AnamnesisWhereInputObjectSchema),
				z.lazy(() => AnamnesisWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => AnamnesisWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AnamnesisWhereInputObjectSchema),
				z.lazy(() => AnamnesisWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		patientId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		doctorId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => UuidFilterObjectSchema), z.string()])
			.optional(),
		questions: z.lazy(() => JsonFilterObjectSchema).optional(),
		title: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		text: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
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
		patient: z
			.union([
				z.lazy(() => PatientRelationFilterObjectSchema),
				z.lazy(() => PatientWhereInputObjectSchema),
			])
			.optional(),
		doctor: z
			.union([
				z.lazy(() => DoctorRelationFilterObjectSchema),
				z.lazy(() => DoctorWhereInputObjectSchema),
			])
			.optional(),
		specialty: z
			.union([
				z.lazy(() => SpecialtyRelationFilterObjectSchema),
				z.lazy(() => SpecialtyWhereInputObjectSchema),
			])
			.optional(),
	})
	.strict()

export const AnamnesisWhereInputObjectSchema = Schema
