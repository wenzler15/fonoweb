import { z } from 'zod'
import { TemplateWhereInputObjectSchema } from './objects/TemplateWhereInput.schema'
import { TemplateOrderByWithRelationInputObjectSchema } from './objects/TemplateOrderByWithRelationInput.schema'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'
import { TemplateScalarFieldEnumSchema } from './enums/TemplateScalarFieldEnum.schema'

export const TemplateFindManySchema = z.object({
	where: TemplateWhereInputObjectSchema.optional(),
	orderBy: TemplateOrderByWithRelationInputObjectSchema.optional(),
	cursor: TemplateWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(TemplateScalarFieldEnumSchema).optional(),
})
