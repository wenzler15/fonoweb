import { z } from 'zod'
import { DoctorPatientCreateManyDoctorInputObjectSchema } from './DoctorPatientCreateManyDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.lazy(() => DoctorPatientCreateManyDoctorInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const DoctorPatientCreateManyDoctorInputEnvelopeObjectSchema = Schema
