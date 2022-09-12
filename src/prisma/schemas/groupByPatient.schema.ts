import { z } from 'zod'
import { PatientWhereInputObjectSchema } from './objects/PatientWhereInput.schema'
import { PatientOrderByWithAggregationInputObjectSchema } from './objects/PatientOrderByWithAggregationInput.schema'
import { PatientScalarWhereWithAggregatesInputObjectSchema } from './objects/PatientScalarWhereWithAggregatesInput.schema'
import { PatientScalarFieldEnumSchema } from './enums/PatientScalarFieldEnum.schema'

export const PatientGroupBySchema = z.object({
	where: PatientWhereInputObjectSchema.optional(),
	orderBy: PatientOrderByWithAggregationInputObjectSchema,
	having: PatientScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(PatientScalarFieldEnumSchema),
})
