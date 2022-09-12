import { z } from 'zod'
import { EvaluationWhereInputObjectSchema } from './objects/EvaluationWhereInput.schema'
import { EvaluationOrderByWithAggregationInputObjectSchema } from './objects/EvaluationOrderByWithAggregationInput.schema'
import { EvaluationScalarWhereWithAggregatesInputObjectSchema } from './objects/EvaluationScalarWhereWithAggregatesInput.schema'
import { EvaluationScalarFieldEnumSchema } from './enums/EvaluationScalarFieldEnum.schema'

export const EvaluationGroupBySchema = z.object({
	where: EvaluationWhereInputObjectSchema.optional(),
	orderBy: EvaluationOrderByWithAggregationInputObjectSchema,
	having: EvaluationScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(EvaluationScalarFieldEnumSchema),
})
