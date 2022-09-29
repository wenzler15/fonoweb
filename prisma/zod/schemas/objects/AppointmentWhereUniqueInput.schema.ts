import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentWhereUniqueInput> = z
	.object({
		id: z.string().optional(),
	})
	.strict()

export const AppointmentWhereUniqueInputObjectSchema = Schema
