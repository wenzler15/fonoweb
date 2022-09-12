import { z } from 'zod'
import { TemplateWhereInputObjectSchema } from './objects/TemplateWhereInput.schema'
import { TemplateOrderByWithAggregationInputObjectSchema } from './objects/TemplateOrderByWithAggregationInput.schema'
import { TemplateScalarWhereWithAggregatesInputObjectSchema } from './objects/TemplateScalarWhereWithAggregatesInput.schema'
import { TemplateScalarFieldEnumSchema } from './enums/TemplateScalarFieldEnum.schema'

export const TemplateGroupBySchema = z.object({
	where: TemplateWhereInputObjectSchema.optional(),
	orderBy: TemplateOrderByWithAggregationInputObjectSchema,
	having: TemplateScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(TemplateScalarFieldEnumSchema),
})
