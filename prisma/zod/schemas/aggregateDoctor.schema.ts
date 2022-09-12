import { z } from 'zod'
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema'
import { DoctorOrderByWithRelationInputObjectSchema } from './objects/DoctorOrderByWithRelationInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema'

export const DoctorAggregateSchema = z.object({
	where: DoctorWhereInputObjectSchema.optional(),
	orderBy: DoctorOrderByWithRelationInputObjectSchema.optional(),
	cursor: DoctorWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
