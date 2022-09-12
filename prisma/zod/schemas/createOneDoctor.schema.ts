import { z } from 'zod'
import { DoctorCreateInputObjectSchema } from './objects/DoctorCreateInput.schema'

export const DoctorCreateOneSchema = z.object({
	data: DoctorCreateInputObjectSchema,
})
