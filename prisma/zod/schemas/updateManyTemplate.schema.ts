import { z } from 'zod'
import { TemplateUpdateManyMutationInputObjectSchema } from './objects/TemplateUpdateManyMutationInput.schema'
import { TemplateWhereInputObjectSchema } from './objects/TemplateWhereInput.schema'

export const TemplateUpdateManySchema = z.object({
	data: TemplateUpdateManyMutationInputObjectSchema,
	where: TemplateWhereInputObjectSchema.optional(),
})
