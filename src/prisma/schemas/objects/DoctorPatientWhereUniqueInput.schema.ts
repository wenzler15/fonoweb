import { z } from 'zod'
import { DoctorPatientDoctorIdPatientIdCompoundUniqueInputObjectSchema } from './DoctorPatientDoctorIdPatientIdCompoundUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientWhereUniqueInput> = z
	.object({
		doctorId_patientId: z
			.lazy(() => DoctorPatientDoctorIdPatientIdCompoundUniqueInputObjectSchema)
			.optional(),
	})
	.strict()

export const DoctorPatientWhereUniqueInputObjectSchema = Schema
