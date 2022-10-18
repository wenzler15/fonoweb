import { z } from 'zod'
import { DoctorPatientWhereInputObjectSchema } from './DoctorPatientWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientListRelationFilter> = z
	.object({
		every: z.lazy(() => DoctorPatientWhereInputObjectSchema).optional(),
		some: z.lazy(() => DoctorPatientWhereInputObjectSchema).optional(),
		none: z.lazy(() => DoctorPatientWhereInputObjectSchema).optional(),
	})
	.strict()

export const DoctorPatientListRelationFilterObjectSchema = Schema
