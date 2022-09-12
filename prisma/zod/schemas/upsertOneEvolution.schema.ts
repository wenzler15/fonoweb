import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './objects/EvolutionWhereUniqueInput.schema'
import { EvolutionCreateInputObjectSchema } from './objects/EvolutionCreateInput.schema'
import { EvolutionUpdateInputObjectSchema } from './objects/EvolutionUpdateInput.schema'

export const EvolutionUpsertSchema = z.object({
	where: EvolutionWhereUniqueInputObjectSchema,
	create: EvolutionCreateInputObjectSchema,
	update: EvolutionUpdateInputObjectSchema,
})
