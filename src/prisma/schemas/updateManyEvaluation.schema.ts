import { z } from 'zod'
import { EvaluationUpdateManyMutationInputObjectSchema } from './objects/EvaluationUpdateManyMutationInput.schema'
import { EvaluationWhereInputObjectSchema } from './objects/EvaluationWhereInput.schema'

export const EvaluationUpdateManySchema = z.object({
	data: EvaluationUpdateManyMutationInputObjectSchema,
	where: EvaluationWhereInputObjectSchema.optional(),
})
