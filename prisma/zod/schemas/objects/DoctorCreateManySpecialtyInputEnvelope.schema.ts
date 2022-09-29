import { z } from 'zod'
import { DoctorCreateManySpecialtyInputObjectSchema } from './DoctorCreateManySpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.lazy(() => DoctorCreateManySpecialtyInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const DoctorCreateManySpecialtyInputEnvelopeObjectSchema = Schema
