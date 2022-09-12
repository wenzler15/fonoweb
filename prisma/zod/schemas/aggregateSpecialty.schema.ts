import { z } from 'zod'
import { SpecialtyWhereInputObjectSchema } from './objects/SpecialtyWhereInput.schema'
import { SpecialtyOrderByWithRelationInputObjectSchema } from './objects/SpecialtyOrderByWithRelationInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './objects/SpecialtyWhereUniqueInput.schema'

export const SpecialtyAggregateSchema = z.object({
	where: SpecialtyWhereInputObjectSchema.optional(),
	orderBy: SpecialtyOrderByWithRelationInputObjectSchema.optional(),
	cursor: SpecialtyWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
