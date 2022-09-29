import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientWhereUniqueInput> = z
	.object({
		id: z.string().optional(),
		userId: z.string().optional(),
	})
	.strict()

export const PatientWhereUniqueInputObjectSchema = Schema
