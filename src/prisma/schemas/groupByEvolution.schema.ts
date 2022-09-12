import { z } from 'zod'
import { EvolutionWhereInputObjectSchema } from './objects/EvolutionWhereInput.schema'
import { EvolutionOrderByWithAggregationInputObjectSchema } from './objects/EvolutionOrderByWithAggregationInput.schema'
import { EvolutionScalarWhereWithAggregatesInputObjectSchema } from './objects/EvolutionScalarWhereWithAggregatesInput.schema'
import { EvolutionScalarFieldEnumSchema } from './enums/EvolutionScalarFieldEnum.schema'

export const EvolutionGroupBySchema = z.object({
	where: EvolutionWhereInputObjectSchema.optional(),
	orderBy: EvolutionOrderByWithAggregationInputObjectSchema,
	having: EvolutionScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(EvolutionScalarFieldEnumSchema),
})
