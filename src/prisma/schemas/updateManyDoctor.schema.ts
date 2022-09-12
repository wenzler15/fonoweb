import { z } from 'zod'
import { DoctorUpdateManyMutationInputObjectSchema } from './objects/DoctorUpdateManyMutationInput.schema'
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema'

export const DoctorUpdateManySchema = z.object({
	data: DoctorUpdateManyMutationInputObjectSchema,
	where: DoctorWhereInputObjectSchema.optional(),
})
