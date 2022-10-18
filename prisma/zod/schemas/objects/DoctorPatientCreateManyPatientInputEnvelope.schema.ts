import { z } from 'zod'
import { DoctorPatientCreateManyPatientInputObjectSchema } from './DoctorPatientCreateManyPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateManyPatientInputEnvelope> = z
	.object({
		data: z.lazy(() => DoctorPatientCreateManyPatientInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const DoctorPatientCreateManyPatientInputEnvelopeObjectSchema = Schema
