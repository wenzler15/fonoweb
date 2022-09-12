import { z } from 'zod'
import { DoctorPatientWhereInputObjectSchema } from './objects/DoctorPatientWhereInput.schema'
import { DoctorPatientOrderByWithRelationInputObjectSchema } from './objects/DoctorPatientOrderByWithRelationInput.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'

export const DoctorPatientAggregateSchema = z.object({
	where: DoctorPatientWhereInputObjectSchema.optional(),
	orderBy: DoctorPatientOrderByWithRelationInputObjectSchema.optional(),
	cursor: DoctorPatientWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
