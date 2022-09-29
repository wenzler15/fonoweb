import { z } from 'zod'
import { AppointmentCreateManyDoctorInputObjectSchema } from './AppointmentCreateManyDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.lazy(() => AppointmentCreateManyDoctorInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const AppointmentCreateManyDoctorInputEnvelopeObjectSchema = Schema
