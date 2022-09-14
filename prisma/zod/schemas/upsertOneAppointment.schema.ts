import { z } from 'zod'
import { AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema'
import { AppointmentCreateInputObjectSchema } from './objects/AppointmentCreateInput.schema'
import { AppointmentUpdateInputObjectSchema } from './objects/AppointmentUpdateInput.schema'

export const AppointmentUpsertSchema = z.object({
	where: AppointmentWhereUniqueInputObjectSchema,
	create: AppointmentCreateInputObjectSchema,
	update: AppointmentUpdateInputObjectSchema,
})
