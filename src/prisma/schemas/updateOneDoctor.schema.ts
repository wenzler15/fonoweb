import { z } from 'zod'
import { DoctorUpdateInputObjectSchema } from './objects/DoctorUpdateInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema'

export const DoctorUpdateOneSchema = z.object({
	data: DoctorUpdateInputObjectSchema,
	where: DoctorWhereUniqueInputObjectSchema,
})
