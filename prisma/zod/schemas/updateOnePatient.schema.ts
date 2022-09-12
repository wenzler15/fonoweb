import { z } from 'zod'
import { PatientUpdateInputObjectSchema } from './objects/PatientUpdateInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './objects/PatientWhereUniqueInput.schema'

export const PatientUpdateOneSchema = z.object({
	data: PatientUpdateInputObjectSchema,
	where: PatientWhereUniqueInputObjectSchema,
})
