import { z } from 'zod'
import { DoctorPatientWhereInputObjectSchema } from './objects/DoctorPatientWhereInput.schema'
import { DoctorPatientOrderByWithAggregationInputObjectSchema } from './objects/DoctorPatientOrderByWithAggregationInput.schema'
import { DoctorPatientScalarWhereWithAggregatesInputObjectSchema } from './objects/DoctorPatientScalarWhereWithAggregatesInput.schema'
import { DoctorPatientScalarFieldEnumSchema } from './enums/DoctorPatientScalarFieldEnum.schema'

export const DoctorPatientGroupBySchema = z.object({
	where: DoctorPatientWhereInputObjectSchema.optional(),
	orderBy: DoctorPatientOrderByWithAggregationInputObjectSchema,
	having: DoctorPatientScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(DoctorPatientScalarFieldEnumSchema),
})
