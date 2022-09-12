import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'

export const DoctorPatientFindUniqueSchema = z.object({
	where: DoctorPatientWhereUniqueInputObjectSchema,
})
