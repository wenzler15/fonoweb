import { z } from 'zod'
import { AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentListRelationFilter> = z
	.object({
		every: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
		some: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
		none: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
	})
	.strict()

export const AppointmentListRelationFilterObjectSchema = Schema
