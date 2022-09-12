import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'

export const TemplateFindUniqueSchema = z.object({
	where: TemplateWhereUniqueInputObjectSchema,
})
