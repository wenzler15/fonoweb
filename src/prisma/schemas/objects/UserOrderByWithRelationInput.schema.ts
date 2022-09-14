import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema'
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema'
import { UserAdressOrderByRelationAggregateInputObjectSchema } from './UserAdressOrderByRelationAggregateInput.schema'
import { UserContactOrderByRelationAggregateInputObjectSchema } from './UserContactOrderByRelationAggregateInput.schema'
import { DoctorPatientOrderByRelationAggregateInputObjectSchema } from './DoctorPatientOrderByRelationAggregateInput.schema'
import { ExerciseOrderByRelationAggregateInputObjectSchema } from './ExerciseOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		numericId: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		gender: z.lazy(() => SortOrderSchema).optional(),
		cpf: z.lazy(() => SortOrderSchema).optional(),
		birthDate: z.lazy(() => SortOrderSchema).optional(),
		password: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		avatar: z.lazy(() => SortOrderSchema).optional(),
		facebookToken: z.lazy(() => SortOrderSchema).optional(),
		passwordResetToken: z.lazy(() => SortOrderSchema).optional(),
		passwordResetExpires: z.lazy(() => SortOrderSchema).optional(),
		isAdmin: z.lazy(() => SortOrderSchema).optional(),
		isActive: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		deletedAt: z.lazy(() => SortOrderSchema).optional(),
		patientData: z
			.lazy(() => PatientOrderByWithRelationInputObjectSchema)
			.optional(),
		doctorData: z
			.lazy(() => DoctorOrderByWithRelationInputObjectSchema)
			.optional(),
		addresses: z
			.lazy(() => UserAdressOrderByRelationAggregateInputObjectSchema)
			.optional(),
		contacts: z
			.lazy(() => UserContactOrderByRelationAggregateInputObjectSchema)
			.optional(),
		DoctorPatient: z
			.lazy(() => DoctorPatientOrderByRelationAggregateInputObjectSchema)
			.optional(),
		exercises: z
			.lazy(() => ExerciseOrderByRelationAggregateInputObjectSchema)
			.optional(),
	})
	.strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
