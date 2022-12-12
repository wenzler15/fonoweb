import { z } from 'zod'
import { UuidFilterObjectSchema } from './UuidFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DoctorListRelationFilterObjectSchema } from './DoctorListRelationFilter.schema'
import { TemplateListRelationFilterObjectSchema } from './TemplateListRelationFilter.schema'
import { EvaluationListRelationFilterObjectSchema } from './EvaluationListRelationFilter.schema'
import { AnamnesisListRelationFilterObjectSchema } from './AnamnesisListRelationFilter.schema'
import { EvolutionListRelationFilterObjectSchema } from './EvolutionListRelationFilter.schema'
import { ExerciseListRelationFilterObjectSchema } from './ExerciseListRelationFilter.schema'
import { CourseListRelationFilterObjectSchema } from './CourseListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SpecialtyWhereInputObjectSchema),
				z.lazy(() => SpecialtyWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => SpecialtyWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SpecialtyWhereInputObjectSchema),
				z.lazy(() => SpecialtyWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		name: z
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
		doctors: z.lazy(() => DoctorListRelationFilterObjectSchema).optional(),
		templates: z.lazy(() => TemplateListRelationFilterObjectSchema).optional(),
		evaluations: z
			.lazy(() => EvaluationListRelationFilterObjectSchema)
			.optional(),
		anamnesis: z.lazy(() => AnamnesisListRelationFilterObjectSchema).optional(),
		evolution: z.lazy(() => EvolutionListRelationFilterObjectSchema).optional(),
		exercise: z.lazy(() => ExerciseListRelationFilterObjectSchema).optional(),
		course: z.lazy(() => CourseListRelationFilterObjectSchema).optional(),
	})
	.strict()

export const SpecialtyWhereInputObjectSchema = Schema
