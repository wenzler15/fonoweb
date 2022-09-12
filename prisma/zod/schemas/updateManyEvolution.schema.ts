import { z } from 'zod'
import { EvolutionUpdateManyMutationInputObjectSchema } from './objects/EvolutionUpdateManyMutationInput.schema'
import { EvolutionWhereInputObjectSchema } from './objects/EvolutionWhereInput.schema'

export const EvolutionUpdateManySchema = z.object({
	data: EvolutionUpdateManyMutationInputObjectSchema,
	where: EvolutionWhereInputObjectSchema.optional(),
})
