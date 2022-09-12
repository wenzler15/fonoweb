import { z } from 'zod'
import { PatientCreateInputObjectSchema } from './objects/PatientCreateInput.schema'

export const PatientCreateOneSchema = z.object({
	data: PatientCreateInputObjectSchema,
})
