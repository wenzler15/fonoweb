import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './objects/EvolutionWhereUniqueInput.schema'

export const EvolutionFindUniqueSchema = z.object({
	where: EvolutionWhereUniqueInputObjectSchema,
})
