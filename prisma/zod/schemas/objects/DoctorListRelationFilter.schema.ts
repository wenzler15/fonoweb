import { z } from 'zod'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorListRelationFilter> = z
	.object({
		every: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
		some: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
		none: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
	})
	.strict()

export const DoctorListRelationFilterObjectSchema = Schema
