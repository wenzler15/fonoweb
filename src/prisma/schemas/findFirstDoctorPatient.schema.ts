import { z } from 'zod'
import { DoctorPatientWhereInputObjectSchema } from './objects/DoctorPatientWhereInput.schema'
import { DoctorPatientOrderByWithRelationInputObjectSchema } from './objects/DoctorPatientOrderByWithRelationInput.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientScalarFieldEnumSchema } from './enums/DoctorPatientScalarFieldEnum.schema'

export const DoctorPatientFindFirstSchema = z.object({
	where: DoctorPatientWhereInputObjectSchema.optional(),
	orderBy: DoctorPatientOrderByWithRelationInputObjectSchema.optional(),
	cursor: DoctorPatientWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(DoctorPatientScalarFieldEnumSchema).optional(),
})
