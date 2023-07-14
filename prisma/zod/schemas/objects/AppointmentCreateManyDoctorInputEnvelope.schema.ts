import { z } from 'zod'
import { AppointmentCreateManyDoctorInputObjectSchema } from './AppointmentCreateManyDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => AppointmentCreateManyDoctorInputObjectSchema),
			z.lazy(() => AppointmentCreateManyDoctorInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const AppointmentCreateManyDoctorInputEnvelopeObjectSchema = Schema
