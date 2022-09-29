import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SpecialtyOrderByWithRelationInputObjectSchema } from './SpecialtyOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { AnamnesisOrderByRelationAggregateInputObjectSchema } from './AnamnesisOrderByRelationAggregateInput.schema'
import { EvaluationOrderByRelationAggregateInputObjectSchema } from './EvaluationOrderByRelationAggregateInput.schema'
import { DoctorPatientOrderByRelationAggregateInputObjectSchema } from './DoctorPatientOrderByRelationAggregateInput.schema'
import { TemplateOrderByRelationAggregateInputObjectSchema } from './TemplateOrderByRelationAggregateInput.schema'
import { EvolutionOrderByRelationAggregateInputObjectSchema } from './EvolutionOrderByRelationAggregateInput.schema'
import { AppointmentOrderByRelationAggregateInputObjectSchema } from './AppointmentOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		specialtyId: z.lazy(() => SortOrderSchema).optional(),
		crfa: z.lazy(() => SortOrderSchema).optional(),
		availability: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		specialty: z
			.lazy(() => SpecialtyOrderByWithRelationInputObjectSchema)
			.optional(),
		user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
		anamnesis: z
			.lazy(() => AnamnesisOrderByRelationAggregateInputObjectSchema)
			.optional(),
		evaluations: z
			.lazy(() => EvaluationOrderByRelationAggregateInputObjectSchema)
			.optional(),
		doctorPatient: z
			.lazy(() => DoctorPatientOrderByRelationAggregateInputObjectSchema)
			.optional(),
		templates: z
			.lazy(() => TemplateOrderByRelationAggregateInputObjectSchema)
			.optional(),
		evolutions: z
			.lazy(() => EvolutionOrderByRelationAggregateInputObjectSchema)
			.optional(),
		appointments: z
			.lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorOrderByWithRelationInputObjectSchema = Schema
