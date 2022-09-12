import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './objects/EvaluationWhereUniqueInput.schema'
import { EvaluationCreateInputObjectSchema } from './objects/EvaluationCreateInput.schema'
import { EvaluationUpdateInputObjectSchema } from './objects/EvaluationUpdateInput.schema'

export const EvaluationUpsertSchema = z.object({
	where: EvaluationWhereUniqueInputObjectSchema,
	create: EvaluationCreateInputObjectSchema,
	update: EvaluationUpdateInputObjectSchema,
})
