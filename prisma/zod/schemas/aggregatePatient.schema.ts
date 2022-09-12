import { z } from 'zod'
import { PatientWhereInputObjectSchema } from './objects/PatientWhereInput.schema'
import { PatientOrderByWithRelationInputObjectSchema } from './objects/PatientOrderByWithRelationInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './objects/PatientWhereUniqueInput.schema'

export const PatientAggregateSchema = z.object({
	where: PatientWhereInputObjectSchema.optional(),
	orderBy: PatientOrderByWithRelationInputObjectSchema.optional(),
	cursor: PatientWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
