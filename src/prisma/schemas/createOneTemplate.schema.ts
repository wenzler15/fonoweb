import { z } from 'zod'
import { TemplateCreateInputObjectSchema } from './objects/TemplateCreateInput.schema'

export const TemplateCreateOneSchema = z.object({
	data: TemplateCreateInputObjectSchema,
})
