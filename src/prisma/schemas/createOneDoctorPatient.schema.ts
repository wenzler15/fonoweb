import { z } from 'zod'
import { DoctorPatientCreateInputObjectSchema } from './objects/DoctorPatientCreateInput.schema'

export const DoctorPatientCreateOneSchema = z.object({
	data: DoctorPatientCreateInputObjectSchema,
})
