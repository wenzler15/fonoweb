import { z } from 'zod'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorRelationFilter> = z
	.object({
		is: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
	})
	.strict()

export const DoctorRelationFilterObjectSchema = Schema
