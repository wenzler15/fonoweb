import { z } from 'zod'
import { DoctorPatientUpdateInputObjectSchema } from './objects/DoctorPatientUpdateInput.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'

export const DoctorPatientUpdateOneSchema = z.object({
	data: DoctorPatientUpdateInputObjectSchema,
	where: DoctorPatientWhereUniqueInputObjectSchema,
})
