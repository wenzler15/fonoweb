import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientMinAggregateInputType> = z
	.object({
		doctorId: z.literal(true).optional(),
		patientId: z.literal(true).optional(),
		assignedById: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		active: z.literal(true).optional(),
	})
	.strict()

export const DoctorPatientMinAggregateInputObjectSchema = Schema
