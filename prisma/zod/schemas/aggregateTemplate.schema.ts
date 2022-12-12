import { z } from 'zod'
import { TemplateWhereInputObjectSchema } from './objects/TemplateWhereInput.schema'
import { TemplateOrderByWithRelationInputObjectSchema } from './objects/TemplateOrderByWithRelationInput.schema'
import { TemplateWhereUniqueInputObjectSchema } from './objects/TemplateWhereUniqueInput.schema'
import { TemplateCountAggregateInputObjectSchema } from './objects/TemplateCountAggregateInput.schema'
import { TemplateMinAggregateInputObjectSchema } from './objects/TemplateMinAggregateInput.schema'
import { TemplateMaxAggregateInputObjectSchema } from './objects/TemplateMaxAggregateInput.schema'
import { TemplateAvgAggregateInputObjectSchema } from './objects/TemplateAvgAggregateInput.schema'
import { TemplateSumAggregateInputObjectSchema } from './objects/TemplateSumAggregateInput.schema'

export const TemplateAggregateSchema = z.object({
	where: TemplateWhereInputObjectSchema.optional(),
	orderBy: TemplateOrderByWithRelationInputObjectSchema.optional(),
	cursor: TemplateWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), TemplateCountAggregateInputObjectSchema])
		.optional(),
	_min: TemplateMinAggregateInputObjectSchema.optional(),
	_max: TemplateMaxAggregateInputObjectSchema.optional(),
	_avg: TemplateAvgAggregateInputObjectSchema.optional(),
	_sum: TemplateSumAggregateInputObjectSchema.optional(),
})
