import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DoctorOrderByRelationAggregateInputObjectSchema } from './DoctorOrderByRelationAggregateInput.schema'
import { TemplateOrderByRelationAggregateInputObjectSchema } from './TemplateOrderByRelationAggregateInput.schema'
import { EvaluationOrderByRelationAggregateInputObjectSchema } from './EvaluationOrderByRelationAggregateInput.schema'
import { AnamnesisOrderByRelationAggregateInputObjectSchema } from './AnamnesisOrderByRelationAggregateInput.schema'
import { EvolutionOrderByRelationAggregateInputObjectSchema } from './EvolutionOrderByRelationAggregateInput.schema'
import { ExerciseOrderByRelationAggregateInputObjectSchema } from './ExerciseOrderByRelationAggregateInput.schema'
import { CourseOrderByRelationAggregateInputObjectSchema } from './CourseOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		doctors: z
			.lazy(() => DoctorOrderByRelationAggregateInputObjectSchema)
			.optional(),
		templates: z
			.lazy(() => TemplateOrderByRelationAggregateInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationOrderByRelationAggregateInputObjectSchema)
			.optional(),
		anamnesis: z
			.lazy(() => AnamnesisOrderByRelationAggregateInputObjectSchema)
			.optional(),
		evolution: z
			.lazy(() => EvolutionOrderByRelationAggregateInputObjectSchema)
			.optional(),
		exercise: z
			.lazy(() => ExerciseOrderByRelationAggregateInputObjectSchema)
			.optional(),
		course: z
			.lazy(() => CourseOrderByRelationAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const SpecialtyOrderByWithRelationInputObjectSchema = Schema
