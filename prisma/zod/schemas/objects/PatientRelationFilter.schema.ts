import { z } from 'zod'
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientRelationFilter> = z
	.object({
		is: z.lazy(() => PatientWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => PatientWhereInputObjectSchema).optional(),
	})
	.strict()

export const PatientRelationFilterObjectSchema = Schema
