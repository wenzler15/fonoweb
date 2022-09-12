import { z } from 'zod'
import { SpecialtyWhereInputObjectSchema } from './objects/SpecialtyWhereInput.schema'
import { SpecialtyOrderByWithAggregationInputObjectSchema } from './objects/SpecialtyOrderByWithAggregationInput.schema'
import { SpecialtyScalarWhereWithAggregatesInputObjectSchema } from './objects/SpecialtyScalarWhereWithAggregatesInput.schema'
import { SpecialtyScalarFieldEnumSchema } from './enums/SpecialtyScalarFieldEnum.schema'

export const SpecialtyGroupBySchema = z.object({
	where: SpecialtyWhereInputObjectSchema.optional(),
	orderBy: SpecialtyOrderByWithAggregationInputObjectSchema,
	having: SpecialtyScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(SpecialtyScalarFieldEnumSchema),
})
