import { z } from 'zod'
import { AppointmentCreateManyPatientInputObjectSchema } from './AppointmentCreateManyPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateManyPatientInputEnvelope> = z
	.object({
		data: z.lazy(() => AppointmentCreateManyPatientInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const AppointmentCreateManyPatientInputEnvelopeObjectSchema = Schema
