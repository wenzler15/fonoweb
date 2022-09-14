import { z } from 'zod'
import { AppointmentUpdateInputObjectSchema } from './objects/AppointmentUpdateInput.schema'
import { AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema'

export const AppointmentUpdateOneSchema = z.object({
	data: AppointmentUpdateInputObjectSchema,
	where: AppointmentWhereUniqueInputObjectSchema,
})
