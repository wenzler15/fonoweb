import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUncheckedCreateWithoutAssignedByInput> =
	z
		.object({
			doctorId: z.string(),
			patientId: z.string(),
			createdAt: z.date().optional(),
			active: z.boolean().optional(),
		})
		.strict()

export const DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema =
	Schema
