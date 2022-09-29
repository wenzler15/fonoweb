import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientDoctorIdPatientIdCompoundUniqueInput> =
	z
		.object({
			doctorId: z.string(),
			patientId: z.string(),
		})
		.strict()

export const DoctorPatientDoctorIdPatientIdCompoundUniqueInputObjectSchema =
	Schema
