import { z } from 'zod'
import { DoctorPatientUpdateManyMutationInputObjectSchema } from './objects/DoctorPatientUpdateManyMutationInput.schema'
import { DoctorPatientWhereInputObjectSchema } from './objects/DoctorPatientWhereInput.schema'

export const DoctorPatientUpdateManySchema = z.object({
	data: DoctorPatientUpdateManyMutationInputObjectSchema,
	where: DoctorPatientWhereInputObjectSchema.optional(),
})
