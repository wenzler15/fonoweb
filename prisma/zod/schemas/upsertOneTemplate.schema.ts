import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'
import { TemplateCreateInputObjectSchema } from './objects/TemplateCreateInput.schema'
import { TemplateUpdateInputObjectSchema } from './objects/TemplateUpdateInput.schema'

export const TemplateUpsertSchema = z.object({
	where: TemplateWhereUniqueInputObjectSchema,
	create: TemplateCreateInputObjectSchema,
	update: TemplateUpdateInputObjectSchema,
})
