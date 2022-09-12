import { z } from 'zod'
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema'

export const DoctorDeleteManySchema = z.object({
	where: DoctorWhereInputObjectSchema.optional(),
})
