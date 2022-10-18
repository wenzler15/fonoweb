import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { AnamnesisOrderByRelationAggregateInputObjectSchema } from './AnamnesisOrderByRelationAggregateInput.schema'
import { EvaluationOrderByRelationAggregateInputObjectSchema } from './EvaluationOrderByRelationAggregateInput.schema'
import { DoctorPatientOrderByRelationAggregateInputObjectSchema } from './DoctorPatientOrderByRelationAggregateInput.schema'
import { EvolutionOrderByRelationAggregateInputObjectSchema } from './EvolutionOrderByRelationAggregateInput.schema'
import { AppointmentOrderByRelationAggregateInputObjectSchema } from './AppointmentOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
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
		evolutions: z
			.lazy(() => EvolutionOrderByRelationAggregateInputObjectSchema)
			.optional(),
		appointment: z
			.lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const PatientOrderByWithRelationInputObjectSchema = Schema
