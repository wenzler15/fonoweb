import { z } from 'zod'
import { DoctorPatientCreateManyInputObjectSchema } from './objects/DoctorPatientCreateManyInput.schema'

export const DoctorPatientCreateManySchema = z.object({
	data: DoctorPatientCreateManyInputObjectSchema,
})
