import { z } from 'zod'
import { TemplateWhereInputObjectSchema } from './objects/TemplateWhereInput.schema'

export const TemplateDeleteManySchema = z.object({
	where: TemplateWhereInputObjectSchema.optional(),
})
