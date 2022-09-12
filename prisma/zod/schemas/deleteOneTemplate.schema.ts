import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'

export const TemplateDeleteOneSchema = z.object({
	where: TemplateWhereUniqueInputObjectSchema,
})
