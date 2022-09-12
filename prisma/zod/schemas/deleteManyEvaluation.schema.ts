import { z } from 'zod'
import { EvaluationWhereInputObjectSchema } from './objects/EvaluationWhereInput.schema'

export const EvaluationDeleteManySchema = z.object({
	where: EvaluationWhereInputObjectSchema.optional(),
})
