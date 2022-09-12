import { z } from 'zod'
import { TemplateWhereInputObjectSchema } from './objects/TemplateWhereInput.schema'
import { TemplateOrderByWithRelationInputObjectSchema } from './objects/TemplateOrderByWithRelationInput.schema'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'

export const TemplateAggregateSchema = z.object({
	where: TemplateWhereInputObjectSchema.optional(),
	orderBy: TemplateOrderByWithRelationInputObjectSchema.optional(),
	cursor: TemplateWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
