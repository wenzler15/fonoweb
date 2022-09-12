import { z } from 'zod'
import { EvolutionWhereInputObjectSchema } from './objects/EvolutionWhereInput.schema'
import { EvolutionOrderByWithRelationInputObjectSchema } from './objects/EvolutionOrderByWithRelationInput.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './objects/EvolutionWhereUniqueInput.schema'
import { EvolutionScalarFieldEnumSchema } from './enums/EvolutionScalarFieldEnum.schema'

export const EvolutionFindFirstSchema = z.object({
	where: EvolutionWhereInputObjectSchema.optional(),
	orderBy: EvolutionOrderByWithRelationInputObjectSchema.optional(),
	cursor: EvolutionWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(EvolutionScalarFieldEnumSchema).optional(),
})
