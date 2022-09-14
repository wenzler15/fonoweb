import { z } from 'zod'
import { AppointmentCreateInputObjectSchema } from './objects/AppointmentCreateInput.schema'

export const AppointmentCreateOneSchema = z.object({
	data: AppointmentCreateInputObjectSchema,
})
