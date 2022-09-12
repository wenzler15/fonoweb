import { z } from 'zod'
import { EvolutionWhereInputObjectSchema } from './objects/EvolutionWhereInput.schema'

export const EvolutionDeleteManySchema = z.object({
	where: EvolutionWhereInputObjectSchema.optional(),
})
