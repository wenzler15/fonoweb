import { z } from 'zod'
import { DoctorCreateManySpecialtyInputObjectSchema } from './DoctorCreateManySpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => DoctorCreateManySpecialtyInputObjectSchema),
			z.lazy(() => DoctorCreateManySpecialtyInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const DoctorCreateManySpecialtyInputEnvelopeObjectSchema = Schema
