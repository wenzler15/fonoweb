import { z } from 'zod'
import { TemplateUpdateInputObjectSchema } from './objects/TemplateUpdateInput.schema'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'

export const TemplateUpdateOneSchema = z.object({
	data: TemplateUpdateInputObjectSchema,
	where: TemplateWhereUniqueInputObjectSchema,
})
