import { z } from 'zod'
import { EvaluationCreateManyInputObjectSchema } from './objects/EvaluationCreateManyInput.schema'

export const EvaluationCreateManySchema = z.object({
	data: EvaluationCreateManyInputObjectSchema,
})
