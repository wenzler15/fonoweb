import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { EnumTemplateTypeFilterObjectSchema } from './EnumTemplateTypeFilter.schema'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { DoctorRelationFilterObjectSchema } from './DoctorRelationFilter.schema'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'
import { SpecialtyRelationFilterObjectSchema } from './SpecialtyRelationFilter.schema'
import { SpecialtyWhereInputObjectSchema } from './SpecialtyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => TemplateWhereInputObjectSchema),
				z.lazy(() => TemplateWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => TemplateWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => TemplateWhereInputObjectSchema),
				z.lazy(() => TemplateWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		doctorId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		type: z
			.union([
				z.lazy(() => EnumTemplateTypeFilterObjectSchema),
				z.lazy(() => TemplateTypeSchema),
			])
			.optional(),
		specialtyId: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		title: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		html: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		isActive: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
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

export const TemplateWhereInputObjectSchema = Schema
