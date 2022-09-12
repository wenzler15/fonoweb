import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema'

export const DoctorDeleteOneSchema = z.object({
	where: DoctorWhereUniqueInputObjectSchema,
})
