import { z } from 'zod'
import { EvolutionUpdateInputObjectSchema } from './objects/EvolutionUpdateInput.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './objects/EvolutionWhereUniqueInput.schema'

export const EvolutionUpdateOneSchema = z.object({
	data: EvolutionUpdateInputObjectSchema,
	where: EvolutionWhereUniqueInputObjectSchema,
})
