import { z } from 'zod'
import { SpecialtyCreateManyInputObjectSchema } from './objects/SpecialtyCreateManyInput.schema'

export const SpecialtyCreateManySchema = z.object({
	data: SpecialtyCreateManyInputObjectSchema,
})
