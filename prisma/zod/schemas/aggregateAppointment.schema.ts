import { z } from 'zod'
import { AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema'
import { AppointmentOrderByWithRelationInputObjectSchema } from './objects/AppointmentOrderByWithRelationInput.schema'
import { AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema'

export const AppointmentAggregateSchema = z.object({
	where: AppointmentWhereInputObjectSchema.optional(),
	orderBy: AppointmentOrderByWithRelationInputObjectSchema.optional(),
	cursor: AppointmentWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
