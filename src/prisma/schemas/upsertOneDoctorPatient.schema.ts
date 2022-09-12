import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientCreateInputObjectSchema } from './objects/DoctorPatientCreateInput.schema'
import { DoctorPatientUpdateInputObjectSchema } from './objects/DoctorPatientUpdateInput.schema'

export const DoctorPatientUpsertSchema = z.object({
	where: DoctorPatientWhereUniqueInputObjectSchema,
	create: DoctorPatientCreateInputObjectSchema,
	update: DoctorPatientUpdateInputObjectSchema,
})
