import { z } from 'zod'
import { EvolutionCreateManyInputObjectSchema } from './objects/EvolutionCreateManyInput.schema'

export const EvolutionCreateManySchema = z.object({
	data: EvolutionCreateManyInputObjectSchema,
})
