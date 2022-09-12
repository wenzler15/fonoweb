import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './objects/PatientWhereUniqueInput.schema'
import { PatientCreateInputObjectSchema } from './objects/PatientCreateInput.schema'
import { PatientUpdateInputObjectSchema } from './objects/PatientUpdateInput.schema'

export const PatientUpsertSchema = z.object({
	where: PatientWhereUniqueInputObjectSchema,
	create: PatientCreateInputObjectSchema,
	update: PatientUpdateInputObjectSchema,
})
