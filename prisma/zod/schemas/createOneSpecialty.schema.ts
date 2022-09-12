import { z } from 'zod'
import { SpecialtyCreateInputObjectSchema } from './objects/SpecialtyCreateInput.schema'

export const SpecialtyCreateOneSchema = z.object({
	data: SpecialtyCreateInputObjectSchema,
})
