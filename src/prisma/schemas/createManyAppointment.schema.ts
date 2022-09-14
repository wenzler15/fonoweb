import { z } from 'zod'
import { AppointmentCreateManyInputObjectSchema } from './objects/AppointmentCreateManyInput.schema'

export const AppointmentCreateManySchema = z.object({
	data: AppointmentCreateManyInputObjectSchema,
})
