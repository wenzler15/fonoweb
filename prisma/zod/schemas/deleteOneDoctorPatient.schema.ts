import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'

export const DoctorPatientDeleteOneSchema = z.object({
	where: DoctorPatientWhereUniqueInputObjectSchema,
})
