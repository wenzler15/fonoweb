import { z } from 'zod'
import { DoctorPatientWhereInputObjectSchema } from './objects/DoctorPatientWhereInput.schema'

export const DoctorPatientDeleteManySchema = z.object({
	where: DoctorPatientWhereInputObjectSchema.optional(),
})
