import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './objects/EvolutionWhereUniqueInput.schema'

export const EvolutionDeleteOneSchema = z.object({
	where: EvolutionWhereUniqueInputObjectSchema,
})
