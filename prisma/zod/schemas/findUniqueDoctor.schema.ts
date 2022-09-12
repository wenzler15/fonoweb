import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema'

export const DoctorFindUniqueSchema = z.object({
	where: DoctorWhereUniqueInputObjectSchema,
})
