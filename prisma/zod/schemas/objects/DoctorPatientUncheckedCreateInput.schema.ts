import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUncheckedCreateInput> = z
	.object({
		doctorId: z.string(),
		patientId: z.string(),
		assignedById: z.string(),
		createdAt: z.date().optional(),
		active: z.boolean().optional(),
	})
	.strict()

export const DoctorPatientUncheckedCreateInputObjectSchema = Schema
