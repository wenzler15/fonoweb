import { z } from 'zod'
import { PatientWhereInputObjectSchema } from './objects/PatientWhereInput.schema'
import { PatientOrderByWithRelationInputObjectSchema } from './objects/PatientOrderByWithRelationInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './objects/PatientWhereUniqueInput.schema'
import { PatientScalarFieldEnumSchema } from './enums/PatientScalarFieldEnum.schema'

export const PatientFindFirstSchema = z.object({
	where: PatientWhereInputObjectSchema.optional(),
	orderBy: PatientOrderByWithRelationInputObjectSchema.optional(),
	cursor: PatientWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(PatientScalarFieldEnumSchema).optional(),
})
