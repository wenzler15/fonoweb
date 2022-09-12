import { z } from 'zod'
import { TemplateCreateManyInputObjectSchema } from './objects/TemplateCreateManyInput.schema'

export const TemplateCreateManySchema = z.object({
	data: TemplateCreateManyInputObjectSchema,
})
