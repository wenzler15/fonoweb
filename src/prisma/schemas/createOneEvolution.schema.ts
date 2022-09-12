import { z } from 'zod'
import { EvolutionCreateInputObjectSchema } from './objects/EvolutionCreateInput.schema'

export const EvolutionCreateOneSchema = z.object({
	data: EvolutionCreateInputObjectSchema,
})
