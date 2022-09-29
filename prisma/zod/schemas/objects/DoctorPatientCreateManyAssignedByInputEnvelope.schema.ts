import { z } from 'zod'
import { DoctorPatientCreateManyAssignedByInputObjectSchema } from './DoctorPatientCreateManyAssignedByInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateManyAssignedByInputEnvelope> =
	z
		.object({
			data: z
				.lazy(() => DoctorPatientCreateManyAssignedByInputObjectSchema)
				.array(),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export const DoctorPatientCreateManyAssignedByInputEnvelopeObjectSchema = Schema
