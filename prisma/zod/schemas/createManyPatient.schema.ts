import { z } from 'zod'
import { PatientCreateManyInputObjectSchema } from './objects/PatientCreateManyInput.schema'

export const PatientCreateManySchema = z.object({
	data: PatientCreateManyInputObjectSchema,
})
